import ItemListContainer from "../../pages/cart/ItemListContainer";
import ItemDetailContainer from "../../pages/cart/ItemDetailContainer";
import Cart from "../../pages/cart/Cart";
import { Routes, Route } from "react-router-dom"


const Main = () => {
  return (
    <main id="main">
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Nuestro catálogo"/>}></Route>
            <Route path="/category/:category" element={<ItemListContainer greeting="Filtrado"/>}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>

        </Routes>
    </main>
  )
}

export default Main