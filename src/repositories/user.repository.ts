import { User } from '../models/user';
import { Database } from '../utils/database';

/**
 * Repository for user data access and manipulation.
 */
export class UserRepository {
  /**
   * Finds a user by their ID.
   * @param id - User's unique identifier.
   * @returns The user if found, otherwise null.
   */
  static async findUserById(id: string): Promise<User | null> {
    const db = await Database.getConnection();
    const result = await db.query('SELECT * FROM users WHERE id = ?', [id]);

    if (result.length === 0) {
      return null;
    }

    return result[0] as User;
  }
}
