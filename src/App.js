import './App.css';
import NavBar from './components/Header/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contacto from './components/Contacto/Contacto';
import Nosotros from './components/Nosotros/Nosotros';
import { Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './Context/CartContext';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

const App = () => {

const [cart, setCart] = useState([])
  
const addToCart = (item) => {
  setCart([...cart, item])
}


const isInCart = (id) => {
  return cart.some((item) => item.id === id)
}


    return (

    <CartContext.Provider value={ {
      cart,
      addToCart,
      isInCart
    } }>

      <BrowserRouter>

          <NavBar/>
          <br/>

          <Routes>
              <Route path='/' element={ <ItemListContainer/> }/>
              <Route path='/Productos' element={<ItemListContainer/>} />
              <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/Contacto' element={<Contacto/>}/>
              <Route path='/Nosotros' element={<Nosotros/>}/>
              <Route path='/Cart' element= {<Cart/>} />
              <Route path="*" element={<Navigate to="/"/>} />
            </Routes>
          
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
