

const ItemDetail = ({terrario = []}) => {

    return (

        <div className="container">
            
            <img src={terrario.img}/>
            <h3>{terrario.nombre}</h3>
            <p>{terrario.descripcion}</p>
            <p>{terrario.precio}</p>
            <p>{terrario.stock}</p>

        </div>

    )


}

export default ItemDetail