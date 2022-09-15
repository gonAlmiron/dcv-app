import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {


    const {cart} = useContext(CartContext)

    return (
    <div className="container my-2">"
    <h2>Carrito</h2>
    <hr/>

        {cart.map((item) => (
            <div key={item.id}>
                <h5>{item.nombre}</h5>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio: ${item.precio}</p>
                <hr/>
            </div>
        ))}

</div>

    )
}

export default Cart