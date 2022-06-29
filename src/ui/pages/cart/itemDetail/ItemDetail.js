import ItemCount from "../itemCount/ItemCount"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../CartContext"

const ItemDetail = ({item}) => {


  
  const [ purchaseCounter, setPurchaseCounter] = useState(0)

  const lastCart = useContext(context)

  // let it = lastCart.items.find(ite => ite.id === item.id)
  // console.log(it)

  const isInCart = () => {
    let findItem;
    let quantity
    if(lastCart.items.length === 0 ){
      findItem = false
      quantity = 0
      return [findItem, quantity]
    } else {
      let it = lastCart.items.find(ite => ite.id === item.id)
      console.log(it)
      if (it === undefined){
        findItem = false
        quantity = 0 
       
      }else {
        findItem = true
        quantity = it.quantity
        console.log(quantity)
      }
      return [findItem, quantity]
    }
  }
  console.log(isInCart())
  //! STATE UPLIFTING
  const onAdd = (itemCounter, lastCartCounter) => {
    let lastQuantity
    if(isInCart()[0]){
      lastQuantity = isInCart()[1] + itemCounter
    } 
    let itemInfo = {
      id: item.id,
      title: item.title,
      unitPrice: item.price,
      quantity: lastQuantity,
      subTotal: item.price*itemCounter
    }
    
    lastCart.items.push(itemInfo)
    lastCart.setCart(lastCartCounter)

    setPurchaseCounter(itemCounter)

  }

  useEffect(() => {
    if(purchaseCounter === 0){

    }else{
      console.log("agregado al carrito")
    }
  },[purchaseCounter])
  
  // console.log(purchaseCounter)

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