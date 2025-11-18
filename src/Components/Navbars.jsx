import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/portodark.svg'
import { Link } from 'react-router-dom';


function Navbars() {

   return (
    <>
      <Navbar expand="lg">
      <Container  className='p-2  py-4'>
        <Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="custom-toggler">
            <i className="fa-solid fa-plus text-light"></i>
          </Navbar.Toggle>        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text-center"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Link to="/features">Our Features</Link>
            <Link to="/authors">Authors</Link>
            <Link to="/tags">Tags</Link>
            
            <Link href="#contact" >
              Contact
            </Link>
          </Nav>
          <div className="d-block">
          <Nav
            className="me-auto my-2 my-lg-0  justify-items-center text-center "
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            {/* <div className='my-auto '  href="#action1"><i className="fa-solid fa-moon"></i></div> */}
            {/* <Link className='my-auto' href="#action2">Sign In</Link> */}
            <a className='my-auto mx-3' href="/sign" >
              <div className="navNtn fw-bolder px-4 my-auto">Sign In</div>
            </a>
          </Nav>
            
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Navbars