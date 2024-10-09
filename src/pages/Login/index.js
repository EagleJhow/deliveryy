import React, { useState, useContext } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import { tw } from 'twind';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Header/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:4000/login', {
        email: email,
        senha: senha,
      });

      const { token, usuario } = response.data;

      if (usuario) {
        // Certifique-se que 'usuario' está sendo retornado da API corretamente
        login(token, usuario); // Aqui você está armazenando o 'usuario' no contexto
        toast.success(`Login realizado com sucesso! Bem-vindo, ${usuario.nome}`); // Exiba o nome do usuário
      } else {
        throw new Error("Dados de usuário não retornados.");
      }

      navigate('/');
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error('Usuário não registrado. Verifique suas credenciais.');
      } else {
        toast.error('Erro ao realizar login.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={tw`inset-0 flex items-center justify-center min-h-screen bg-white z-10`}>
      <div className={tw`bg-gray-200 p-8 rounded-lg w-full max-w-md z-20`}>
        <h1 className={tw`text-2xl font-bold mb-6 text-center text-gray-700`}>Acesse sua conta</h1>
        <form onSubmit={handleLogin}>
          <div className={tw`relative mb-4`}>
            <input
              type="text"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={tw`w-full p-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <FaUser className={tw`absolute top-3 right-3 text-gray-500`} />
          </div>
          <div className={tw`relative mb-6`}>
            <input
              type="password"
              placeholder="Senha"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className={tw`w-full p-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <FaLock className={tw`absolute top-3 right-3 text-gray-500`} />
          </div>
          <div className={tw`flex items-center justify-between mb-6`}>
            <label className={tw`flex items-center mr-4`}>
              <input type="checkbox" className={tw`mr-2`} />
              Lembre de mim
            </label>
            <a href="#" className={tw`text-blue-500 hover:underline`}>Esqueceu sua senha?</a>
          </div>
          <button 
            type="submit" 
            className={tw`w-full py-2 bg-[#FFA500] text-white font-semibold rounded-md hover:bg-[#FF8C00] transition duration-300`}
            disabled={loading}
          >
            {loading ? 'Carregando...' : 'Login'}
          </button>
          <div className={tw`mt-4 text-center`}>
            <p className={tw`text-gray-600`}>
              Não tem uma conta? <a href="/registro" className={tw`text-blue-500 hover:underline`}>Registrar</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
