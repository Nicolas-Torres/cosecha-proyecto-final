import { useEffect, useState } from "react"
import ItemDetail from "./itemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import spinner from "../../../assets/img/spinner.gif"
import "./ItemDetailContainer.css"
import { db } from "../../../API/firebase/firebase"
import { getDoc, doc } from "firebase/firestore"



const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({})
    const { id } = useParams()

    useEffect(() => {
        
        console.log("pidiendo producto...")

        const collectionProducts = doc(db, "items", `${id}`)
        const consulta = getDoc(collectionProducts)
        consulta
        .then((res)=>{
            const item = res.data()
            item.idFirebase = res.id
            setItemDetail(item)
        })
        .catch((error)=>{
            console.log(error)
        })

    },[id])

    return (
        <div className="container">
            <h2>Detalle del producto</h2>
            <div className="item-detail">
                {Object.keys(itemDetail).length === 0 ? (
                    <div className="loading-item-detail">
                        <p>Cargando detalles del producto...</p>
                        <img src={spinner} alt = "icon" width="50"/>
                    </div>
                ) : (
                    <ItemDetail item={itemDetail}/>
                )}
            </div>
        </div>
    )
}


// Object.keys(itemDetail).length !== 0
export default ItemDetailContainer