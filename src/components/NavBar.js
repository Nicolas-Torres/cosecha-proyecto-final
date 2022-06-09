import CartWidget from "./CartWidget";


const NavBar = (props) => {
    
    if(props.inHeader){
        return (
            <nav>
                <a href="#">Módulos IoT</a>
                <a href="#">Electrónica</a>
                <a href="#">Sensores</a>
                <CartWidget />
            </nav>
        );


    }else{
        return (
            <nav>
                <a href="#">link 3</a>
                <a href="#">link 4</a>
                <a href="#">link 5</a>
            </nav>
        )
    }
  
  
  

};

export default NavBar;
