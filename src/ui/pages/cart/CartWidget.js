//! snipet: rafce
import { Link } from "react-router-dom"
import cartIcon from "../../../assets/img/icon/cart4.png"
import { useContext } from "react"
import { context } from "./CartContext"

const CartWidget = () => {

  const totalPurchaseCart = useContext(context)

  return (
    <div>
      <h3>{totalPurchaseCart.counter}</h3>
      <Link to="/cart">
        <img src={cartIcon} alt="cart-icon" width="32"/>
      </Link>
    </div>
  )
}

export default CartWidget