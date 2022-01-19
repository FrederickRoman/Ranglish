import express from "express";
import wordRouter from "./wordRouter";

const router = express.Router();
router.use("/word", wordRouter);

export default router;
