import {useState, useEffect} from "react";


const ItemCount = () => {

let [counter, setCounter] = useState(1)
let [stock, setStock] = useState(20)


const handleSumar = () => {
    if (stock > 0) {
        setCounter(counter + 1)
        setStock(stock - 1)
    }
}

const handleRestar = () => {
    if (counter > 0) {
    setCounter(counter - 1)
    setStock(stock + 1)
    }
}
    
useEffect( () => {
    console.log("Stock modificado")
}, [counter, stock])

return (
    <div className="container my-5">
       

        <button onClick={handleRestar} className="btn btn-outline-primary">- </button>
        <span className="mx-2">{counter}</span>
        <button onClick={handleSumar} className="btn btn-primary"> +</button>
        <br/>
        <br/>
        <h4>Stock</h4>
        <span className="btn btn-outline-primary">{stock}</span>
    </div>



)   


}

export default ItemCount