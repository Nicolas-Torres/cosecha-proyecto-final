import CartWidget from "../../pages/cart/CartWidget.js";


const NavBar = ({inHeader, className}) => {
    return (
        <nav className={className}>
            <a href="#">{inHeader ? "Nuestro Blog" : "Instagram"}</a>
            <a href="#">{inHeader ? "Suscripción" : "Facebook"}</a>
            <a href="#">{inHeader ? "Accesorios y equipos" : "Tiktok"}</a>
            {inHeader ? <CartWidget /> : <></>}
        </nav>
    );

};

export default NavBar;
