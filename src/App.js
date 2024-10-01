import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setup, tw } from 'twind';
import Footer from "./Footer/Footer";

// Configuração do Twind (caso queira personalizar)
setup({
  theme: {
    extend: {
      colors: {
        primary: '#fff',
        linkColor: '#007BFF',
      },
    },
  },
});

function App() {
  return (                      
    <div className={tw`flex flex-col min-h-screen bg-primary`}>
      <ToastContainer autoClose={3000} />
      <div className={tw`flex-grow flex flex-col justify-center`}>
        {/* Centraliza o texto */}
        <div className={tw`text-center`}>
          <RoutesApp />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
