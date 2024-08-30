import express from "express";
import {
  createItem,
  searchItem,
  getItem,
} from "../controller/itemController.js";

const router = express.Router();

router.post("/insert", createItem);
router.get("/getItem/:id", getItem);
router.get("/searchItem/:query", searchItem);

export default router;
