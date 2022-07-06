import { createContext } from 'react'
import { useState } from 'react'

export const context = createContext()

//! Provider es un componente que viene adentro de un contexto y sirve para:
//! 1) Determinar quienes tienen acceso a la información
//! 2) Determina el valor de contexto
const Provider = context.Provider


const SelfProvider = ({ children }) => {
    
    const [counter, setCounter] = useState(0)
    const [items, setItems] = useState([])
    const [total, setTotal] = useState(0)

    const isInCart = (item) => {

        let findItem
        let itemFind = lastCart.items.find(ite => ite.id === item.id)
        console.log(itemFind)
        if (itemFind === undefined){
            findItem = false
            itemFind = null
            return { findItem, itemFind }
        }else{
            findItem = true
            return { findItem, itemFind }
        }
    }

    const addItem = (item, itemCounter) => {

        const { findItem, itemFind } = isInCart(item)
        console.log(itemFind)

        if (findItem) {
            itemFind.quantity += itemCounter
            itemFind.subTotal += subTotal(itemFind.itemPrice, itemCounter)
        } else {
            let newItem = {
                id: item.id,
                title: item.title,
                itemPrice: item.price,
                quantity: itemCounter,
                subTotal: subTotal(item.price, itemCounter)
            } 
            lastCart.items.push(newItem)
        }

        totalCounter()
        totalPagar()
    }

    const subTotal = (itemPrice, itemCounter) => {
        let subTotal = Number((itemPrice*itemCounter).toFixed(2))
        return subTotal
    }

    
    const totalCounter = () => {
        let count = 0 
        for (let item of lastCart.items){
            count += item.quantity
        }
        lastCart.setCounter(count)
    }

    const totalPagar = () => {
        let count = 0
        for(let item of lastCart.items){
            count += item.subTotal
        }
        lastCart.setTotal(count)
        // lastCart.total = count
        // console.log(lastCart.total)
    }
    
    const removeItem = (id) => {
        let newItems = lastCart.items.filter(item => item.id !== id)
        console.log(newItems)
        
        totalCounter()
        totalPagar()
        setItems(newItems)
    }
    

        
        
    const lastCart = {
        counter: counter,
        setCounter: setCounter,
        items: items,
        total: Number(total.toFixed(2)),
        setTotal: setTotal,
        addItem: addItem,
        removeItem: removeItem
    }

    return (
        <Provider value = {lastCart}>
            {children}
        </Provider>
    )
}

export default SelfProvider





