import express from "express";
import {
  getServices,
  getStateList,
  getCityList,
} from "../controllers/serviceController.js";

const router = express.Router();

router.route("/").get(getServices);
router.route("/states").get(getStateList);
router.route("/cities").get(getCityList);

export default router;
