import { createContext } from 'react'
import { useState } from 'react'

export const context = createContext()

//! Provider es un componente que viene adentro de un contexto y sirve para:
//! 1) Determinar quienes tienen acceso a la información
//! 2) Determina el valor de contexto
const Provider = context.Provider


const SelfProvider = ({ children }) => {
    
    const [counter, setCart] = useState(0)
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)


    const lastCart = {
        counter: counter,
        setCart: setCart,
        items: items,
        setItems: setItems,
        total: Number(total.toFixed(2)),
        setTotal: setTotal

    }

    console.log(lastCart)

    return (
        <Provider value = {lastCart}>
            {children}
        </Provider>
    )
}

export default SelfProvider





