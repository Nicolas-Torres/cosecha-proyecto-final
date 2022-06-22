import ItemCount from "../itemCount/ItemCount"

const ItemDetail = ({item}) => {

  return (
    <article className="item-detail">
      <h1 className="title">{item.title}</h1>
      <img src={item.picUrl} alt={item.title} width="300" height="auto"/>
      <h2>{item.description}</h2>
      <h3 id="price">{"S/" + item.price}</h3>
      <ItemCount stock={item.stock} initial={1}/>
    </article>
  )
}

export default ItemDetail