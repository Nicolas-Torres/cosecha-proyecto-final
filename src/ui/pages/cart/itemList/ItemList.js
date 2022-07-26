import Item from "../item/Item"

const ItemList = ({ items }) => {
    return (
        items.map(items => 
            <Item
                key={items.id}
                id={items.id}
                title={items.title}
                picUrl={items.picUrl}
                price={items.price}
                stock={items.stock}
            />
        )
    )
}

export default ItemList