
const ItemDetail = ({description, picUrl, price}) => {
  return (
    <div>
        <h2>{description}</h2>
        <img src={picUrl} width="300" height="auto"/>
        <h2>S/ {price}</h2>
    </div>
  )
}

export default ItemDetail