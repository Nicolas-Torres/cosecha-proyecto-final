
import { useEffect, useState, useRef } from "react"
import ItemList from "./itemList/ItemList"
import { useParams} from "react-router-dom"

import spinner from "../../../assets/img/spinner.gif"
import "./ItemListContainer.css"

import { db } from "../../../API/firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

// getDocs: Sirve para traer muchos documentos en una coleccion
// getDoc: Sirve para traer un solo documento en base a su ID
// doc: Referencia un documento de coleccion
// query
// where




const ItemListContainer = ({ greeting }) => {

	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(false)
	const { category } = useParams()

	const loadingText = useRef("Cargando catálogo...");
	
  	useEffect(() => {
		if (!category){
			loadingText.current = "Cargando catálogo...";
			console.log("pidiendo productos...")

			const collectionProducts = collection(db, "items")
			const consulta = getDocs(collectionProducts)
		
			consulta
			.then((res)=>{
				setLoading(true)
				const items = res.docs.map(val => {
					const item = val.data()
					item.idFirebase = val.id
					return item
				})
				setItems(items)
				console.log("Ok, productos cargados.")
				
			})
			.catch((error)=>{
				console.log(error)
			})

			setLoading(false)
		} else {
			loadingText.current = "Cargando filtro..."
			console.log("filtrando productos...")

			const q = query(collection(db, "items"), where("category", "==", `${category}`))
			const consulta = getDocs(q)
			consulta
			.then((res)=>{
				setLoading(true)
				const items = res.docs.map(val => {
					const item = val.data()
					item.idFirebase = val.id
					return item
				})
				setItems(items)
				console.log("Ok, productos filtrados.")
			})
			.catch((error)=>{
				console.log(error)
			})
			setLoading(false)
		}
  	},[category])

	return (
		<div className="container">
		<h2>{greeting}</h2>
		<div className="item-list">
			{loading ? (
				<ItemList items={items}/>
			) : (
				<div className="loading-catalog">
				<p>{loadingText.current}</p>
				<img src={spinner} alt = "icon" width="50"/>
			</div>
			)}
		</div>
		</div>
	)
}

export default ItemListContainer
