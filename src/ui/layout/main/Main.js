import ItemListContainer from "../../pages/cart/ItemListContainer";
import ItemDetailContainer from "../../pages/cart/ItemDetailContainer";
import { Routes, Route } from "react-router-dom"





const Main = () => {
  return (
      <main id="main">
        {/* <ItemListContainer greeting="Bienvenido a Cosecha Coffee!"/> */}
        {/* <ItemDetailContainer/> */}
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/categoria/:category" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>

        </Routes>
    </main>
  )
}

export default Main