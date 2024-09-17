import { useState, useEffect } from 'react';
import OrderSection from './OrderSection';
import { toast } from 'react-toastify';
import { tw } from 'twind';

// Array de imagens para o slideshow
const slides = [
  'https://images.unsplash.com/photo-1602192103300-47e66756152e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1602192103300-47e66756152e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

// Componente principal da Home
function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cart, setCart] = useState([]); // Estado do carrinho
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para trocar o slide automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Função para adicionar item ao carrinho
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        // Item já existe no carrinho, aumentar a quantidade
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      // Adicionar novo item ao carrinho
      return [...prevCart, { ...item, quantity: 1 }];
    });
    toast.success(`${item.name} adicionado ao carrinho!`);
  };

  // Função para incrementar a quantidade de um item
  const incrementQuantity = (id) => {
    setCart(prevCart => prevCart.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  // Função para decrementar a quantidade de um item
  const decrementQuantity = (id) => {
    setCart(prevCart => prevCart.map(item => 
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity }
        : item
    ));
  };

  // Função para remover um item do carrinho
  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
    toast.info('Item removido do carrinho!');
  };

  // Função para calcular o valor total do carrinho
  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + parseFloat(item.price.replace('R$ ', '').replace(',', '.')) * item.quantity, 0)
      .toFixed(2);
  };

  // Função para finalizar o pedido
  const handleCheckout = () => {
    toast.success('Pedido finalizado com sucesso!');
    setCart([]); // Limpar o carrinho após o checkout
    setIsModalOpen(false); // Fechar o modal após o checkout
  };

  return (
    <>
      <div className={tw`relative w-full h-[300px] bg-home bg-cover bg-center`}>
        {/* Slideshow */}
        <div className={tw`absolute inset-0`}>
          <img
            src={slides[currentSlide]}
            alt={`Slide ${currentSlide + 1}`}
            className={tw`w-screen h-full object-cover`}
          />
        </div>

        {/* Texto sobreposto */}
        <div className={tw`absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30`}>
          <h1 className={tw`text-4xl font-bold mb-4`}>Bem Vindo ao Delivery</h1>
          <p className={tw`text-lg mb-6`}>
            Receba suas comidas favoritas no conforto da sua casa – Rápido, fácil e delicioso!
          </p>
          <a href="#order" className={tw`bg-[#FFA500] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#FF8C00] transition duration-300`}>
            Fazer pedido!
          </a>
        </div>
      </div>

      {/* Seção de pedidos */}
      <OrderSection onAddToCart={handleAddToCart} />

      {/* Botão para abrir o modal do carrinho */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={tw`fixed bottom-4 right-4 bg-[#FFA500] text-white p-4 rounded-full shadow-lg hover:bg-[#FFA500] transition duration-300 flex items-center justify-center`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={tw`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13l-1.5-6M9 21h6" />
        </svg>
      </button>

      {/* Modal do carrinho */}
      {isModalOpen && (
        <div className={tw`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}>
          <div className={tw`bg-white p-6 rounded-lg shadow-lg max-w-md w-full`}>
            <h3 className={tw`text-lg font-semibold mb-4`}>Carrinho de Compras</h3>
            <ul className={tw`mb-4`}>
              {cart.map((item, index) => (
                <li key={index} className={tw`flex items-center justify-between mb-2`}>
                  <div className={tw`flex items-center`}>
                    <button onClick={() => decrementQuantity(item.id)} className={tw`bg-gray-200 px-2 py-1 rounded-l`}>-</button>
                    <span className={tw`px-3`}>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)} className={tw`bg-gray-200 px-2 py-1 rounded-r`}>+</button>
                    <span className={tw`ml-4`}>{item.name}</span>
                    <span>{item.price}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} className={tw`text-red-500 hover:underline`}>Remover</button>
                </li>
              ))}
            </ul>
            <div className={tw`flex justify-between font-bold mb-4`}>
              <span>Total:</span>
              <span>R$ {calculateTotal()}</span>
            </div>
            <div className={tw`flex justify-end`}>
              <button
                onClick={handleCheckout}
                className={tw`bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300`}
              >
                Finalizar Pedido
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
