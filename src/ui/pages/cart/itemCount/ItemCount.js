import { useContext } from "react"
import {useState} from "react"
import { context } from "../CartContext"

const ItemCount = ({ stock, initial, onAdd: addToCart }) => {

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

    const addItemToCart = (e) => {
        e.stopPropagation()
        let totalCounter = lastCart.counter + itemCounter
        addToCart(itemCounter, totalCounter)
        // lastCart.setCart(lastCart.counter + itemCounter)
    }

    return (
        <div className="container">
            <div className="count-buttons">
                <button onClick={disminuirContador}>-</button>
                <span>{itemCounter}</span>
                <button onClick={aumentarContador}>+</button>
            </div>
            <button onClick={addItemToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount