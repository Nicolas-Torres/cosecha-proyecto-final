
import { db } from "../../../API/firebase/firebase"
import { context } from "./CartContext"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "./form.css"


const Form = () => {

    const { cartItems, cartInfo, orderInfo } = useContext(context)
    const [orderId, setOrderId] = useState(orderInfo.id)

    const handleSubmit = (e) => {
        e.preventDefault();

        const purchaseOrder = collection(db, "ordenes")

        const orderData = {
            buyer: {
                [e.target.form[0].name]: e.target.form[0].value,
                [e.target.form[1].name]: e.target.form[1].value,
                [e.target.form[2].name]: e.target.form[2].value,
                [e.target.form[3].name]: e.target.form[3].value
            },
            items: cartItems.items,
            date: serverTimestamp(),
            total: cartInfo.totalPrice
        }

        const consulta = addDoc(purchaseOrder, orderData)

        consulta
        .then(res=>{
            orderInfo.addOrderId(res.id)
            setOrderId(res.id)
            cartItems.clearItems()
        })
        .catch(error=>{
            console.log(error)
        })

    }

    const endBuy = () => {
        setOrderId("")
        orderInfo.removeOrderId()
    }

    return (
        <section id="form">
        {orderId === "" ? 
                <form>
                    <p>Nombre:</p>
                    <input 
                        placeholder='Nombre'
                        type="text"
                        name="name"
                        required
                    />
                    <p>Email:</p>
                    <input 
                        placeholder='Email'
                        type="text" 
                        name="email"
                        required
                        
                    />
                    <p>Teléfono:</p>
                    <input 
                        placeholder='Teléfono'
                        type="text"
                        name="phone"
                        required
                    />
                    <p>Dirección:</p>
                    <input 
                        placeholder='Dirección'
                        type="text"
                        name="dirección"
                        required
                    />
                    <p></p>
                    <button disabled={cartItems.items.length === 0 ? true : false} onClick={handleSubmit}>Comprar</button>
                </form>
            
            :
            <>
            <h2>¡Felicidades su compra procedió satisfactoriamente!</h2>
            <h3>Su código de compra es: {orderId}</h3>
            <p>Guarde este código para que luego pueda ver el estado de su compra en la opción: <b>Mis pedidos</b></p>
            <Link to="/order/my-purchase">
                <button onClick={endBuy}>Ver compra</button>
            </Link>
            </>
        }
        </section>
    )
}

export default Form