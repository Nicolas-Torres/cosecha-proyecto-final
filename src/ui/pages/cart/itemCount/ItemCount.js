import {useState} from "react"


const ItemCount = ({ stock, initial, onAdd }) => {

    const [counter, setCounter] = useState(initial)

    const aumentarContador = (e) => {
        e.stopPropagation()
        counter < stock ? setCounter(counter + 1) : setCounter(counter)
    }
    
    const disminuirContador = (e) => {
        e.stopPropagation()
        counter > 1 ? setCounter(counter - 1) : setCounter(counter)
    }

    const confirmStock = (e) => {
        e.stopPropagation()
        onAdd(counter)
    }

    return (
        <div className="container">
            <div className="count-buttons">
                <button onClick={disminuirContador}>-</button>
                <span>{counter}</span>
                <button onClick={aumentarContador}>+</button>
            </div>
            <button onClick={confirmStock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount