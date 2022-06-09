import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer"


import icon from  "../src/assets/icon.png"
// import Header from "./Header"
// import Main from "./Main"
// import Footer from "./Footer"



const App = () => {
    // fragmento: es una etiqueta que no tiene nombre
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
                <NavBar inHeader={true}/>
            </div>
        </header>
        <ItemListContainer/>
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