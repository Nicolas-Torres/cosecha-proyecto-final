import ItemCount from "../itemCount/ItemCount"

const Item = ({ id, title, picUrl, price, stock }) => {
  return (
    <div key={id}>
        <h1>{title}</h1>
        <img src={picUrl} alt={title} width="300" heigth="auto"/>
        <h2>Precio: {price}</h2>
        <ItemCount stock={stock} initial={1}/>
    </div>
  )
}

export default Item