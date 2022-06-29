
import Header from "../header/Header"
import Main from "../main/Main"
import Footer from "../footer/Footer"
import { BrowserRouter } from "react-router-dom"
import SelfProvider from "../../pages/cart/CartContext"

const App = () => {
    
    //! Todo lo que esta dentro de BrowserRouter son parámetros
    //! Todo lo que esta dentro de SelfProvider son parámetros

    return (
        <BrowserRouter>

            <SelfProvider>
                <Header/>
                <Main/>
            </SelfProvider>
            
            <Footer/>
        </BrowserRouter>
    )
};

export default App;

