import ItemCount from "../itemCount/ItemCount"

const ItemDetail = ({item}) => {

  return (
    <div className="item-detail-card">
      <article className="item">
        <h1 className="title">{item.title}</h1>
        <img src={item.picUrl} alt={item.title} width="300" height="auto"/>
        <h3 className="item-detail-description">{item.description}</h3>
        <h2 id="price">{"S/" + item.price}</h2>
      </article>
      <h3>{"Stock disponible: " + item.stock}</h3>
      <ItemCount stock={item.stock} initial={1}/>
    </div>
  )
}

export default ItemDetail