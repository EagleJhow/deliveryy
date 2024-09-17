import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tw } from 'twind';

// Dados das categorias
const categories = [
{
    category: 'Lanches',
    items: [
      { name: 'Hambúrguer Clássico', description: 'Delicioso hamburguer artesanal', price: 'R$ 25,00', image: 'https://st2.depositphotos.com/5260901/8297/i/450/depositphotos_82974686-stock-photo-perfect-hamburger-classic-burger-american.jpg' },
      { name: 'Cheeseburger', description: 'Hamburguer com queijo', price: 'R$ 18,00', image: 'https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kRXV7tWV/200/200/original?country=br' },
    ],
},
{
    category: 'Pizzas',
    items: [
        { name: 'Pizza de Lombo', description: 'Pizza sabor lombo', price: 'R$ 55,00', image: 'https://img.freepik.com/fotos-gratis/pizza-havaiana_1203-2455.jpg?w=1380&t=st=1726342066~exp=1726342666~hmac=7b0bfdd2294c55e9d75bd76c7d57fc0f1f272e6da4ca44797704ba2623c2634c' },
        { name: 'Pizza Marguerita', description: 'Pizza sabor marguerita', price: 'R$ 28,00', image: 'https://pizzariadesucesso.com/wp-content/uploads/2018/11/images-4-2.jpeg' },
    ],
},
{
    category: 'Acompanhamentos',
    items: [
      { name: 'Batata Frita Crocante', description: 'Porção de batata frita', price: 'R$ 8,00', image: 'https://media.istockphoto.com/id/623524458/pt/foto/basket-of-famous-fast-food-french-fries.jpg?s=2048x2048&w=is&k=20&c=GpcNaxDvhIR_4UsjxcwB89GZ3jAx8Jn5HDdNIF-eyGo=' },
      { name: 'Anéis de Cebola', description: 'Anéis de cebola crocantes', price: 'R$ 10,00', image: 'https://img.freepik.com/fotos-gratis/comida-e-bebida-deliciosa-de-alto-angulo_23-2149235974.jpg?w=360&t=st=1726589033~exp=1726589633~hmac=b6207c56878b386f9d73f31eb05ecbe734367aaee63ebc7643a885a6998dc906' },
    ],
},
{
    category: 'Bebidas',
    items: [
      { name: 'Coca-Cola (Lata 350ml)', description: 'Refrescante e saborosa, perfeita para matar a sede a qualquer hora.', price: 'R$ 5,00', image: 'https://zonasul.vtexassets.com/arquivos/ids/3715609-800-auto?v=638612747365230000&width=800&height=auto&aspect=true' },
      { name: 'Coca-Cola (1,5L)', description: 'O sabor clássico da Coca-Cola, ideal para compartilhar em momentos de refeição.', price: 'R$ 9,00', image: 'https://zonasul.vtexassets.com/arquivos/ids/3099528-800-auto?v=638265824634900000&width=800&height=auto&aspect=true' },
      { name: 'Coca-Cola (2L)', description: 'A bebida favorita em um tamanho maior, perfeita para famílias e encontros.', price: 'R$ 10,00', image: 'https://zonasul.vtexassets.com/arquivos/ids/3099395-600-auto?v=638264024607370000&width=600&height=auto&aspect=true' },
      { name: 'Guaraná Antarctica 350ml', description: 'O refrescante e autêntico sabor do Guaraná', price: 'R$ 6,00', image: 'https://zonasul.vtexassets.com/arquivos/ids/3202073-800-auto?v=638333671899400000&width=800&height=auto&aspect=true' },
      { name: 'Fanta Laranja 350ml', description: 'O refrescante e vibrante sabor intenso e doce da laranja', price: 'R$ 6,00', image: 'https://zonasul.vtexassets.com/arquivos/ids/3521813-800-auto?v=638539305084300000&width=800&height=auto&aspect=true' },
      { name: 'Heineken 330ml', description: 'Cerveja premium puro malte, de sabor equilibrado e refrescante', price: 'R$ 8,00', image: 'https://zonasul.vtexassets.com/arquivos/ids/3052450-800-auto?v=637793434788200000&width=800&height=auto&aspect=true' },  
      { name: 'Água com gás 500ml ', description: 'Refrescante e levemente efervescente, perfeita para acompanhar suas refeições.', price: 'R$ 4,00', image: 'https://zonasul.vtexassets.com/arquivos/ids/3704462-800-auto?v=638609291351870000&width=800&height=auto&aspect=true' },  
      { name: 'Água Mineral 500ml', description: 'Pura e refrescante, ideal para hidratar em qualquer momento.', price: 'R$ 3,00', image: 'https://zonasul.vtexassets.com/arquivos/ids/3076273-800-auto?v=637877820993200000&width=800&height=auto&aspect=true' },  
      
    ],
},
];

// Componente de seção de pedidos com categorias
function OrderSection({ onAddToCart }) {
  const handleAddToCart = (item) => {
    onAddToCart(item);
    toast.success(`${item.name} adicionado ao carrinho!`);
  };

  return (
    <div id="order" className={tw`mt-8`}>
      <h2 className={tw`text-2xl font-bold text-center mb-6 text-gray`}>Faça seu Pedido</h2>

      {/* Loop para exibir categorias */}
      {categories.map((category, index) => (
        <div key={index} className={tw`mb-8`}>
          {/* Título da categoria */}
          <h3 className={tw`text-xl font-bold mb-4`}>{category.category}</h3>

          {/* Grid de itens da categoria */}
          <div className={tw`grid grid-cols-2 gap-6 px-6`}>
            {category.items.map((item, idx) => (
              <div key={idx} className={tw`relative flex items-center border p-4 rounded-lg shadow-md bg-white transition-all hover:shadow-xl hover:scale-95`}>
                {/* Imagem à esquerda */}
                <img src={item.image} alt={item.name} className={tw`w-28 h-28 object-cover rounded-full mr-4`} />

                {/* Texto à direita */}
                <div className={tw`flex flex-col flex-grow`}>
                  <h3 className={tw`text-lg font-semibold mb-1 text-[#33333]`}>{item.name}</h3>
                  <p className={tw`text-gray-600 mb-2 break-words text-xs`}>{item.description}</p>
                  <span className={tw`text-lg font-bold text-[#1F2937] mb-2`}>{item.price}</span>
                </div>

                {/* Botão de adicionar ao carrinho */}
                <button
                  onClick={() => handleAddToCart(item)}
                  className={tw`absolute bottom-4 right-4 p-2 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={tw`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.5 6h13l-1.5-6M9 21h6" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderSection;
