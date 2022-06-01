import CartWidget from "./CartWidget";
import icon from  "../assets/icon.png"

const NavBar = () => {
  return (
    <>
    <header id="header">
        <div className="container">
            <div className="logo">
                <div className="icon">
                    <img src={icon} width="32"/>
                </div>
                <h2 className="titulo">IoT</h2>
            </div>
            <nav>
                <a href="#">Módulos IoT</a>
                <a href="#">Electrónica</a>
                <a href="#">Sensores</a>
                <CartWidget />
            </nav>
        </div>
    </header>
    </>
  );
};

export default NavBar;
