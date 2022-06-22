import CartWidget from "../../pages/cart/CartWidget.js";
import { Link } from "react-router-dom"

const NavBar = ({inHeader, className}) => {
    return (
        <nav className={className}>
            <Link to="/categoria/cat1">{inHeader ? "Nuestro Blog" : "Instagram"}</Link>
            <Link to="/categoria/cat2">{inHeader ? "Suscripción" : "Facebook"}</Link>
            <Link to="/categoria/cat3">{inHeader ? "Accesorios y equipos" : "Tiktok"}</Link>
            {inHeader ? <CartWidget /> : <></>}
        </nav>
    );

};

export default NavBar;
