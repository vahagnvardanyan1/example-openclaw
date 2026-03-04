import mysql from 'mysql2/promise';

/**
 * Utility for database connection management.
 */
export class Database {
  private static connection: mysql.Connection;

  /**
   * Establishes a database connection.
   */
  static async getConnection(): Promise<mysql.Connection> {
    if (!Database.connection) {
      Database.connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'app_database'
      });
    }
    return Database.connection;
  }
}
