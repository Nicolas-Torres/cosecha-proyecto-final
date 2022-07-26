import { useContext } from "react"
import { context } from "./CartContext"
import { Link } from "react-router-dom"
import trashIcon from "../../../assets/img/icon/trash.png"
import "./cart.css"
import Form from "./form"

const Cart = () => {

    const { cartItems, cartInfo, orderInfo} = useContext(context)

    const updateCart = (id) => {
        cartItems.removeItem(id)
    }

    const clearItems = () => {
        cartItems.clearItems()
    }

    return (
        <section id="cart">
            {cartItems.items.length !== 0 ?
                <>  
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
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody id="cart-body">
                        {cartItems.items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.itemPrice}</td>
                                    <td>{item.subTotal}</td>
                                    <td>
                                        <img className="button-remove-item" onClick={()=>updateCart(item.id)} src={trashIcon} alt="eliminar" width={20}/>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tbody id="total">
                        <tr >
                            <td colSpan="2"></td>
                            <td style={{fontWeight: "bold"}}>TOTAL</td>
                            <td style={{fontWeight: "bold"}}>{`S/ ${cartInfo.totalPrice}`}</td>
                        </tr>
                    </tbody>
                </table>

                <div className="button-clear-cart">
                    <button onClick={()=>clearItems()} >Vaciar carrito</button>
                </div>
                <Link to="/">
                    <button >Seguir comprando</button>
                </Link>
                </>
            :
                <>
                {orderInfo.id === "" ?
                    <>
                        <p>Carrito vacío</p>
                        <div className="button-clear-cart">
                            <Link to="/">
                                <button>Ir a comprar</button>
                            </Link>
                        </div>
                    </>
                : 
                    <></>
                }
                </>
            }
            <Form/>

        </section>
    )
}

export default Cart
