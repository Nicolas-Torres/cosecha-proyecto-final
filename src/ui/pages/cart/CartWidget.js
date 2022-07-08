//! snipet: rafce
import { Link } from "react-router-dom"
import cartIcon from "../../../assets/img/icon/cart4.png"
import { useContext } from "react"
import { context } from "./CartContext"

const CartWidget = () => {

  const {cartItems,cartInfo} = useContext(context)
  return (
    <div>
      {cartItems.items.length === 0 ? <></> : <h3>{cartInfo.totalCounter}</h3>}
      <Link to="/cart">
        <img src={cartIcon} alt="cart-icon" width="32"/>
      </Link>
    </div>
  )
}

export default CartWidget