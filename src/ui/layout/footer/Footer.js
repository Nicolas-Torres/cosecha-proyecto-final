import NavBar from "../navbar/NavBar"

const Footer = () => {
    return (
    <>
    <footer>
        <p>Copyright &copy; Nk Company 2022</p>
        <NavBar inHeader={false} className="navbar-footer"/>
    </footer>    
    </>
    )
}

export default Footer;