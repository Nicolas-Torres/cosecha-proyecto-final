
import { useEffect, useState } from "react"
import ItemList from "./itemList/ItemList"

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])

  useEffect(() => {
    console.log("pidiendo productos...")
    setTimeout(()=>{
      // console.log(fetch("../../../API/context/items.json"))
      fetch("./items.json")
      .then( response => response.json() )
      .then( (data) => setItems(data) )

      console.log("Ok, productos cargados")

    },3000)

  },[])
  console.log(items)

  const onAdd = (a) => {
    console.log(a)
  }

  return (
    <>
      <p>{greeting}</p>
      <div className="item-list">
        <ItemList items={items}/>
      </div>
      {/* {items.length > 0 ? <ItemCount stock={5} initial={1} onAdd={onAdd}/> : <p>Cargando...</p>} */}
      {items.length > 0 ? <></> : <p>Cargando...</p>}

    </>
  )
}

export default ItemListContainer
