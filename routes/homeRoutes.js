import { Router } from "express";
import logger from "../middleware/logger.js";
import { getHome } from "../controllers/homeController.js";

const router = Router();

router.get("/", logger, getHome);

export default router;