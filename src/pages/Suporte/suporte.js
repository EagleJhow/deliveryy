import { useState } from 'react';
import { tw } from 'twind';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Rating from './rating'; // Certifique-se de que o caminho está correto

function SupportPage() {
    const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0); // Estado para a avaliação em estrelas

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setContactForm({ ...contactForm, [name]: value });
    };

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    };

    const handleRatingChange = (newValue) => {
        setRating(newValue);
    };

    const handleSubmitContact = (e) => {
        e.preventDefault();
        // Lógica para enviar o formulário de contato (ex: API)
        toast.success('Mensagem enviada com sucesso!');
        setContactForm({ name: '', email: '', message: '' });
    };

    const handleSubmitReview = (e) => {
        e.preventDefault();
        // Lógica para enviar a avaliação (ex: API)
        toast.success('Obrigado pelo seu feedback!');
        setReview('');
        setRating(0); // Reseta a avaliação para o valor inicial
    };

    return (
        <div className={tw`p-4 max-w-xl mx-auto`}>
            <h1 className={tw`text-2xl font-bold mb-4`}>Suporte</h1>

            {/* Seção de Perguntas Frequentes (FAQ) */}
            <section className={tw`mb-6`}>
                <h2 className={tw`text-xl font-semibold mb-3`}>FAQ</h2>
                <div className={tw`space-y-2`}>
                    <div className={tw`bg-gray-100 p-3 rounded-md shadow-sm`}>
                        <h3 className={tw`text-md font-semibold`}>Como resetar minha senha?</h3>
                        <p className={tw`text-gray-700 text-sm`}>Clique em "Esqueci minha senha" na página de login e siga as instruções.</p>
                    </div>
                </div>
            </section>

            {/* Seção de Formulário de Contato */}
            <section className={tw`mb-6`}>
                <h2 className={tw`text-xl font-semibold mb-3`}>Entre em Contato</h2>
                <form onSubmit={handleSubmitContact} className={tw`space-y-4`}>
                    <input 
                        type="text" 
                        name="name" 
                        value={contactForm.name} 
                        onChange={handleContactChange} 
                        placeholder="Nome" 
                        className={tw`w-full p-2 border border-gray-300 rounded-md text-sm`} 
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        value={contactForm.email} 
                        onChange={handleContactChange} 
                        placeholder="E-mail" 
                        className={tw`w-full p-2 border border-gray-300 rounded-md text-sm`} 
                        required 
                    />
                    <textarea 
                        name="message" 
                        value={contactForm.message} 
                        onChange={handleContactChange} 
                        placeholder="Mensagem" 
                        className={tw`w-full p-2 border border-gray-300 rounded-md text-sm`} 
                        rows="4" 
                        required 
                    />
                    <button 
                        type="submit" 
                        className={tw`w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 text-sm`}
                    >
                        Enviar
                    </button>
                </form>
            </section>

            {/* Seção de Avaliações */}
            <section>
                <h2 className={tw`text-xl font-semibold mb-3`}>Deixe sua Avaliação</h2>
                <Rating value={rating} onChange={handleRatingChange} />
                <form onSubmit={handleSubmitReview} className={tw`space-y-4 mt-4`}>
                    <textarea 
                        value={review} 
                        onChange={handleReviewChange} 
                        placeholder="Avaliação" 
                        className={tw`w-full p-2 border border-gray-300 rounded-md text-sm`} 
                        rows="4" 
                        required 
                    />
                    <button 
                        type="submit" 
                        className={tw`w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 text-sm`}
                    >
                        Enviar Avaliação
                    </button>
                </form>
            </section>

            <ToastContainer />
        </div>
    );
}

export default SupportPage;
