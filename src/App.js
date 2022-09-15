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
import { CartProvider } from './Context/CartContext';
import Cart from './components/Cart/Cart';
import { DarkModeProvider } from './Context/DarkModeContext';

const App = () => {


    return (

  
      <CartProvider>
        <DarkModeProvider>
 
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
        </DarkModeProvider>
      </CartProvider>  );
}

export default App;
