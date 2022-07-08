import { useContext } from "react"
import { context } from "./CartContext"
import { Link } from "react-router-dom"
import trashIcon from "../../../assets/img/icon/trash.png"
// import { useTable } from "react-table"

const Cart = () => {

    const { cartItems, cartInfo } = useContext(context)

    const updateCart = (id) => {
        
        cartItems.removeItem(id)

        console.log("item eliminado")

    }

    const clearItems = () => {

        cartItems.clearItems()
    }

    return (
        <div className="container">
            <table className="cart">
                <caption>
                    <h1>Resumen de compra</h1>
                </caption>

                <thead className="cart-header">
                        <tr>
                            <th colSpan="1" >{"PRODUCTO"}</th>
                            <th colSpan="2" >{"INFORMACIÓN"}</th>
                            <th rowSpan="2" >{"Sub. Total"}</th>
                            <th rowSpan="2" >{"Eliminar"}</th>
                        </tr>
                        <tr>
                            <th >{"Título"}</th>
                            <th >{"Cantidad"}</th>
                            <th >{"Precio unitario"}</th>
                        </tr>
                </thead>

                <tbody id="cart-body">
                        {cartItems.items.length === 0 ? (
                        
                            <tr>
                                <td colSpan="5" style={{textAlign: "center"}}>{"carrito vacío"}</td>
                            </tr>
                        ) : (
                            cartItems.items.map(item => {
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
                            })
                        )}
                </tbody>
                {cartItems.items.length === 0 ? (<></>) : (
                    <tbody id="total">
                        <tr >
                            <td colSpan="2"></td>
                            <td style={{fontWeight: "bold"}}>{"TOTAL"}</td>
                            <td style={{fontWeight: "bold"}}>{`S/ ${cartInfo.totalPrice}`}</td>
                        </tr>
                    </tbody>)
                }
            </table>
            { cartItems.items.length === 0 ? (
                <div className="button-clear-cart">
                    <Link to="/">
                        <button>Ir a comprar</button>
                    </Link>
                </div>
            ) : (
                <div className="button-clear-cart">
                    <button onClick={()=>clearItems()}>Vaciar carrito</button>
                </div>
            )
            }
        </div>
    )
}

export default Cart
