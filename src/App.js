import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setup, tw } from 'twind';


// Configuração do Twind (caso queira personalizar)
setup({
  theme: {
    extend: {
      colors: {
        primary: '#282c34',
        linkColor: '#61dafb',
      },
    },
  },
});

function App() {
  return (
    <div className={tw`text-center min-h-screen bg-primary flex flex-col justify-center items-center`}>
      <ToastContainer autoClose={3000} />
      <RoutesApp />
      
      <div className={tw`flex justify-center items-center min-h-screen bg-cover bg-center`}>
        {/* Outros componentes ou conteúdo aqui */}
        
      </div>
    </div>
  );
}

export default App;
