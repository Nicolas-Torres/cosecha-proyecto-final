import ItemCount from "../itemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({ id, title, picUrl, price, stock }) => {
  return (
    <article key={id} className="item">
        <h1 className="title">{title}</h1>
        <img className="img" src={picUrl} alt={title} width="300" heigth="auto"/>
        <h3 id="price">{"S/ " + price}</h3>
        <Link to={`/item/${id}`}>Detalles del producto</Link>
        <ItemCount stock={stock} initial={1}/>
    </article>
  )
}

export default Item