import { useState, useEffect } from 'react';
import OrderSection from './OrderSection';
import { toast } from 'react-toastify';
import { tw } from 'twind';
import { FaTimes, FaArrowLeft, FaCreditCard, FaMoneyBillWave } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';


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
  const [isPaymentOpen, setIsPaymentOpen] = useState(false); // Estado para controle do modal de pagamento
  const [selectedPayment, setSelectedPayment] = useState(''); // Estado para método de pagamento selecionado

  const generatePixCode = () => {
    const totalAmount = calculateTotal();
    // Aqui você deve gerar a string do código Pix, ajustando conforme necessário
    return `00020101021129370016BR.GOV.BCB.PIX0136seu-codigo-pix${totalAmount}5204000053039865407${totalAmount}6304...`;
  };

   


  // Função para adicionar item ao carrinho
  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
    toast.success(`${item.name} adicionado ao carrinho!`);
  };

  // Função para trocar o slide automaticamente a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
    setIsPaymentOpen(true); // Mostra as opções de pagamento ao clicar em "Finalizar Pedido"
  };

   // Função para renderizar o formulário de pagamento
   const renderPaymentForm = () => {
    if (selectedPayment === 'card') {
      return (
        <div className={tw`mt-4`}>
          <h4 className={tw`text-lg font-semibold mb-2`}>Preencha os dados do cartão</h4>
          <input type="text" placeholder="Nome no cartão" className={tw`w-full p-2 border border-gray-300 rounded-md mb-2`} />
          <input type="text" placeholder="Número do cartão" className={tw`w-full p-2 border border-gray-300 rounded-md mb-2`} />
          <div className={tw`flex space-x-2`}>
            <input type="text" placeholder="Validade" className={tw`w-1/2 p-2 border border-gray-300 rounded-md mb-2`} />
            <input type="text" placeholder="CVV" className={tw`w-1/2 p-2 border border-gray-300 rounded-md mb-2`} />
          </div>
        </div>
      );
    } else if (selectedPayment === 'pix') {
      return (
        <div className={tw`mt-4 flex flex-col items-center`}>
          <h4 className={tw`text-lg font-semibold mb-2`}>Código PIX</h4>
          <div className={tw`flex justify-center mb-4`}>
            <QRCodeCanvas value={generatePixCode()} size={128} /> {/* Ajuste o tamanho conforme necessário */}
          </div>
          <p className={tw`text-sm text-gray-600`}>Aponte sua câmera para escanear o código.</p>
        </div>
      );
    }    
    return null;
  };

  // Função para lidar com a seleção do método de pagamento
  const handlePayment = (method) => {
    toast.success(`Pagamento com ${method} selecionado!`);
    setCart([]); // Limpa o carrinho após a seleção do pagamento
    setIsModalOpen(false); // Fecha o modal do carrinho
    setIsPaymentOpen(false); // Fecha o modal de pagamento
  };

  return (
    <>
      <div className={tw`relative w-full h-[300px] bg-home bg-cover bg-center`}>
        {/* Slideshow */}
        <div className={tw`absolute inset-0`}>
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className={tw`w-screen h-full object-cover`} />
        </div>

        {/* Texto sobreposto */}
        <div className={tw`absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30`}>
          <h1 className={tw`text-4xl font-bold mb-4`}>Bem Vindo ao Tasty Spot</h1>
          <p className={tw`text-lg mb-6`}>Sabor irresistível sem sair de casa. Peça agora!</p>
          <a href="#order" className={tw`bg-[#FFA500] px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#FF8C00] transition duration-300`}>
            Fazer pedido!
          </a>
        </div>
      </div>

      {/* Seção de pedidos */}
      <OrderSection onAddToCart={handleAddToCart} cartItems={cart} />

      {/* Botão para abrir o modal do carrinho */}
      <button
        onClick={() => setIsModalOpen(true)}
        className={tw`fixed bottom-4 right-4 bg-[#FFA500] text-white p-4 rounded-full shadow-lg hover:bg-[#FF8C00] transition duration-300 flex items-center justify-center`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className={tw`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13l-1.5-6M9 21h6" />
        </svg>
      </button>

      {/* Modal do carrinho */}
      {isModalOpen && (
        <div className={tw`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}>
          <div className={tw`bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative`}>
            {/* Botão de fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className={tw`absolute top-2 right-2 text-red-500 hover:text-red-700`}>
              <FaTimes size={24} />
            </button>
            <h3 className={tw`text-lg font-semibold mb-4`}>Carrinho de Compras</h3>
            <ul className={tw`mb-4`}>
              {cart.map((item) => (
                <li key={item.id} className={tw`flex justify-between items-center mb-2`}>
                  <div>
                    <p className={tw`font-semibold`}>{item.name}</p>
                    <p>{item.quantity} x {item.price}</p>
                  </div>
                  <div className={tw`flex items-center`}>
                    <button onClick={() => decrementQuantity(item.id)} className={tw`text-lg p-1`}>-</button>
                    <span className={tw`mx-2`}>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)} className={tw`text-lg p-1`}>+</button>
                    <button onClick={() => removeItem(item.id)} className={tw`ml-4 text-red-500 hover:text-red-700`}>
                      <FaTimes />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <p className={tw`font-semibold`}>Total: R$ {calculateTotal()}</p>
            <button
              onClick={handleCheckout}
              className={tw`w-full bg-[#FFA500] text-white font-semibold py-2 rounded-lg hover:bg-[#FF8C00] transition duration-300 mt-4`}
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      )}

      {/* Modal de pagamento */}
      {isPaymentOpen && (
        <div className={tw`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center`}>
          <div className={tw`bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative`}>
            {/* Botão de voltar */}
            <button
              onClick={() => setIsPaymentOpen(false)}
              className={tw`absolute top-2 left-2 text-blue-500 hover:text-blue-700 flex items-center`}>
              <FaArrowLeft className={tw`mr-2`} />
              Voltar
            </button>
            <h3 className={tw`text-lg font-semibold mb-4`}>Selecione o Método de Pagamento</h3>
            <div className={tw`flex justify-around`}>
              <button
                onClick={() => setSelectedPayment('card')}
                className={tw`flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300`}>
                <FaCreditCard className={tw`text-2xl`} />
                <span>Cartão</span>
              </button>
              <button
                onClick={() => setSelectedPayment('pix')}
                className={tw`flex items-center space-x-2 p-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-300`}>
                <FaMoneyBillWave className={tw`text-2xl`} />
                <span>PIX</span>
              </button>
            </div>
            {renderPaymentForm()}
            {selectedPayment && (
              <button
                onClick={() => handlePayment(selectedPayment)}
                className={tw`w-full bg-[#FFA500] text-white font-semibold py-2 rounded-lg hover:bg-[#FF8C00] transition duration-300 mt-4`}
              >
                Confirmar Pagamento
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
