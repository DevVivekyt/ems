import express from "express";
import cors from "cors";
import connectToDatabase from "./connection/conn.js";
import authRoute from "./routes/auth.js";
import qrRoute from "./routes/qr.js";

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

app.listen(port, () => {
  connectToDatabase();
  console.log("Connected to server");
});
