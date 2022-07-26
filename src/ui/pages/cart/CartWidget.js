import { Link } from "react-router-dom"
import { useContext } from "react"
import { context } from "./CartContext"
import cartIcon from "../../../assets/img/icon/cart4.png"

const CartWidget = () => {

  const {cartItems,cartInfo} = useContext(context)

  return (
    <div className="cart-widget">
        {cartItems.items.length === 0 ? <></> : <h4>{cartInfo.totalCounter}</h4>}
        <Link to="/cart">
            <img src={cartIcon} alt="cart-icon" width="32"/>
        </Link>
    </div>
  )
}

export default CartWidget