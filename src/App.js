import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div>
    
    <header>
      <h1></h1>
      <nav>
        <NavBar/>
        <ItemListContainer/>
      
      </nav>

    </header>
    
    </div>
   
  );
}

export default App;
