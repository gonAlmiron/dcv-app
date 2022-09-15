import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"

const Cart = () => {


    const {cart} = useContext(CartContext)

    return (
<div>
    <h2>Carrito</h2>

        {cart.map((item) => (
            <div key={item.id}>
                <h3>{item.nombre}</h3>
                <p>{item.descripcion}</p>
            </div>
        ))}

</div>

    )
}

export default Cart