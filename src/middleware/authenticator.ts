import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserRepository } from '../repositories/user.repository';

/**
 * Middleware to authenticate requests using JWT.
 * Checks for token validity and user existence in database.
 */
export const authenticateToken = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const secret = process.env.JWT_SECRET || 'your_jwt_secret';
    const decoded = jwt.verify(token, secret) as jwt.JwtPayload;
    const user = await UserRepository.findUserById(decoded.id);

    if (!user) {
      return res.sendStatus(404);
    }

    req.user = user;
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(403);
  }
};