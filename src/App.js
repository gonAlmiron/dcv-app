import './App.css';
import NavBar from './components/Header/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
        <NavBar/>
        <ItemListContainer/>
      
    </div>
   
  );
}

export default App;
