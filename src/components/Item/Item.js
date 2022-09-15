import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';



const Item = ( {producto} ) => {


    return (
        <Card key={producto.id} className="container mb-5" style={{width: '25rem'}}>
            <Card.Img src={producto.img}/>
             <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <p>Precio: ${producto.precio}</p>
                <small>Stock disponible: {producto.stock}</small>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Ver más</Link>

             </Card.Body>
        </Card>
    )
}

export default Item