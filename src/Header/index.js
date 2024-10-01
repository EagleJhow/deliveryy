import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { tw } from 'twind';
import { FaUser, FaHeadset } from 'react-icons/fa';
import { AuthContext } from './AuthContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { isLoggedIn, usuario, logout } = useContext(AuthContext); // Pega os valores de login e funções do contexto
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout(); // Chama a função logout do contexto
    navigate('/login');
  };

  return (
    <header className={tw`bg-[#FF4C4C] text-white shadow-md w-full`}>
      <div className={tw`flex items-center justify-between p-4 container mx-auto`}>
        <Link className={tw`text-3xl font-bold hover:text-blue-400`} to="/">
          LanchoNet
        </Link>

        <button 
          className={tw`lg:hidden text-2xl focus:outline-none`} 
          onClick={toggleMenu}
        >
          {isOpen ? '✖' : '☰'}
        </button>

        <nav className={tw`lg:flex lg:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
          {isLoggedIn ? (
            <div className={tw`relative`}>
              {/* Exibe o nome do usuário */}
              <span className={tw`cursor-pointer`} onClick={() => setShowDropdown(!showDropdown)}>
                {`${usuario}`} {/* Exibe o nome do usuário a partir do contexto */}
              </span>
              {/* Menu suspenso de logout */}
              {showDropdown && (
                <div className={tw`absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-50`}>
                  <button
                    onClick={handleLogout}
                    className={tw`block w-full text-left px-4 py-2 text-gray-700 hover:bg-[#FF4C4C] hover:text-white transition duration-300 rounded-lg`}
                  >
                    Sair
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link className={tw`text-lg hover:text-blue-400 flex items-center`} to="/login">
              <FaUser className={tw`mr-2`} />
            </Link>
          )}
          <Link className={tw`text-lg hover:text-blue-400 flex items-center`} to="/suporte">
            <FaHeadset className={tw`mr-2`} /> Suporte
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
