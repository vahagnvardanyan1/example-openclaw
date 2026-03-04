import express from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authenticateToken } from '../middleware/authenticator';

const router = express.Router();

/**
 * POST /auth/login
 * Route to handle user login.
 */
router.post('/login', AuthController.login);

/**
 * Protected route example
 */
router.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

export default router;
