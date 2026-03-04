import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';

/**
 * Controller for handling authentication requests.
 */
export class AuthController {
  /**
   * Handles user login, verifying credentials and returning a JWT.
   * @param req - Express request object
   * @param res - Express response object
   */
  static async login(req: Request, res: Response): Promise<void> {
    const { username, password } = req.body;

    try {
      const user = await UserRepository.findUserByUsername(username);
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const secret = process.env.JWT_SECRET || 'your_jwt_secret';
      const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });

      res.json({ token });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
