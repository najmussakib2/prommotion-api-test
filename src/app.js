import express from "express";

import cors from "cors";
import router from "./app/routes/index.js";
import cookieParser from "cookie-parser";

const app = express();
app.use(cors());
app.use(cookieParser());
// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the DAP API",
  });
});

export default app;