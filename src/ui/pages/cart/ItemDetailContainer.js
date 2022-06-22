import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail/ItemDetail"
import { useParams } from "react-router-dom"



const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({})
    const path = useParams()
    console.log(path)

    useEffect(() => {
        console.log("pidiendo producto...")

        setTimeout(()=>{
            //! FETCH
            fetch("./items.json")
                .then( response => response.json())
                .then( (data) => {
                    setItemDetail(data[2])
                    console.log("Ok, producto cargado.")
                })

        },5000)

    },[path])

    console.table(itemDetail)

    return (
        <div className="container">
            <span>ItemDetail</span>
            {Object.keys(itemDetail).length !== 0 ? (
                <ItemDetail item={itemDetail}/>
            ) : 
                <p>Cargando...</p>}
    
        </div>
    )
}

export default ItemDetailContainer