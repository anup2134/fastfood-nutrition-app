import express from "express";
import {
  createItem,
  searchItem,
  getItem,
} from "../controller/itemController.js";

const router = express.Router();

router.post("/insert", createItem);
router.get("/getItem", getItem);
router.post("/searchItem", searchItem);

export default router;
