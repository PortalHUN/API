import express, { Express, Request, Response } from "express";

import dotenv from "dotenv";
dotenv.config();

import db from "./utils/db";

const app: Express = express();
const port = process.env.PORT || 4000;

app.get("/", async (req: Request, res: Response) => {
  res.json({ message: "Welcome to PortalHUN's API." });
});

app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
