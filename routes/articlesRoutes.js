import express from 'express';
import {
  getArticles,
  createArticle,
  getArticleById,
  updateArticleById,
  deleteArticleById,
} from '../controllers/articlesController.js';

const router = express.Router();

router.get('/', getArticles);
router.post('/', createArticle);
router.get('/:articleId', getArticleById);
router.put('/:articleId', updateArticleById);
router.delete('/:articleId', deleteArticleById);

export default router;