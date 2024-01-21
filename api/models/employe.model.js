let mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    employeeId: {
      type: String,
      requires: true,
      unique: true,
    },
    employeeName: {
      type: String,
      requires: true,
    },
    employeeEmail: {
      type: String,
      requires: true,
    },
    employeePassword: {
      type: String,
      requires: true,
    },
    employeeConfirmPassword: {
      type: String,
      requires: true,
    },
    designation: {
      type: String,
      requires: true,
    },
    joiningDate: {
      type: String,
      requires: true,
    },
    dateOfBirth: {
      type: String,
      requires: true,
    },
    salary: {
      type: Number,
      requires: true,
    },
    phoneNumber: {
      type: String,
      requires: true,
    },
    address: {
      type: String,
      requires: true,
    },
    profilePic: {
      type: String,
      require: false,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Employee = mongoose.model("Employee", employeeSchema);
module.exports = Employee;
