import { useEffect, useState } from "react"
import { useParams} from "react-router-dom"
import { db } from "../../../API/firebase/firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

import ItemList from "./itemList/ItemList"
import spinner from "../../../assets/img/spinner.gif"
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {

	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const { category } = useParams()
	
	useEffect(() => {
		let products
		if (!category){
			products = collection(db, "items")
		} else {
			products = query(collection(db, "items"), where("category", "==", `${category}`))
		}
		const consulta = getDocs(products)
		consulta
		.then((res)=>{
			const items = res.docs.map(val => {
				const item = val.data()
				item.idFirebase = val.id
				return item
			})
			setItems(items)
			setLoading(false)
		})
		.catch((error)=>{
			console.log(error)
		})
	},[category])
	
	// const pathName = () => {
	// 	const route = window.location.pathname.slice(10,window.location.pathname.length)
	// 	path(route)
	// }

	// pathName()

	return (
		<section id="catalog">
			<h2 className="greeting">{category || greeting }</h2>
			<div className="item-list">
				{loading ? (
					<div className="loading-catalog">
						<img src={spinner} alt = "icon" width="50"/>
					</div>
				) : (
					<ItemList items={items}/>
				)}
			</div>
		</section>
	)
}

export default ItemListContainer
