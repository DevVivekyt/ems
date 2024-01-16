let express = require("express");
let cors = require("cors");
let connectToDatabase = require("./connection/conn");
let authRoute = require("./routes/auth.route");
let qrRoute = require("./routes/qr.route");
let attendanceRoute = require("./routes/attendance.route");

const app = express();
const port = 8800;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Api is working!");
});

app.use("/api", authRoute);
app.use("/api", qrRoute);
app.use("/api", attendanceRoute);

app.listen(port, () => {
  connectToDatabase();
  console.log("Connected to server");
});
