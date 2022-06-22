import NavBar from "../navbar/NavBar"

const Footer = () => {
    return (
    <>
    <footer>
        <NavBar inHeader={false} className="navbar-footer"/>
        <p>Copyright &copy; Cosecha Coffee 2022</p>
    </footer>    
    </>
    )
}

export default Footer;