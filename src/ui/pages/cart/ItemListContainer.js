
import { useEffect, useState } from "react"
import ItemList from "./itemList/ItemList"

import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    console.log("pidiendo productos...")

    setTimeout(()=>{
      
      //! FETCH
      // console.log(fetch(`./items.json`))
      fetch(`./items.json`)
      // response.json()/arrayBuffer()/text()/blob()
      .then( response => response.json() )
      .then( (data) => {
        setItems(data)
        console.log("Ok, productos cargados.")
      } )
      
    },2000)

  },[])

  console.table(items)

  const onAdd = (a) => {

    console.log(a)

  }

  return (
    <div className="container">
      <p>{greeting}</p>
      <span>ItemList</span>
      <div className="item-list">
        {/* {items.length > 0 ? <ItemCount stock={5} initial={1} onAdd={onAdd}/> : <p>Cargando...</p>} */}
        {items.length > 0 ? <ItemList items={items}/> : <p>Cargando...</p>}
      </div>
    </div>
  )
}

export default ItemListContainer
