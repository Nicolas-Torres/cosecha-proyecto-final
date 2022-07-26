import { Link } from "react-router-dom"

const Item = ({ id, title, picUrl, price, stock }) => {
    return (
    <div className="item-card">
        <article key={id} className="item-catalog">
            <Link to={`/item/${id}`}>
                <h1 className="title">{title}</h1>
                <img className="img" src={picUrl} alt={title} width="auto" height="200"/>
                <h2 className="price">{"S/ " + price}</h2>
            </Link>
        </article>
        <h3>{"Stock disponible: " + stock}</h3>
    </div>
    )
}

export default Item