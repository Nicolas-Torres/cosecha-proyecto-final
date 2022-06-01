import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer";


// import Header from "./Header"
// import Main from "./Main"
// import Footer from "./Footer"



const App = () => {
    // fragmento: es una etiqueta que no tiene nombre
    return (
    <>
        <NavBar/>
        <ItemListContainer/>
    </>
    )
};

//! EXPORTAR
//? export defautl variable
// --> import App
//? export variable
// --> import {App}

export default App;