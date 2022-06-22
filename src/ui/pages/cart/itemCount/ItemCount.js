import {useState} from "react"
import "./itemCount.css"


const ItemCount = ({stock, initial, onAdd}) => {

    //! Como useState devuelve un array su destructuring tbn esta dentro de un array.
    //! La única manera de cambia el estado es con la funcion qe retorna useState()
    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        contador < stock ? setContador(contador + 1) : setContador(contador)
    }
    
    const disminuirContador = () => {
        contador > 1 ? setContador(contador - 1) : setContador(contador)
    }

    const hayStock = () => {
        if(contador<=stock){
            onAdd(contador)
        }
    }

    return (
        
    <div className="container">
        <div className="count">
            <button onClick={disminuirContador}>-</button>
            <span>{contador}</span>
            <button onClick={aumentarContador}>+</button>
        </div>
        <button onClick={hayStock}>Agregar al carrito</button>
    </div>

  )
}

export default ItemCount