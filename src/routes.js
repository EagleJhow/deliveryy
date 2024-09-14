import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import Login from './pages/Login';
import Support from './pages/Suporte/suporte';


function RoutesApp(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>


            
            <Route path='/' element={ <Home/>}/>
            <Route path='/login' element={ <Login/>}/>
            <Route path='/suporte' element={ <Support/> }/>



        </Routes>
        
        
        
        </BrowserRouter>
    )
}

export default RoutesApp;