import { Router } from "express";
import auth from "../middleware/auth.js";
import validateUser from "../middleware/validateUser.js";
import { getUsers, getUser } from "../controllers/userController.js";

const router = Router();

router.get("/", auth, getUsers);
router.get("/:userId", auth, validateUser, getUser);

export default router;