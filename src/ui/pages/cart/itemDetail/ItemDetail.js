import ItemCount from "../itemCount/ItemCount"
import { useState, useEffect, useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../CartContext"

const ItemDetail = ({item}) => {

    const [ purchaseCounter, setPurchaseCounter] = useState(0)

    const lastCart = useContext(context)
    console.log(lastCart)


    const isInCart = () => {
        let findItem
        let itemFind = lastCart.items.find(ite => ite.id === item.id)
        console.log(itemFind)
        if (itemFind === undefined){
            findItem = false
            return {findItem}
        }else{
            findItem = true
            return { findItem, itemFind }
        }
        
    }
    console.log(isInCart())

    //! STATE UPLIFTING
    const addToCart = (itemCounter, totalCounter) => {
        

        const { findItem, itemFind } = isInCart()
        const lastTotal = lastCart.total
        console.log(lastTotal)
        if (findItem) {
            itemFind.quantity += itemCounter
            itemFind.subTotal += itemCounter*itemFind.unitPrice
            lastCart.setTotal(lastTotal + itemCounter*itemFind.unitPrice) 
        } else {
            let itemInfo = {
                id: item.id,
                title: item.title,
                unitPrice: item.price,
                quantity: itemCounter,
                subTotal: Number((item.price*itemCounter).toFixed(2))
            } 
            lastCart.items.push(itemInfo)
            lastCart.setTotal(lastTotal + itemInfo.subTotal)
        }
        
        // console.log(lastCart.items[index].subTotal)

        lastCart.setCart(totalCounter)
        // lastCart.setTotal(lastTotal + lastCart.items[index].subTotal)

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
            <ItemCount stock={item.stock} initial={1} onAdd={addToCart}/>
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


