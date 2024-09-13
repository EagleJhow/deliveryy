import { useState, useEffect } from 'react';
import { tw } from 'twind';

// Array de imagens para o slideshow
const slides = [
  'https://images.unsplash.com/photo-1602192103300-47e66756152e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1602192103300-47e66756152e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        name: "Pizza",
        price: "R$ 40,00",
        description: "Pizza com molho de tomate e queijo derretido.",
        image: "https://img.freepik.com/psd-gratuitas/batatas-fritas-com-molho-numa-cesta-redonda-sobre-um-fundo-transparente_84443-1392.jpg?w=740&t=st=1726193708~exp=1726194308~hmac=ad9b0b296d606070fc8c11db36d40380add871d4cac9e33761912f090910be15"
    },
    {
        name: "Guaraná Antarctica",
        price: "R$ 6,00",
        description: "O refrigerante brasileiro mais amado, feito com o autêntico sabor do guaraná, perfeito para acompanhar qualquer refeição e refrescar o seu dia.",
        image: "https://www.designi.com.br/images/preview/10000394.jpg"
    },
    {
        name: "Batata Frita Crocante",
        price: "R$ 10,00",
        description: "Porção generosa de batatas fritas crocantes por fora e macias por dentro, temperadas com sal na medida certa, ideal para compartilhar ou saborear sozinho.",
        image: "https://img.freepik.com/fotos-gratis/batatas-fritas-em-uma-cesta-sobre-fundo-transparente_144627-37999.jpg?w=740&t=st=1694558949~exp=1694559549~hmac=cc27f45c96fbe21b2757c3966ae3c11400c35170e1d6d4b2adf9d31691b34e97"
    },
    {
        name: "Refrigerante Lata",
        price: "R$ 7,00",
        description: "Escolha o seu refrigerante favorito em lata, perfeito para acompanhar sua refeição.",
        image: "https://img.freepik.com/psd-gratuitas/lata-de-refrigerante-de-330-ml-sobre-fundo-branco_358694-555.jpg"
    },
    {
        name: "Suco Natural",
        price: "R$ 8,00",
        description: "Suco natural de frutas frescas, sem adição de açúcar, ideal para uma refeição saudável e refrescante.",
        image: "https://img.freepik.com/fotos-gratis/copo-de-suco-de-melancia-com-gelo-e-fatia-de-melancia_144627-38308.jpg?w=740&t=st=1694559047~exp=1694559647~hmac=84c191511f3a5ca91f4b678e17be91c51d95d1c6d045690f2af2846b174be781"
    },
    {
        name: "Hambúrguer Clássico",
        price: "R$ 25,00",
        description: "Um suculento hambúrguer artesanal, grelhado na perfeição, com queijo cheddar derretido, alface crocante, tomate fresco e molho especial da casa, tudo isso no pão brioche macio.",
        image: "https://st2.depositphotos.com/5260901/8297/i/450/depositphotos_82974686-stock-photo-perfect-hamburger-classic-burger-american.jpg"
    },
    {
        name: "Pizza",
        price: "R$ 40,00",
        description: "Pizza com molho de tomate e queijo derretido.",
        image: "https://img.freepik.com/psd-gratuitas/batatas-fritas-com-molho-numa-cesta-redonda-sobre-um-fundo-transparente_84443-1392.jpg?w=740&t=st=1726193708~exp=1726194308~hmac=ad9b0b296d606070fc8c11db36d40380add871d4cac9e33761912f090910be15"
    },
    {
        name: "Guaraná Antarctica",
        price: "R$ 6,00",
        description: "O refrigerante brasileiro mais amado, feito com o autêntico sabor do guaraná, perfeito para acompanhar qualquer refeição e refrescar o seu dia.",
        image: "https://www.designi.com.br/images/preview/10000394.jpg"
    },
    {
        name: "Batata Frita Crocante",
        price: "R$ 10,00",
        description: "Porção generosa de batatas fritas crocantes por fora e macias por dentro, temperadas com sal na medida certa, ideal para compartilhar ou saborear sozinho.",
        image: "https://img.freepik.com/fotos-gratis/batatas-fritas-em-uma-cesta-sobre-fundo-transparente_144627-37999.jpg?w=740&t=st=1694558949~exp=1694559549~hmac=cc27f45c96fbe21b2757c3966ae3c11400c35170e1d6d4b2adf9d31691b34e97"
    },
    {
        name: "Refrigerante Lata",
        price: "R$ 7,00",
        description: "Escolha o seu refrigerante favorito em lata, perfeito para acompanhar sua refeição.",
        image: "https://img.freepik.com/psd-gratuitas/lata-de-refrigerante-de-330-ml-sobre-fundo-branco_358694-555.jpg"
    },
    {
        name: "Suco Natural",
        price: "R$ 8,00",
        description: "Suco natural de frutas frescas, sem adição de açúcar, ideal para uma refeição saudável e refrescante.",
        image: "https://img.freepik.com/fotos-gratis/copo-de-suco-de-melancia-com-gelo-e-fatia-de-melancia_144627-38308.jpg?w=740&t=st=1694559047~exp=1694559647~hmac=84c191511f3a5ca91f4b678e17be91c51d95d1c6d045690f2af2846b174be781"
    }
];

// Componente da seção de pedidos
function OrderSection({ onAddToCart }) {
    return (
        <div id="order" className={tw`mt-8`}>
            <h2 className={tw`text-3xl font-bold text-center mb-8 text-white`}>Faça seu Pedido</h2>
            {/* Grid de 2 colunas com 3 itens de cada lado */}
            <div className={tw`grid grid-cols-2 gap-8 px-8`}>
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className={tw`flex items-center border p-6 rounded-lg shadow-lg bg-white transition-all hover:shadow-2xl hover:scale-105`}>
                        {/* Imagem à esquerda */}
                        <img src={item.image} alt={item.name} className={tw`w-32 h-32 object-cover rounded-full mr-6`} />

                        {/* Texto à direita */}
                        <div className={tw`flex flex-col flex-grow`}>
                            <h3 className={tw`text-xl font-semibold mb-2 text-gray-900`}>{item.name}</h3>
                            <p className={tw`text-gray-600 mb-4 break-words text-sm`}>{item.description}</p>
                            <span className={tw`text-lg font-bold text-blue-500 mb-4`}>{item.price}</span>
                            <button 
                                onClick={() => onAddToCart(item)} 
                                className={tw`w-full py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300`}>
                                Adicionar ao Carrinho
                            </button>
                        </div>
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
                className={tw`fixed bottom-4 right-4 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300`}>
                Ver Carrinho
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