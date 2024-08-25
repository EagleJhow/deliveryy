import './header.css';
import { Link } from 'react-router-dom';


function Header() {
    return(
        <header>
            <Link className='logo' to="/">Delivery</Link>
            <Link className='login' to="/login">Login</Link>
        
        </header>
    )
}

export default Header;