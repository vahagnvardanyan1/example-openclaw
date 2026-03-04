import React from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthenticationButton: React.FC = () => {
  const { isAuthenticated, login, logout } = useAuth();

  return (
    <button onClick={isAuthenticated ? logout : login} aria-label="Authentication button">
      {isAuthenticated ? 'Logout' : 'Login'}
    </button>
  );
};

export default AuthenticationButton;