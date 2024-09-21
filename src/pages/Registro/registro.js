import { useState } from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { tw } from 'twind';
import { Link } from "react-router-dom";

// Componente de Registro
const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Registro:", { username, email, password });
  };

  return (
    <div className={tw`inset-0 flex items-center justify-center min-h-screen bg-white z-10`}>
      <div className={tw`bg-gray-100 p-8 rounded-lg w-full max-w-md z-20`}> {/* Mantendo o mesmo max-w-md para garantir a largura */}
        <h1 className={tw`text-2xl font-bold mb-6 text-center text-gray-700`}>Crie sua conta</h1>
        <form onSubmit={handleSubmit}>
          <div className={tw`relative mb-4`}>
            <input
              type="text"
              placeholder="Nome de usuário"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={tw`w-full p-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <FaUser className={tw`absolute top-3 right-3 text-gray-500`} />
          </div>
          <div className={tw`relative mb-4`}>
            <input
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={tw`w-full p-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <FaEnvelope className={tw`absolute top-3 right-3 text-gray-500`} />
          </div>
          <div className={tw`relative mb-6`}>
            <input
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={tw`w-full p-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500`}
            />
            <FaLock className={tw`absolute top-3 right-3 text-gray-500`} />
          </div>
          <div className={tw`flex items-center justify-between mb-6`}>
            <label className={tw`flex items-center mr-4`}>
              <input type="checkbox" className={tw`mr-2`} />
              Aceito os termos de serviço
            </label>
          </div>
          <button 
            type="submit" 
            className={tw`w-full py-2 bg-[#FFA500] text-white font-semibold rounded-md hover:bg-[#FF8C00] transition duration-300`}>
            Registrar
          </button>
          <div className={tw`mt-4 text-center`}>
            <p className={tw`text-gray-600`}>
              Já tem uma conta? <Link to="/login" className={tw`text-blue-500 hover:underline`}>Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
