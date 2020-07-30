import express from "express";
import path from "path";
import fs from "fs";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there!");
});

export { router as currentUserRouter };
