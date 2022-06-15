import ItemCount from "./itemCount/ItemCount"


const ItemListContainer = () => {
  return (
    <>
      <ItemCount stock={5} initial={1} onAdd={()=>{}}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque blanditiis natus itaque quibusdam culpa rem quae corporis, libero debitis doloremque? Quaerat vero eligendi voluptatum a porro maiores vitae, exercitationem eos?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, assumenda laboriosam eveniet laborum soluta ut quisquam expedita ipsam, voluptatem placeat doloribus libero non ullam numquam provident fuga culpa quaerat voluptates.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, veniam deleniti dolore aut iusto vel eum id ab sequi quibusdam. Impedit, sint quasi? Placeat ipsam repudiandae officiis voluptas nisi numquam?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos repellendus ad et doloremque suscipit pariatur, maxime nobis ducimus, minima corporis enim aliquid perspiciatis expedita laborum. Pariatur culpa aliquid eligendi fuga.
      </p>
    </>
  )
}

export default ItemListContainer
