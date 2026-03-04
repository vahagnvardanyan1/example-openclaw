-- Migration file to create users and authentication tokens tables

-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create authentication tokens table
CREATE TABLE IF NOT EXISTS authentication_tokens (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    token_hash VARCHAR(255) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create index for fast lookup on user_id in authentication_tokens
CREATE INDEX idx_auth_tokens_user_id ON authentication_tokens(user_id);

-- Migration rollback script
-- Drop authentication tokens table first due to foreign key constraint
DROP TABLE IF EXISTS authentication_tokens;
DROP TABLE IF EXISTS users;