// import ItemCount from "../itemCount/ItemCount"
import { Link } from "react-router-dom"

const Item = ({ id, title, picUrl, price, stock }) => {
  return (
    <div className="item-card">
      <Link to={`/item/${id}`}>
        <article key={id} className="item-catalog">
              <h1 className="title">{title}</h1>
              <img className="img" src={picUrl} alt={title} width="300" heigth="auto"/>
              <h2 id="price">{"S/ " + price}</h2>
        </article>
      </Link>
      <h3>{"Stock disponible: " + stock}</h3>
      {/* <ItemCount stock={stock} initial={1}/> */}
    </div>
  )
}

export default Item