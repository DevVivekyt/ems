let { createError, createSuccess } = require("../middleware/response.js");
let Employee = require("../models/employe.model.js");
let bcrypt = require("bcrypt");

const registerEmployee = async (req, res) => {
  const {
    employeePassword,
    employeeConfirmPassword,
    employeeEmail,
    ...employee
  } = req.body;

  if (employeePassword !== employeeConfirmPassword) {
    return res
      .status(400)
      .json(createError("Password and confirm password do not match!"));
  }

  try {
    const existingEmployee = await Employee.findOne({
      employeeEmail,
    });

    if (existingEmployee) {
      return res.status(400).json(createError("Email already exists!"));
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(employeePassword, salt);
    const newEmployee = new Employee({
      ...employee,
      employeeEmail,
      employeePassword: hash,
      // profilePic: req.file.path,
    });

    await newEmployee.save();

    const newEmployeeWithoutPassword = { ...newEmployee._doc };
    delete newEmployeeWithoutPassword.employeePassword;

    res
      .status(200)
      .json(
        createSuccess("Employee has been created", newEmployeeWithoutPassword)
      );
  } catch (error) {
    console.log("Error creating employee", error);
    res.status(500).json(createError("Failed to add an employee"));
  }
};

const retrieveEmployee = async (req, res) => {
  try {
    const employees = await Employee.find({ isDeleted: false });

    const employeesWithoutPassword = employees.map((employee) => {
      const { employeePassword, ...employeeWithoutPassword } = employee._doc;
      return employeeWithoutPassword;
    });
    res
      .status(200)
      .json(createSuccess("Retrieve Success", employeesWithoutPassword));
  } catch (error) {
    res.status(500).json(createError("Failed to retrive employee"));
  }
};

module.exports = { registerEmployee, retrieveEmployee };
