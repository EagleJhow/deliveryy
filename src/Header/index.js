import { useState } from 'react';
import { Link } from 'react-router-dom';
import { tw } from 'twind';
import { FaShoppingCart, FaUser, FaHeadset } from 'react-icons/fa';


function Header() {
    const [isOpen, setIsOpen] = useState(false);
    

    const toggleMenu = () => setIsOpen(!isOpen);
    

    return (
        <header className={tw`bg-[#FF4C4C] text-white shadow-md w-full`}>
            <div className={tw`flex items-center justify-between p-4 container mx-auto`}>
                {/* Logo */}
                <Link className={tw`text-3xl font-bold hover:text-blue-400`} to="/">
                Tasty Spot
                </Link>

                {/* Menu hambúrguer para dispositivos móveis */}
                <button 
                    className={tw`lg:hidden text-2xl focus:outline-none`} 
                    onClick={toggleMenu}
                >
                    {isOpen ? '✖' : '☰'}
                </button>

                {/* Navegação */}
                <nav className={tw`lg:flex lg:space-x-8 ${isOpen ? 'block' : 'hidden'}`}>
                
                    <Link className={tw`text-lg hover:text-blue-400 flex items-center`} to="/login">
                        <FaUser className={tw`mr-2`} /> {/* Ícone de usuário */}
                    </Link>
                    <Link className={tw`text-lg hover:text-blue-400 flex items-center`} to="/suporte">
                        <FaHeadset className={tw`mr-2`} /> {/* Ícone de suporte */}
                    </Link>

                </nav>
            </div>

           
        </header>
    );
}

export default Header;
