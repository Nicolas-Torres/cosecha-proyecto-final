import ItemCount from "../itemCount/ItemCount"
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { context } from "../CartContext"

const ItemDetail = ({item}) => {

    const [ itemCounter, setItemCounter] = useState(0)

    const cart = useContext(context)
    console.log(cart)

    //! STATE UPLIFTING

    const updateCart = (itemCounter) => {
        
        cart.addItem(item, itemCounter)
        setItemCounter(itemCounter)
        console.log("agregado al carrito")

    }

    return (
        <div className="item-detail-card">
            <article className="item">
                <h1 className="title">{item.title}</h1>
                <img src={item.picUrl} alt={item.title} width="300" height="auto"/>
                <h3 className="item-detail-description">{item.description}</h3>
                <h2 id="price">{"S/" + item.price}</h2>
            </article>
            <h3>{"Stock disponible: " + item.stock}</h3>
            {itemCounter === 0 ? (
                <ItemCount stock={item.stock} initial={1} onAdd={updateCart}/>
            ) : (
                <>
                <h3>{ "Cantidad agregada al carrito: " + itemCounter }</h3>
                <Link to="/cart">
                <button>Terminar compra</button>
                </Link>
                </>
            )}
        </div>
    )
}

export default ItemDetail


