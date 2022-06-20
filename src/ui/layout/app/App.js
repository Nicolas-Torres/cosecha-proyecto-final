import NavBar from "../navbar/NavBar"
import ItemListContainer from "../../pages/cart/ItemListContainer";
import Footer from "../footer/Footer"


import icon from "../../../assets/img/icon/LOGO.webp"
import ItemDetailContainer from "../../pages/cart/ItemDetailContainer";


const App = () => {
    
    return (
    // fragmento: es una etiqueta que no tiene nombre
    <>
        <header id="header">
            <div className="container">
                <div className="logo">
                    <div className="icon">
                        <img src={icon} width="120"/>
                    </div>
                </div>
                <NavBar inHeader={true} className="navbar-header"/>
            </div>
        </header>
        <main id="main">
            <ItemListContainer greeting="Bienvenido a Cosecha Coffee!"/>
            <ItemDetailContainer/>
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