import ItemCount from "../itemCount/ItemCount"
import { useState ,useEffect } from "react"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {

  const [ purchaseCounter, setpurchaseCounter] = useState(0)

  //! STATE UPLIFTING
  const onAdd = (counter) => {
    setpurchaseCounter(counter)
  }

  useEffect(() => {
    console.log("agregado al carrito")
  },[purchaseCounter])
  
  console.log(purchaseCounter)

  return (
    <div className="item-detail-card">
      <article className="item">
        <h1 className="title">{item.title}</h1>
        <img src={item.picUrl} alt={item.title} width="300" height="auto"/>
        <h3 className="item-detail-description">{item.description}</h3>
        <h2 id="price">{"S/" + item.price}</h2>
      </article>
      <h3>{"Stock disponible: " + item.stock}</h3>
      {purchaseCounter === 0 ? (
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
      ) : (
        <>
        <h3>{ "Cantidad agregada al carrito: " + purchaseCounter }</h3>
        <Link to="/cart">
          <button>Terminar compra</button>
        </Link>
        </>
      )}
    </div>
  )
}

export default ItemDetail