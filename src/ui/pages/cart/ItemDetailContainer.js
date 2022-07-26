import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { db } from "../../../API/firebase/firebase"
import { getDocs, collection, query, where} from "firebase/firestore"

import ItemDetail from "./itemDetail/ItemDetail"
import spinner from "../../../assets/img/spinner.gif"
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState({})
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        const q = query(collection(db, "items"), where("id","==",`${id}`))
        const consulta = getDocs(q)
        consulta
        .then((res)=>{
            const item = res.docs[0].data()
            item.idFirebase = res.docs[0].id
            setItemDetail(item)
            setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[id])

    return (
        <div className="container">
            <h2>Detalle del producto</h2>
            <div className="item-detail">
                {loading ? (
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

export default ItemDetailContainer