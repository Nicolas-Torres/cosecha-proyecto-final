import { useContext } from "react"
import { context } from "./CartContext"
import { Link } from "react-router-dom"
import trashIcon from "../../../assets/img/icon/trash.png"
import Form from "./form"



import { getDoc, doc} from "firebase/firestore"
import { db } from "../../../API/firebase/firebase"

// import { useTable } from "react-table"

const Cart = () => {

    const { cartItems, cartInfo, orderInfo } = useContext(context)
    
    const updateCart = (id) => {
        cartItems.removeItem(id)
        console.log("item eliminado")
    }

    const clearItems = () => {
        cartItems.clearItems()
    }


    const searchOrder = (e) => {
        e.preventDefault(e)
        console.log(e.target.form[0].name)
        console.log(e.target.form[0].value)
        const orderToFind = e.target.form[0].value
        const q = doc(db, "ordenes",`${orderToFind}`)
        const consulta = getDoc(q)
        consulta
        .then((res)=>{
            console.log(res.data())
            orderInfo.addOrder(res.data())
        })
        .catch((error)=>{
            console.log(error)
        })
    }








    return (
        <div className="container">
            <p>Ingrese el código de compra:</p>
            <form>
                <input type="text" name="order" placeholder="Ej. 0gv3kVFrNdJfZQhRx"/>
                {/* <Link to={`/order/${orderToFind}`}> */}
                    <button onClick={searchOrder}>Buscar</button>
                {/* </Link> */}
            </form>
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
                <>
                <div className="button-clear-cart">
                    <button onClick={()=>clearItems()}>Vaciar carrito</button>
                </div>
                <Link to="/">
                <button>Seguir comprando</button>
                </Link>
                <Form/>
                </>
            )
            }
        </div>
    )
}

export default Cart
