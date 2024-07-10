import express from "express";
import mongoose from "mongoose";
import companyRoutes from "./routes/company";

import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use("/company", companyRoutes);

app.listen(port, () => {
  console.log(`Post is started at ${port}`);
});

mongoose.connect(process.env.MONGODB_URL as string);
