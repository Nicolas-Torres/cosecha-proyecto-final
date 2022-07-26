import { Routes, Route } from "react-router-dom"
import ItemListContainer from "../../pages/cart/ItemListContainer";
import ItemDetailContainer from "../../pages/cart/ItemDetailContainer";
import Cart from "../../pages/cart/Cart";
import Order from "../../pages/cart/Order";

const Main = () => {
    return (
        <main id="main">
            <Routes>
                <Route path="/" element={<ItemListContainer greeting="Nuestro catálogo"/>}></Route>
                <Route path="/category/:category" element={<ItemListContainer greeting="Filtro: " />}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/order/:my-purchase" element={<Order/>}></Route>
            </Routes>
        </main>
    )
}

export default Main