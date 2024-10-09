import React, { createContext, useState } from 'react';

// Criação do contexto
export const AuthContext = createContext();

// Componente Provider
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(null); // Adiciona o estado do token

  // Funções de login e logout
  const login = (token, userData) => {
    setIsLoggedIn(true);
    setUsuario(userData);
    setToken(token); // Armazena o token no estado
    localStorage.setItem('token', token); // Armazena o token no localStorage
    localStorage.setItem('usuario', JSON.stringify(userData));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsuario(null);
    setToken(null); // Limpa o token
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, usuario, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
