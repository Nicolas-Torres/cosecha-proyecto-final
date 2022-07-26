import { Link } from "react-router-dom"
import NavBar from "../navbar/NavBar"
import icon from "../../../assets/img/icon/LOGO.webp"
import "./header.css"

const Header = () => {
  return (
    <header id="header">
        <div className="container">
            <div className="logo">
                {/* <div className="icon"> */}
                    <Link to="/">
                        <img src={icon} alt = "icon" width="120"/>
                    </Link>
                {/* </div> */}
            </div>
            <NavBar inHeader={true} className="navbar-header"/>
        </div>
    </header>
  )
}

export default Header