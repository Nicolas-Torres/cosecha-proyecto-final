import NavBar from "../navbar/NavBar"
import "./footer.css"

const Footer = () => {
    return (
        <footer className="container">
            <NavBar inHeader={false} className="navbar-footer"/>
            <p>Copyright &copy; Cosecha Coffee 2022</p>
        </footer>    
    )
}

export default Footer;