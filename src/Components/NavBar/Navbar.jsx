import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import Menu from "./Menu";


const NavBar = () => {
    return (
        <div>
            <div className="desk">
            <nav className="navbar">
            <Link to="/"><img src="../img/logo.jpg" className="img-logo" alt="logo" /></Link>
            {<Menu />}
            <CartWidget />
            </nav>
            </div>
            <div className="mobile">
           
            </div>
        </div>
    )
};

export default NavBar;