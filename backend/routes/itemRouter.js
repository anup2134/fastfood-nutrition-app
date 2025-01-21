import express from "express";
import {
  createItem,
  searchItem,
  getItem,
  getBurgers,
  getSides,
  getBeverages,
  getDesserts,
} from "../controller/itemController.js";

const router = express.Router();

router.post("/insert", createItem);
router.get("/getItem/:id", getItem);
router.get("/searchItem/:query", searchItem);
router.get("/getburgers", getBurgers);
router.get("/getsides", getSides);
router.get("/getbeverages", getBeverages);
router.get("/getdesserts", getDesserts);

export default router;
