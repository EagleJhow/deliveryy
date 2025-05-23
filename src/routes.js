import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Support from './pages/Suporte/suporte';
import Register from './pages/Registro/registro';
import ProtectedRoute from './pages/protection/ProtectedRote';
import { AuthProvider } from './Header/AuthContext';



function RoutesApp(){
    return(
        <BrowserRouter> 
         <AuthProvider>


        <Header/>
             <Routes>

    
            
            <Route path='/' element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
            <Route path='/login' element={ <Login/>}/>
            <Route path='/registro' element={<Register/>}/>
            <Route path='/suporte' element={ <Support/> }/>



        </Routes>
        
        </AuthProvider>
        
        </BrowserRouter>
    )
}

export default RoutesApp;