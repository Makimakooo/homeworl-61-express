import express from 'express';
import {
  getUsers,
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
} from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:userId', getUserById);
router.put('/:userId', updateUserById);
router.delete('/:userId', deleteUserById);

export default router;