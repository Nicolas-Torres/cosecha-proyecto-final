
import { db } from "../../../API/firebase/firebase"
import { context } from "./CartContext"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { useContext, useState } from "react"

import { Link } from "react-router-dom"

const Form = () => {

    const { cartItems, cartInfo, orderInfo} = useContext(context)
    const [orderId, setOrderId] = useState("")
  

    const handleSubmit = (e) => {
        e.preventDefault();

        const purchaseOrder = collection(db, "ordenes")

        const orderData = {
            buyer: {
                [e.target.form[0].name]: e.target.form[0].value,
                [e.target.form[1].name]: e.target.form[1].value,
                [e.target.form[2].name]: e.target.form[2].value
            },
            items: cartItems.items,
            date: serverTimestamp(),
            total: cartInfo.totalPrice
        }
        const consulta = addDoc(purchaseOrder, orderData)

        consulta
        .then(res=>{
            console.log(res)
            console.log(res.id)
            setOrderId(res.id)

        })
        .catch(error=>{
            console.log(error)
        })

    }

    const endBuy = () => {
        cartItems.clearItems()
        orderInfo.addOrder(orderId)
    }


    return (
        <>
        {orderId === "" ? 
            <div>
                <form>
                    <input 
                        placeholder='Nombre'
                        type="text"
                        name="name"
                        required
                    />
                    <input 
                        placeholder='Email'
                        type="text" 
                        name="email"
                        required
                        
                    />
                    <input 
                        placeholder='Teléfono'
                        type="text"
                        name="phone"
                        required
                    />
                    
                    <button onClick={handleSubmit}>Comprar</button>
                    

                </form>
            </div>
            :
            <>
            <h2>¡Felidades su compra procedió satisfactoriamente!</h2>
            <p>Su codigo de compra es: {orderId}</p>
            <Link to="/order">
                <button onClick={endBuy}>Ver compra</button>
            </Link>
            </>
        }
        
        </>
    )
}

export default Form