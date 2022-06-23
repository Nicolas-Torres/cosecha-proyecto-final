import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import spinner from "../../../assets/img/spinner.gif"
import "./ItemDetailContainer.css"



const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        
        console.log("pidiendo producto...")

        setTimeout(()=>{
            setLoading(true)

            fetch("../items.json")
                .then( response => response.json())
                .then( (data) => {
                    setItemDetail(data.find(item => item.id === id))
                    console.log("Ok, producto cargado.")
                })

        },1000)
        setLoading(false)
    },[id])

    console.table(itemDetail)

    return (
        <div className="container">
            <h2>Detalle del producto</h2>
            <div className="item-detail">
                {loading ? (
                    <ItemDetail item={itemDetail}/>
                ) : (
                    <div className="loading-item-detail">
                        <p>Cargando detalles del producto...</p>
                        <img src={spinner} alt = "icon" width="50"/>
                    </div>
                )}
            </div>
        </div>
    )
}


// Object.keys(itemDetail).length !== 0
export default ItemDetailContainer