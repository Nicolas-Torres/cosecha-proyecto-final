import { Link } from "react-router-dom"
import CartWidget from "../../pages/cart/CartWidget.js";
import "./navBar.css"
const NavBar = ({inHeader, className}) => {

    return (
        <nav className={className}>
            {inHeader ?
                <>
                <Link to="/category/Categoría 1">Filtro 1</Link>
                <Link to="/category/Categoría 2">Filtro 2</Link>
                <Link to="/category/Categoría 3">Filtro 3</Link>
                <Link to="/order/my-purchase">Mis compras</Link>
                <CartWidget />
                </>
            : 
                <>
                <a href="https://www.facebook.com/cosechacoffeeperu" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/cosecha.peru" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.cosechacoffee.pe/" target="_blank" rel="noopener noreferrer">Cosecha-Coffee</a>
                </>
            }
        </nav>
    );
};

export default NavBar;
