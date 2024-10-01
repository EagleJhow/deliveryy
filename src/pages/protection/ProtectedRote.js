import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const usuario = localStorage.getItem('usuario');
  
  if (!usuario) {
    return <Navigate to="/login" />; // Se o usuário não estiver logado, redireciona para a página de login
  }
  
  return children; // Renderiza o conteúdo protegido
};

export default ProtectedRoute;
