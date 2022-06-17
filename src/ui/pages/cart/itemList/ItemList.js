import Item from "../item/Item"

const ItemList = ({ items }) => {
  return (
    items.map(prod => 
        <Item
        key={prod.id}
        id={prod.id}
        title={prod.title}
        picUrl={prod.picUrl}
        price={prod.price}
        stock={prod.stock}
        />
    )
  )
}

export default ItemList