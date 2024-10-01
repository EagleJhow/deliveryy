import React, { createContext, useState } from 'react';

// Criação do contexto
export const AuthContext = createContext();

// Componente Provider
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(null);

  // Funções de login e logout
  const login = (userData) => {
    setIsLoggedIn(true);
    setUsuario(userData);
    localStorage.setItem('token', 'fakeToken');
    localStorage.setItem('usuario', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsuario(null);
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
