import { createContext } from 'react'
import { useState } from 'react'

export const context = createContext()

//! Provider es un componente que viene adentro de un contexto y sirve para:
//! 1) Determinar quienes tienen acceso a la información
//! 2) Determina el valor de contexto
const Provider = context.Provider


const SelfProvider = ({ children }) => {
    
    const [items, setItems] = useState([])
    const addItem = (item, itemCounter) => {

        const { findItem, itemFind } = isInCart(item)
        let items

        if (findItem) {
            itemFind.quantity += itemCounter
            itemFind.subTotal += subTotal(itemFind.itemPrice, itemCounter)
            items = [...cartItems.items]
        } else {
            items = [...cartItems.items]
            let newItem = {
                id: item.id,
                title: item.title,
                itemPrice: item.price,
                quantity: itemCounter,
                subTotal: subTotal(item.price, itemCounter)
            }
            items.push(newItem)
        }
        setItems(items)
    }

    const isInCart = (item) => {

        let findItem
        let itemFind = cartItems.items.find(ite => ite.id === item.id)

        if (itemFind === undefined){
            findItem = false
            itemFind = null
            return { findItem, itemFind }
        }else{
            findItem = true
            return { findItem, itemFind }
        }
    }

    const subTotal = (itemPrice, itemCounter) => {

        let subTotal = Number((itemPrice*itemCounter).toFixed(2))
        return subTotal

    }

    const totalCounter = () => {

        let count = 0 
        for (let item of cartItems.items){
            count += item.quantity
        }
        return count

    }

    const totalPrice = () => {

        let count = 0
        for(let item of cartItems.items){
            count += item.subTotal
        }
        return Number(count.toFixed(2))

    }
    
    const removeItem = (id) => {

        let carrito = cartItems.items.slice()
        let newItems = carrito.filter(item => item.id !== id)
        setItems(newItems)

    }

    const clearItems = () => {
        setItems([])
    }

    const cartItems = {
        items,
        addItem,
        removeItem,
        clearItems
        
    }

    const cartInfo = {
        totalCounter: totalCounter(),
        totalPrice: totalPrice(),
        
    }

    return (
        <Provider value = {{cartItems, cartInfo}}>
            {children}
        </Provider>
    )
}

export default SelfProvider





