
import {useState} from "react"


const ItemCount = ({ stock, initial, onAdd: updateCart }) => {

    const [itemCounter, setCounter] = useState(initial)


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
        updateCart(itemCounter)
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