import ItemCount from "../ItemListContainer/ItemCount";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import { useCartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";



const ItemDetail = ({item}) => {

    const { cart, addToCart, isInCart } = useCartContext()
    console.log(cart)

    const [cantidad, setCantidad] = useState(1)

   
    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            cantidad
      
        }
        addToCart(itemToCart)
    }
        

    return (
        <Card className="container my-5" style={{width: '25rem'}}>
         
            <Card.Img src={item.img} alt={item}/>
            <Card.Body>
            <Card.Title>{item.nombre}</Card.Title>
            <hr/>
            <Card.Title>Detalle del producto</Card.Title>
            <Card.Text>{item.descripcion}</Card.Text>
            <Card.Text>Precio: ${item.precio}</Card.Text>
            <hr/>

            
            {
                isInCart(item.id)
                ?   <Link to="/cart" className="btn btn-success my-2">Terminar mi compra</Link>
                :   <ItemCount 
                max={item.stock}
                counter={cantidad}
                setCounter={setCantidad}
                handleAgregar={handleAgregar}/>

            }

            

           
              
            </Card.Body>
        </Card>
    )
 
}

export default ItemDetail



//   {/* { item.map((prod) =>
//              <Item producto={prod} key={prod.id}/>) }    */}




// import Item from "../Item/Item"
// import { useParams } from "react-router-dom"


// const ItemDetail = ({item = []} ) => {
//     let {itemId } = useParams();

//     return (
//         <div className="container my-5">
//             <h4>Detalle del producto</h4>

//          <hr/>
//             { item.map((prod) => <Item producto={prod} key={prod.id}/>) }  
//         </div>
//     )
// }


