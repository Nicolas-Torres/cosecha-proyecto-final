import {useState} from "react"

const ItemCount = ({ stock, initial, updateCart }) => {

    const [itemCounter, setCounter] = useState(initial)

    const increaseCounter = (e) => {
        e.stopPropagation()
        itemCounter < stock ? setCounter(itemCounter + 1) : setCounter(itemCounter)
    }
    
    const decreaseCounter = (e) => {
        e.stopPropagation()
        itemCounter > 1 ? setCounter(itemCounter - 1) : setCounter(itemCounter)
    }

    const addItemToCart = (e) => {
        e.stopPropagation()
        updateCart(itemCounter)
    }

    return (
        <div className="counter"> 
            <div className="count-buttons">
                <button onClick={decreaseCounter}>-</button>
                <span>{itemCounter}</span>
                <button onClick={increaseCounter}>+</button>
            </div>
            <button onClick={addItemToCart}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount