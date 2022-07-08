
import { useEffect, useState, useRef } from "react"
import ItemList from "./itemList/ItemList"
import { useParams} from "react-router-dom"

import spinner from "../../../assets/img/spinner.gif"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {

  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const { category } = useParams()

  const loadingText = useRef("Cargando catálogo...");

  useEffect(() => {
    if (!category){
      loadingText.current = "Cargando catálogo...";
      console.log("pidiendo productos...")
      setTimeout(()=>{
        setLoading(true)
        fetch(`./items.json`)
        .then( response => response.json())
        .then( (data) => {
          setItems(data)
          console.log("Ok, productos cargados.")
        });
        
      },0);
      setLoading(false)
    } else {
      loadingText.current = "Cargando filtro..."
      console.log("filtrando productos...")

      setTimeout(()=>{
        setLoading(true)

        fetch(`../items.json`)
        .then( response => response.json())
        .then( (data) => {
          setItems(data.filter(item => item.category === category))
          console.log("Ok, productos filtrados.")
        });

      },0);
      setLoading(false)
    }
  },[category])

  // console.log(loading)
  // console.log(items)

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <div className="item-list">
        {loading ? (
            <ItemList items={items}/>
          ) : (
            <div className="loading-catalog">
            <p>{loadingText.current}</p>
            <img src={spinner} alt = "icon" width="50"/>
          </div>
        )}
      </div>
    </div>
  )
}

export default ItemListContainer
