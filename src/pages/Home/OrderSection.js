import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { tw } from 'twind';

// Dados das categorias
const categories = [
{
    category: 'Lanches',
    items: [
      { name: 'Hambúrguer Clássico', 
        description: 'Delicioso hamburguer artesanal', 
        price: 'R$ 25,00', 
        image: 'https://st2.depositphotos.com/5260901/8297/i/450/depositphotos_82974686-stock-photo-perfect-hamburger-classic-burger-american.jpg' },
      { name: 'Cheeseburger', 
        description: 'Hamburguer com queijo', 
        price: 'R$ 18,00', 
        image: 'https://conteudo.imguol.com.br/c/entretenimento/44/2023/05/03/cheeseburger-1683134270752_v2_900x506.jpg' },
      { 
        name: 'X-Bacon Especial', 
        description: 'Hambúrguer bovino, bacon crocante, queijo cheddar e molho barbecue.', 
        price: 'R$ 28,90', 
        image: 'https://cdn.pixabay.com/photo/2022/11/09/13/58/cheeseburger-7580676_1280.jpg' 
      },
      
      { 
        name: 'Chicken Burger', 
        description: 'Pão, filé de frango empanado, alface americana e maionese caseira.', 
        price: 'R$ 23,50', 
        image: 'https://www.recipetineats.com/tachyon/2017/07/Chicken-Burgers-6.jpg?resize=965%2C1350&zoom=1' 
      },
      
      { 
        name: 'Bauru Tradicional', 
        description: 'Pão francês, presunto, queijo muçarela, tomate e orégano.', 
        price: 'R$ 18,00', 
        image: 'https://www.estadao.com.br/resizer/v2/CDF742DH45MYPHUYLV5AHPR6YQ.jpg?quality=80&auth=0de5ba36efd858792676b6d629151489bfe2d14f586ca53e08e5221cb1ee1eff&width=720&height=503&smart=true' 
      },
      
      { 
        name: 'Cachorro Quente', 
        description: 'Pão, salsicha e condimentos à sua escolha.', 
        price: 'R$ 15,00',  // Caso tenha um preço diferente, pode ajustar aqui
        image: 'https://img.nsctotal.com.br/wp-content/uploads/2022/06/cachorro-quente-simples-nsc.jpg' 
      },
      
    ],
},
{
    category: 'Pizzas',
    items: [
        { name: 'Pizza de Lombo', 
          description: 'Pizza sabor lombo', 
          price: 'R$ 55,00', 
          image: 'https://img.freepik.com/fotos-gratis/pizza-havaiana_1203-2455.jpg?w=1380&t=st=1726342066~exp=1726342666~hmac=7b0bfdd2294c55e9d75bd76c7d57fc0f1f272e6da4ca44797704ba2623c2634c' 
        },
        { name: 'Pizza Marguerita', 
          description: 'Pizza sabor marguerita', 
          price: 'R$ 44,00', 
          image: 'https://pizzariadesucesso.com/wp-content/uploads/2018/11/images-4-2.jpeg' 

        },
        { name: 'Pizza Calabresa', 
          description: 'Muçarela, linguiça calabresa, cebola e azeitonas pretas.', 
          price: 'R$ 45,00', 
          image: 'https://www.sabornamesa.com.br/media/k2/items/cache/513d7a0ab11e38f7bd117d760146fed3_XL.jpg' 

        },
        { name: 'Pizza 4 Queijos', 
          description: 'Muçarela, gorgonzola, parmesão e catupiry.', 
          price: 'R$ 49,00', 
          image: 'https://pubimg.band.uol.com.br/files/e7c7412c3cd54a639e21.png' 

        },
        { name: 'Pizza Portuguesa', 
          description: 'Presunto, ovos, cebola, azeitonas e muçarela.', 
          price: 'R$ 46,00', 
          image: 'https://texasdebrazil.com/wp-content/uploads/2022/06/pizza-portuguesa-600x400.png' 

        },
        { name: 'Pizza Frango com Catupiry', 
          description: 'Frango desfiado, muçarela e catupiry.', 
          price: 'R$ 47,00', 
          image: 'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/86f7100c92218a97fac8e3bbd18ed787.webp?itok=OmkFULcb' 

        },
    ],
},
{
  category: 'Acompanhamentos',
  items: [
    { 
      name: 'Batata Frita Crocante', 
      description: 'Porção de batata frita', 
      price: 'R$ 12,00', 
      image: 'https://media.istockphoto.com/id/623524458/pt/foto/basket-of-famous-fast-food-french-fries.jpg?s=2048x2048&w=is&k=20&c=GpcNaxDvhIR_4UsjxcwB89GZ3jAx8Jn5HDdNIF-eyGo=' 
    },
    { 
      name: 'Anéis de Cebola', 
      description: 'Anéis de cebola empanados e fritos.', 
      price: 'R$ 14,90', 
      image: 'https://img.freepik.com/fotos-gratis/comida-e-bebida-deliciosa-de-alto-angulo_23-2149235974.jpg?w=360&t=st=1726589033~exp=1726589633~hmac=b6207c56878b386f9d73f31eb05ecbe734367aaee63ebc7643a885a6998dc906' 
    },
    { 
      name: 'Nuggets de Frango', 
      description: 'Pequeninos pedaços de frango empanados.', 
      price: 'R$ 16,00', 
      image: 'https://pt.petitchef.com/imgupl/recipe/nuggets-de-frango-facil-e-saboroso--md-456438p710106.jpg' 
    },
    { 
      name: 'Polenta Frita', 
      description: 'Bastões de polenta frita, crocante por fora e macia por dentro.', 
      price: 'R$ 11,90', 
      image: 'https://static.wixstatic.com/media/8dde75_433cf898f5c74eefb09ac4dd2b0be5bf~mv2.jpg/v1/fill/w_528,h_382,al_c,lg_1,q_80,enc_auto/8dde75_433cf898f5c74eefb09ac4dd2b0be5bf~mv2.jpg' 
    },
    { 
      name: 'Batata Rústica', 
      description: 'Batata temperada com ervas e azeite.', 
      price: 'R$ 15,00', 
      image: 'https://www.sabornamesa.com.br/media/k2/items/cache/ef76ec555f88001101e0e225c3aa91e9_XL.jpg' 
    },
  ],
},
{
  category: 'Bebidas',
  items: [
    { 
      name: 'Coca-Cola (Lata 350ml)', 
      description: 'Refrescante e saborosa, perfeita para matar a sede a qualquer hora.', 
      price: 'R$ 5,00', 
      image: 'https://zonasul.vtexassets.com/arquivos/ids/3715609-800-auto?v=638612747365230000&width=800&height=auto&aspect=true' 
    },
    { 
      name: 'Coca-Cola (2L)', 
      description: 'A bebida favorita em um tamanho maior, perfeita para famílias e encontros.', 
      price: 'R$ 10,00', 
      image: 'https://zonasul.vtexassets.com/arquivos/ids/3099395-600-auto?v=638264024607370000&width=600&height=auto&aspect=true' 
    },
    { 
      name: 'Guaraná Antarctica 350ml', 
      description: 'O refrescante e autêntico sabor do Guaraná.', 
      price: 'R$ 6,00', 
      image: 'https://zonasul.vtexassets.com/arquivos/ids/3202073-800-auto?v=638333671899400000&width=800&height=auto&aspect=true' 
    },
    { 
      name: 'Fanta Laranja 350ml', 
      description: 'O refrescante e vibrante sabor intenso e doce da laranja.', 
      price: 'R$ 6,00', 
      image: 'https://zonasul.vtexassets.com/arquivos/ids/3521813-800-auto?v=638539305084300000&width=800&height=auto&aspect=true' 
    },
    { 
      name: 'Heineken 330ml', 
      description: 'Cerveja premium puro malte, de sabor equilibrado e refrescante.', 
      price: 'R$ 8,00', 
      image: 'https://zonasul.vtexassets.com/arquivos/ids/3052450-800-auto?v=637793434788200000&width=800&height=auto&aspect=true' 
    },
    { 
      name: 'Água com gás 500ml', 
      description: 'Refrescante e levemente efervescente, perfeita para acompanhar suas refeições.', 
      price: 'R$ 4,00', 
      image: 'https://zonasul.vtexassets.com/arquivos/ids/3704462-800-auto?v=638609291351870000&width=800&height=auto&aspect=true' 
    },
    { 
      name: 'Água Mineral 500ml', 
      description: 'Pura e refrescante, ideal para hidratar em qualquer momento.', 
      price: 'R$ 3,00', 
      image: 'https://zonasul.vtexassets.com/arquivos/ids/3076273-800-auto?v=637877820993200000&width=800&height=auto&aspect=true' 
    },
    { 
      name: 'Suco Natural', 
      description: 'Suco natural de laranja.', 
      price: 'R$ 9,00', 
      image: 'https://img.freepik.com/fotos-gratis/copo-de-suco-de-frutas-frescas_144627-17243.jpg?t=st=1726615167~exp=1726618767~hmac=783a1dc281ba213ff07132ec9da0892b8f72939bc3393c4ace5d6a8770333368&w=1060' 
    },
    { 
      name: 'Chá Gelado', 
      description: 'Chá gelado de limão ou pêssego.', 
      price: 'R$ 8,50', 
      image: 'https://s2-casaejardim.glbimg.com/n0NrsoIohjnmWYiI-Yj1jyNAZ6A=/0x0:1500x2249/1000x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_a0b7e59562ef42049f4e191fe476fe7d/internal_photos/bs/2023/w/2/q3tj4iQWCBkzfg6mmWIw/receita-cha-gelado-anis-gengibre-cravo.jpeg' 
    },
  ],
},
{
  category: 'Sobremesas',
  items: [
     { 
      name: 'Milkshake', 
      description: 'Escolha entre chocolate, morango ou baunilha.', 
       price: 'R$ 14,00', 
       image: 'https://img.imageboss.me/kitchenaid/cdn/format:webp/wp-content/uploads/2021/04/KAD_Blog_MilkShake_940x1080.png' 
     },
     { 
      name: 'Brownie de Chocolate', 
      description: 'Brownie macio servido com calda de chocolate.', 
      price: 'R$ 18,00', 
      image: 'https://www.estadao.com.br/resizer/v2/RFCDNG3RXBC5NNG35LITHDRSEM.jpg?quality=80&auth=a4c678e2f2670e6ad06c3ef36ae04f071dadad176a85a7db3663de88538d5c34&width=720&height=503&focal=0,0' 
    },
    { 
      name: 'Torta de Limão', 
      description: 'Base crocante, creme de limão e merengue.', 
      price: 'R$ 16,00', 
      image: 'https://conteudo.imguol.com.br/c/entretenimento/6d/2021/05/28/torta-de-limao-1622230395382_v2_1400x540.jpg' 
    },
    { 
      name: 'Pudim de Leite', 
      description: 'Pudim de leite condensado tradicional.', 
      price: 'R$ 14,00', 
      image: 'https://www.receiteria.com.br/wp-content/uploads/pudim-de-leite-1.jpg' 
    },
    { 
      name: 'Petit Gâteau', 
      description: 'Bolinho de chocolate servido com sorvete de creme.', 
      price: 'R$ 20,00', 
      image: 'https://claudia.abril.com.br/wp-content/uploads/2016/10/receita-bolinho-cremoso-chocolate.jpg?quality=70&strip=info&w=620&w=636' 
    },
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
