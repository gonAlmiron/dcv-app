import Item from "../Item/Item"

const ItemList = ( {productos = []} ) => {
    return (
        <div className="container my-5">
        <h3>Productos</h3>
        <hr/>
            { productos.map((prod) => <Item producto={prod} key={prod.id}/>) }  
</div>
    )
}


export default ItemList