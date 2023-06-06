import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul className="menu">
                <li className="menu-item"><Link to="/">Todos</Link></li>
                <li className="menu-item"><Link to="/iphones">Iphone</Link></li>
                <li className="menu-item"><Link to="/ipads">Ipad</Link></li>
                <li className="menu-item"><Link to="/macbooks">Macbook</Link></li>
                <li className="menu-item"><Link to="/accesorios">Accesorios</Link></li>
                <li className="menu-item-mobile"><Link to="/"><i class="fa-solid fa-house"></i></Link></li>
                <li className="menu-item-mobile"><Link to="/iphones"><i class="fa-sharp fa-solid fa-mobile-retro"></i></Link></li>
                <li className="menu-item-mobile"><Link to="/ipads"><i class="fa-solid fa-tablet"></i></Link></li>
                <li className="menu-item-mobile"><Link to="/macbooks"><i class="fa-solid fa-laptop"></i></Link></li>
                <li className="menu-item-mobile"><Link to="/accesorios"><i class="fa-solid fa-headphones"></i></Link></li>
            </ul>
        </div>
    )
}

export default Menu;