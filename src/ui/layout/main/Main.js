import ItemListContainer from "../../pages/cart/ItemListContainer";
import ItemDetailContainer from "../../pages/cart/ItemDetailContainer";
import { Routes, Route } from "react-router-dom"


const Main = () => {
  return (
    <main id="main">
        <Routes>
            <Route path="/" element={<ItemListContainer greeting="Nuestro catálogo"/>}></Route>
            <Route path="/category/:category" element={<ItemListContainer greeting="Filtrado"/>}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>
    </main>
  )
}

export default Main