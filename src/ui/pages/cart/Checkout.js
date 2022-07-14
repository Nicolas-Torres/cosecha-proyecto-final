
import { context } from "./CartContext"
import { useContext, useEffect } from "react"

import { useParams } from "react-router-dom"



const Checkout = () => {
    const {orderInfo} = useContext(context)

    console.log(orderInfo.order)

    const { orderId } = useParams()
    console.log(orderId)
    useEffect(() => {
        
        console.log("pidiendo producto...")
        

    },[orderId])



     

  return (
    <>
    {orderInfo.order === "" ? 
    <>

        <button>Buscar</button>
    </>
    :
    <>
    <p>Código de compra: {orderInfo.order}</p>

    {/* <table className="cart">
                <caption>
                    <h1>Resumen de compra</h1>
                </caption>

                <thead className="cart-header">
                        <tr>
                            <th colSpan="1" >{"PRODUCTO"}</th>
                            <th colSpan="2" >{"INFORMACIÓN"}</th>
                            <th rowSpan="2" >{"Sub. Total"}</th>
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
            </table> */}
    </>
    }
    
    </>
  )
}

export default Checkout