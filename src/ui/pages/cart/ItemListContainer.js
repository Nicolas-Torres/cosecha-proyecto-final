
import { useEffect, useState } from "react"
import ItemList from "./itemList/ItemList"
import { useParams } from "react-router-dom"

import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])

  const { category } = useParams()

  console.log(category)

  useEffect(() => {
    if(!category){
      console.log("pidiendo productos...")

      setTimeout(()=>{
        
        //! FETCH
        //! No se puede hacer fetch a la carpeta src
        // console.log(fetch(`./items.json`))
        fetch(`./items.json`)
        // response.json()/arrayBuffer()/text()/blob()
        .then( response => response.json() )
        .then( (data) => {
          setItems(data)
          console.log("Ok, productos cargados.")
        } )
        
      },1000)
    }else{
      console.log("pidiendo productos filtrados...")

      setTimeout(()=>{
        
        //! FETCH
        //! No se puede hacer fetch a la carpeta src
        // console.log(fetch(`./items.json`))
        fetch(`./items.json`)
        // response.json()/arrayBuffer()/text()/blob()
        .then( response => response.json() )
        .then( (data) => {
          let filt = data.filter(item => item.category === category)
          console.log(filt)
          setItems(filt)
          console.log("Ok, productos filtrados.")
        } )
        
      },1000)
    }

  },[category])

  console.table(items)

  const onAdd = (a) => { }

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
