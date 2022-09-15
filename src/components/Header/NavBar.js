import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ColorSchemesExample() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Decilo con Vida</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/productos/:categoryId" className="nav">Productos</Link>
            <Link to="/Nosotros" className="nav">Nosotros</Link>
            <Link to="/Contacto" className="nav">Contacto</Link>
            
        
          </Nav>
          <button><ShoppingCartIcon/></button>
        </Container>
        
        
      </Navbar>
        
    </>
  );
}

export default ColorSchemesExample;