import express from "express";
import cors from "cors";
import connectToDatabase from "./connection/conn.js";
import authRoute from "./routes/auth.js";

const app = express();
const port = 8800;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", authRoute);

app.listen(port, () => {
  connectToDatabase();
  console.log("Connected to server");
});
