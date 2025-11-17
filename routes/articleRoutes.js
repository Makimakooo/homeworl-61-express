import { Router } from "express";
import validateArticleAccess from "../middleware/validateArticleAccess.js";
import { getArticles, getArticle } from "../controllers/articleController.js";

const router = Router();

router.get("/", validateArticleAccess, getArticles);
router.get("/:articleId", validateArticleAccess, getArticle);

export default router;