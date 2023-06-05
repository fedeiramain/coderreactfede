import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to="/"><img src="../img/logo.jpg" className="img-logo" alt="logo" /></Link>
            <ul className="menu">
                <li className="menu-item"><Link to="/">Todos</Link></li>
                <li className="menu-item"><Link to="/iphone">Iphone</Link></li>
                <li className="menu-item"><Link to="/ipad">Ipad</Link></li>
                <li className="menu-item"><Link to="/macbook">Macbook</Link></li>
                <li className="menu-item"><Link to="/accesorios">Accesorios</Link></li>
            </ul>
            <CartWidget />
        </nav>
    )
};

export default NavBar;