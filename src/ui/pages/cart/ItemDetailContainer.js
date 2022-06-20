import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail/ItemDetail"



const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState([])

    useEffect(() => {
        console.log("pidiendo producto...")

        setTimeout(()=>{
            //! FETCH
            fetch("./items.json")
                .then( response => response.json())
                .then( (data) => {
                    setItemDetail([data[2]])
                    console.log("Ok, producto cargado.")
                })

        },5000)

    },[])

    console.table(itemDetail)

    return (
        <div className="container">
            <span>ItemDetail</span>
            {itemDetail.length > 0 ? (
                <ItemDetail
                picUrl = {itemDetail[0].picUrl}
                description = {itemDetail[0].description}
                price = {itemDetail[0].price}/>
            ) : 
                <p>Cargando...</p>}
    
        </div>
    )
}

export default ItemDetailContainer