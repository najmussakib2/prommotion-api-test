import express from "express";

import cors from "cors";
import { couponRoutes } from "./app/modules/coupon/coupon.route.js";

const app = express();
app.use(cors());

// parser
app.use(express.json());


app.use("/api/v1", couponRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Promotion API",
  });
});

export default app;