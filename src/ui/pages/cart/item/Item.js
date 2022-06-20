import ItemCount from "../itemCount/ItemCount"

const Item = ({ id, title, picUrl, price, stock }) => {
  return (
    <div key={id} className="item">
        <h1 className="title">{title}</h1>
        <img className="img" src={picUrl} alt={title} width="300" heigth="auto"/>
        <h2 id="price">{"S/ " + price}</h2>
        <ItemCount stock={stock} initial={1}/>
    </div>
  )
}

export default Item