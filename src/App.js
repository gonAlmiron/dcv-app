import './App.css';
import NavBar from './components/Header/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from  './components/ItemDetailContainer/ItemDetailContainer.js'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
        <NavBar/>
        <ItemDetailContainer/>
      
    </div>
   
  );
}

export default App;
