import React from "react";
import { tw } from "twind";

const Footer = () => {
  return (
    <footer className={tw`w-full bg-gray-800 text-white py-5`}>
      <div className={tw`flex justify-around flex-wrap max-w-6xl mx-auto py-5`}>
        <div className={tw`flex-1 min-w-[200px] m-2`}>
          <h4 className={tw`font-bold mb-2`}>Contato</h4>
          <p>Telefone: (16) 98852-4587</p>
          <p>Email: contato@lanchonet.com</p>
        </div>
        <div className={tw`flex-1 min-w-[200px] m-2`}>
          <h4 className={tw`font-bold mb-2`}>Links Rápidos</h4>
          <ul className={tw`list-none p-0`}>
            <li className={tw`mb-1`}>
              <a href="#order" className={tw`text-white hover:underline`}>Cardápio</a>
            </li>
            <li className={tw`mb-1`}>
              <a href="#localizacao" className={tw`text-white hover:underline`}>Localização</a>
            </li>
          </ul>
        </div>
        <div className={tw`flex-1 min-w-[200px] m-2`}>
          <h4 className={tw`font-bold mb-2`}>Redes Sociais</h4>
          <ul className={tw`list-none p-0`}>
            <li className={tw`mb-1`}>
              <a href="https://facebook.com" className={tw`text-white hover:underline`}>Facebook</a>
            </li>
            <li className={tw`mb-1`}>
              <a href="https://instagram.com" className={tw`text-white hover:underline`}>Instagram</a>
            </li>
            <li className={tw`mb-1`}>
              <a href="https://twitter.com" className={tw`text-white hover:underline`}>Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={tw`text-center mt-5 pt-5 border-t border-gray-700`}>
        <p>© 2024 LanchoNet. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
