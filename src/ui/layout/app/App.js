import NavBar from "../navbar/NavBar"
import ItemListContainer from "../../pages/cart/ItemListContainer";
import Footer from "../footer/Footer"


import icon from "../../../assets/img/icon/LOGO.webp"


const App = () => {
    
    return (
    // fragmento: es una etiqueta que no tiene nombre
    <>
        <header id="header">
            <div className="container">
                <div className="logo">
                    <div className="icon">
                        <img src={icon} width="32"/>
                    </div>
                    <h2 className="titulo">Cosecha Coffee</h2>
                </div>
                <NavBar inHeader={true} className="navbar-header"/>
            </div>
        </header>
        <main id="main">
            <ItemListContainer greeting="Bienvenido a Cosecha Coffee!"/>
        </main>
        <Footer/>
    </>
    )
};

//! EXPORTAR
//? export defautl variable
// --> import App
//? export variable
// --> import {App}

export default App;