import { useState } from "react"
import { getDoc, doc} from "firebase/firestore"
import { db } from "../../../API/firebase/firebase"
import "./order.css"

const Order = () => {

    const [order, setOrder] = useState({found: false, html: <></>})

    const searchOrder = (e) => {
        e.preventDefault(e)
        const orderToFind = e.target.form[0].value
        const q = doc(db, "ordenes",`${orderToFind}`)
        const consulta = getDoc(q)
        consulta
        .then((res)=>{
            const order = res.data()
            order.id = res.id
            order.found = true
            setOrder(order)
        })
        .catch(()=>{
            const order = {found: false, html: (
                <>
                <p>No existe el código: <b>{orderToFind}</b>.</p>
                <p>Ingrese un código correcto.</p>
                </>
            )}
            setOrder(order)
        })
    }

    return (
        <section id="order">
            <div className="container">
                {!order.found? 
                    <div className="container">
                        <p>Ingrese el código de compra:</p>
                        <form>
                            <input type="text"  placeholder="Ej. 0gv3kVFrNdJfZQhRx"/>
                            <button onClick={searchOrder}>Buscar</button>
                        </form>
                        {order.html}
                    </div>
        
                :
                    <>
                    <h2>{order.buyer.name}, estamos procesando tu compra.</h2>
                    <p>Código: {order.id}</p>
                    <p>Fecha de compra: {new Date(order.date.seconds*1000).toLocaleString()}</p>
                    <p>Dirección de envío: {order.buyer.dirección}</p>
                    <p>Información de contacto: {order.buyer.phone}, {order.buyer.email}</p>

                    <table className="cart">
                        <caption>
                            <h1>Resumen de compra</h1>
                        </caption>
                        <thead className="cart-header">
                            <tr>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio unitario</th>
                                <th>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody id="cart-body">
                            {order.items.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.title}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.itemPrice}</td>
                                        <td>{item.subTotal}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tbody id="total">
                            <tr >
                                <td colSpan="2"></td>
                                <td style={{fontWeight: "bold"}}>TOTAL</td>
                                <td style={{fontWeight: "bold"}}>{`S/ ${order.total}`}</td>
                            </tr>
                        </tbody>
                    </table>
                    </>
                }
            </div>
        </section>
    )
}

export default Order