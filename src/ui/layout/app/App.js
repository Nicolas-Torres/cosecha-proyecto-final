import NavBar from "../navbar/NavBar"
import Main from "../main/Main"
import Footer from "../footer/Footer"
import { BrowserRouter } from "react-router-dom"
import { Link } from "react-router-dom"



import icon from "../../../assets/img/icon/LOGO.webp"



const App = () => {
    
    return (
    // fragmento (<></>) : es una etiqueta que no tiene nombre y no se renderiza en el DOM
        <BrowserRouter>
            <header id="header">
                <div className="container">
                    <div className="logo">
                        <div className="icon">
                            <Link to="/">
                                <img src={icon} width="120"/>
                            </Link>
                        </div>
                    </div>
                    <NavBar inHeader={true} className="navbar-header"/>
                </div>
            </header>
            <Main/>
            <Footer/>
        </BrowserRouter>
    )
};

//! EXPORTAR
//? export defautl variable
// --> import App
//? export variable
// --> import {App}

export default App;