import { useContext, useState } from "react"
import { context } from "./CartContext"
import trash from "../../../assets/img/icon/trash.png"
// import { useTable } from "react-table"



const Cart = () => {

    const lastCart = useContext(context)
    
    const [itemsToBuy, setitemsToBuy] = useState(lastCart.items.length)
    

    console.log(itemsToBuy)





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
                    {itemsToBuy === 0 ? (
                        <tr>
                            <td colSpan="5" style={{textAlign: "center"}}>{"carrito vacío"}</td>
                        </tr>
                    ) : (
                        lastCart.items.map(item => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.unitPrice}</td>
                                    <td>{item.subTotal}</td>
                                    <td>
                                        <img className="button-remove-item" onClick={()=>{console.log("eliminar item")}} src={trash} alt="eliminar" width={20}/>
                                    </td>
                                </tr>
                            )
                        })
                    )}
            </tbody>
            <tbody id="total">
                        <tr>
                            <td colSpan="2"></td>
                            <td style={{fontWeight: "bold"}}>{"TOTAL"}</td>
                            <td style={{fontWeight: "bold"}}>{`S/ ${lastCart.total}`}</td>
                        </tr>
            </tbody>
        </table>
        <div className="button-clear-cart">
            <button onClick={()=>{console.log("vaciar carrito")}}>Vaciar carrito</button>
        </div>
    </div>




    
  )
}

export default Cart

// style={{textAlign: "center"}}


// {/* <article key={item.id} className="item-to-buy">
// <h1 className="title">{item.title}</h1>
// <h2>{`Cantidad: ${item.quantity}`}</h2>
// <h2>{`Precio unitario: ${item.unitPrice}`}</h2>
// <h2>{`Sub. total: ${item.subTotal}`}</h2>
// </article>  */}



// title="Field #1"
// title="Field #2"
// title="Field #3"


// title="Field #1"
// title="Field #2"
// title="Field #1"
// title="Field #2"
// title="Field #3"