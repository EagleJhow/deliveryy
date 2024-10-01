import axios from 'axios';

const API_URL = 'http://localhost:4000'; // URL da sua API

export const registerUser = async (username, email, password) => {
  try {
    const response = await axios.post('http://localhost:4000/registro', { nome: username, email, senha: password });
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    throw error; // Lança o erro para ser tratado no componente Register
  }
};


export const loginUser = async (email, senha) => {
  try {
    const response = await axios.post('http://localhost:4000/login', { email, senha });
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    throw error; // Lança o erro para ser tratado no componente Login
  }
};


// Função para fazer logout
export const logoutUser = () => {
  return axios.post(`${API_URL}/logout`);
};
