import {useState} from "react"


const ItemCount = ({stock, initial}) => {

    const [contador, setContador] = useState(initial)

    const aumentarContador = () => {
        contador < stock ? setContador(contador + 1) : setContador(contador)
    }
    
    const disminuirContador = () => {
        contador > 1 ? setContador(contador - 1) : setContador(contador)
    }

    const onAdd = (a) => { }
    const hayStock = () => {
        if(contador<=stock){
            onAdd(contador)
        }
    }

    return (
        <div className="container">
            <div className="count-buttons">
                <button onClick={disminuirContador}>-</button>
                <span>{contador}</span>
                <button onClick={aumentarContador}>+</button>
            </div>
            <button onClick={hayStock}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount