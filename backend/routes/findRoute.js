import express from "express";
import { getFindData } from "../controllers/find.controllers.js";

const router = express.Router();

router.get("/:query/:maxlength", getFindData);

export default router;

