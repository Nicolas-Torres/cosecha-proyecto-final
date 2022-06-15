import {useState} from "react"
import "./itemCount.css"


const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        contador < stock ? setContador(contador + 1) : setContador(contador)
    }
    
    const disminuirContador = () => {
        contador > 1 ? setContador(contador - 1) : setContador(contador)
    }

    const hayStock = () => {
        if(contador<=stock){
            onAdd()
        }
    }

    return (
    <div className="container">
        <p>Item</p>
        <div className="count">
            <button onClick={disminuirContador}>-</button>
            <p>{contador}</p>
            <button onClick={aumentarContador}>+</button>
        </div>
        <button onClick={hayStock}>Agregar al carrito</button>
    </div>

  )
}

export default ItemCount