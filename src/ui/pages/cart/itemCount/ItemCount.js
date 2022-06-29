import { useContext } from "react"
import {useState} from "react"
import { context } from "../CartContext"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [itemCounter, setCounter] = useState(initial)

    const lastCart = useContext(context)
    // console.log(lastCart)

    const aumentarContador = (e) => {
        e.stopPropagation()
        itemCounter < stock ? setCounter(itemCounter + 1) : setCounter(itemCounter)
    }
    
    const disminuirContador = (e) => {
        e.stopPropagation()
        itemCounter > 1 ? setCounter(itemCounter - 1) : setCounter(itemCounter)
    }

    const addToCart = (e) => {
        e.stopPropagation()
        onAdd(itemCounter, lastCart.counter + itemCounter)
        // lastCart.setCart(lastCart.counter + itemCounter)
    }

    return (
        <div className="container">
            <div className="count-buttons">
                <button onClick={disminuirContador}>-</button>
                <span>{itemCounter}</span>
                <button onClick={aumentarContador}>+</button>
            </div>
            <button onClick={addToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount