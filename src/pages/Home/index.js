import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { tw } from 'twind';

// Array de imagens para o slideshow
const slides = [
  'https://images.unsplash.com/photo-1602192103300-47e66756152e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://img.freepik.com/fotos-gratis/ainda-vida-de-delicioso-hamburguer-americano_23-2149637301.jpg?w=1380&t=st=1726341857~exp=1726342457~hmac=92077eb273735fb2b32472bbb578f6aa92916305fea242bf60ee6af6f02f27b3',
  'https://images.unsplash.com/photo-1602192103300-47e66756152e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

// Array de itens para a seção de pedidos
const items = [
    {
        name: "Hambúrguer Clássico",
        price: "R$ 25,00",
        description: "Um suculento hambúrguer artesanal, grelhado na perfeição, com queijo cheddar derretido, alface crocante, tomate fresco e molho especial da casa, tudo isso no pão brioche macio.",
        image: "https://st2.depositphotos.com/5260901/8297/i/450/depositphotos_82974686-stock-photo-perfect-hamburger-classic-burger-american.jpg"
    },
    {
        name: "Pizza Clássica",
        price: "R$ 55,00",
        description: "Massa leve e crocante, coberta com molho de tomate artesanal, queijo muçarela derretido e um toque de manjericão fresco. Uma combinação simples e deliciosa que agrada a todos os paladares!Deliciosamente crocantes por fora e macias por dentro, nossas batatas fritas são perfeitas para acompanhar qualquer lanche, servidas quentinhas e com o sal na medida certa!",
        image: "https://img.freepik.com/fotos-gratis/pizza-havaiana_1203-2455.jpg?w=1380&t=st=1726342066~exp=1726342666~hmac=7b0bfdd2294c55e9d75bd76c7d57fc0f1f272e6da4ca44797704ba2623c2634c"
    },
    {
        name: "Guaraná Antarctica 350ml",
        price: "R$ 6,00",
        description: "O refrescante e autêntico sabor do Guaraná, uma das bebidas mais queridas do Brasil. Com um toque levemente adocicado e uma pitada de energia, é a escolha ideal para acompanhar suas refeições e momentos de descontração.",
        image: "https://cdn.discordapp.com/attachments/841668872184528936/1284598745861853316/pngwing.com_2.png?ex=66e7374f&is=66e5e5cf&hm=93e4815bc9217381c99bd8f3b4883141f799a4cb2f684392e71a5d2fb94641cf&"
    },
    {
        name: "Batata Frita Crocante",
        price: "R$ 10,00",
        description: "Porção generosa de batatas fritas crocantes por fora e macias por dentro, temperadas com sal na medida certa, ideal para compartilhar ou saborear sozinho.",
        image: "https://cdn.discordapp.com/attachments/841668872184528936/1284598756628500562/pngwing.com_1.png?ex=66e73752&is=66e5e5d2&hm=429ade75ee442ed97e057c4052710bc94324d6ab3fde9ece6cff1f99d4a3f233&"
    },
    {
        name: "Fanta Laranja 350ml",
        price: "R$ 7,00",
        description: "Refrigerante vibrante e refrescante, com o sabor intenso e doce da laranja. Perfeito para acompanhar suas refeições e trazer um toque cítrico e agradável ao seu dia.",
        image: "https://cdn.discordapp.com/attachments/841668872184528936/1284597182456139806/580b57fbd9996e24bc43c10f.png?ex=66e735da&is=66e5e45a&hm=b0222d400d872c1509f5d1efe109314f1665b7f2d168651ab0fa5f0975c2f9d0&"
    },
    {
        name: "Heineken 330ml",
        price: "R$ 8,00",
        description: "Cerveja premium puro malte, de sabor equilibrado e refrescante, com amargor suave e notas leves de malte. Ideal para quem busca uma experiência autêntica e de qualidade, perfeita para acompanhar qualquer ocasião.",
        image: "https://cdn.discordapp.com/attachments/841668872184528936/1284597878437969920/pngwing.com.png?ex=66e73680&is=66e5e500&hm=3f4cc6e9e631149e46f15d240c8e40f85b722a93f29b97d44b6e14d1d2f9f0b5&"
    },
    {
        name: "Hambúrguer Clássico",
        price: "R$ 25,00",
        description: "Um suculento hambúrguer artesanal, grelhado na perfeição, com queijo cheddar derretido, alface crocante, tomate fresco e molho especial da casa, tudo isso no pão brioche macio.",
        image: "https://st2.depositphotos.com/5260901/8297/i/450/depositphotos_82974686-stock-photo-perfect-hamburger-classic-burger-american.jpg"
    },
    {
        name: "Pizza Clássica",
        price: "R$ 55,00",
        description: "Massa leve e crocante, coberta com molho de tomate artesanal, queijo muçarela derretido e um toque de manjericão fresco. Uma combinação simples e deliciosa que agrada a todos os paladares!Deliciosamente crocantes por fora e macias por dentro, nossas batatas fritas são perfeitas para acompanhar qualquer lanche, servidas quentinhas e com o sal na medida certa!",
        image: "https://img.freepik.com/fotos-gratis/pizza-havaiana_1203-2455.jpg?w=1380&t=st=1726342066~exp=1726342666~hmac=7b0bfdd2294c55e9d75bd76c7d57fc0f1f272e6da4ca44797704ba2623c2634c"
    },
    {
        name: "Guaraná Antarctica 350ml",
        price: "R$ 6,00",
        description: "O refrescante e autêntico sabor do Guaraná, uma das bebidas mais queridas do Brasil. Com um toque levemente adocicado e uma pitada de energia, é a escolha ideal para acompanhar suas refeições e momentos de descontração.",
        image: "https://cdn.discordapp.com/attachments/841668872184528936/1284598745861853316/pngwing.com_2.png?ex=66e7374f&is=66e5e5cf&hm=93e4815bc9217381c99bd8f3b4883141f799a4cb2f684392e71a5d2fb94641cf&"
    },
    {
        name: "Batata Frita Crocante",
        price: "R$ 10,00",
        description: "Porção generosa de batatas fritas crocantes por fora e macias por dentro, temperadas com sal na medida certa, ideal para compartilhar ou saborear sozinho.",
        image: "https://cdn.discordapp.com/attachments/841668872184528936/1284598756628500562/pngwing.com_1.png?ex=66e73752&is=66e5e5d2&hm=429ade75ee442ed97e057c4052710bc94324d6ab3fde9ece6cff1f99d4a3f233&"
    },
    {
        name: "Fanta Laranja 350ml",
        price: "R$ 7,00",
        description: "Refrigerante vibrante e refrescante, com o sabor intenso e doce da laranja. Perfeito para acompanhar suas refeições e trazer um toque cítrico e agradável ao seu dia.",
        image: "https://cdn.discordapp.com/attachments/841668872184528936/1284597182456139806/580b57fbd9996e24bc43c10f.png?ex=66e735da&is=66e5e45a&hm=b0222d400d872c1509f5d1efe109314f1665b7f2d168651ab0fa5f0975c2f9d0&"
    },
    {
        name: "Heineken 330ml",
        price: "R$ 8,00",
        description: "Cerveja premium puro malte, de sabor equilibrado e refrescante, com amargor suave e notas leves de malte. Ideal para quem busca uma experiência autêntica e de qualidade, perfeita para acompanhar qualquer ocasião.",
        image: "https://cdn.discordapp.com/attachments/841668872184528936/1284597878437969920/pngwing.com.png?ex=66e73680&is=66e5e500&hm=3f4cc6e9e631149e46f15d240c8e40f85b722a93f29b97d44b6e14d1d2f9f0b5&"
    }
];

// Componente da seção de pedidos
function OrderSection({ onAddToCart }) {
    const handleAddToCart = (item) => {
        onAddToCart(item);
        toast.success(`${item.name} adicionado ao carrinho!`);
    };

    return (
        <div id="order" className={tw`mt-8`}>
            <h2 className={tw`text-2xl font-bold text-center mb-6 text-white`}>Faça seu Pedido</h2>
            {/* Grid de 2 colunas com 3 itens de cada lado */}
            <div className={tw`grid grid-cols-2 gap-6 px-6`}>
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className={tw`relative flex items-center border p-4 rounded-lg shadow-md bg-white transition-all hover:shadow-xl hover:scale-95`}>
                        {/* Imagem à esquerda */}
                        <img src={item.image} alt={item.name} className={tw`w-28 h-28 object-cover rounded-full mr-4`} />

                        {/* Texto à direita */}
                        <div className={tw`flex flex-col flex-grow`}>
                            <h3 className={tw`text-lg font-semibold mb-1 text-gray-900`}>{item.name}</h3>
                            <p className={tw`text-gray-600 mb-2 break-words text-xs`}>{item.description}</p>
                            <span className={tw`text-lg font-bold text-blue-500 mb-2`}>{item.price}</span>
                        </div>
                        
                        {/* Ícone de carrinho no canto inferior direito */}
                        <button 
                            onClick={() => handleAddToCart(item)} 
                            className={tw`absolute bottom-4 right-4 p-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center`}>
                            {/* Ícone de carrinho SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" className={tw`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13l-1.5-6M9 21h6" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

// Componente principal da Home
function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cart, setCart] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSupportPageOpen, setIsSupportPageOpen] = useState(false);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        // Troca o slide a cada 3 segundos
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const handleAddToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price.replace('R$ ', '').replace(',', '.')), 0).toFixed(2);
    };

    const handleCheckout = () => {
        // Lógica de finalização de pedido, como enviar o pedido para um servidor
        toast.success('Pedido finalizado com sucesso!');
        setCart([]); // Limpar o carrinho após o checkout
        setIsModalOpen(false); // Fechar o modal após o checkout
    };

    const handleAddComment = () => {
        if (newComment.trim()) {
            setComments((prevComments) => [...prevComments, newComment]);
            setNewComment('');
            toast.success('Comentário adicionado!');
        }
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
                    <a href="#order" className={tw`bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300`}>
                        Fazer pedido!
                    </a>
                </div>
            </div>

            {/* Seção de pedidos */}
            <OrderSection onAddToCart={handleAddToCart} />

            {/* Botão para abrir o modal do carrinho */}
            <button 
                onClick={() => setIsModalOpen(true)}
                className={tw`fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center`}>
                {/* Ícone de carrinho de compras SVG */}
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
                                <li key={index} className={tw`flex justify-between mb-2`}>
                                    <span>{item.name}</span>
                                    <span>{item.price}</span>
                                </li>
                            ))}
                        </ul>
                        <div className={tw`flex justify-between font-bold mb-4`}>
                            <span>Total:</span>
                            <span>R$ {calculateTotal()}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className={tw`w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 mb-2`}>
                            Finalizar Pedido
                        </button>
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className={tw`w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300`}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}    
            
        </>
    );
}

export default Home;