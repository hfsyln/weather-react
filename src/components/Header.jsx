import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
   <>
    <Navbar className=" d-flex justify-content-start " bg="light" variant="light">
        <Container className=" d-flex justify-content-start mx-0">
        <Nav className=" d-flex justify-content-start gap-5 " >
                <Link className='text-decoration-none text-dark'  to="/weatherPage">Weather App</Link>  
                <Link className='text-decoration-none text-dark' to="/">Home</Link> 
                <Link className='text-decoration-none text-dark' to="/turkey-map">Turkey cities map</Link>  
                <Link className='text-decoration-none text-dark' to="/turkey-cities">List of cities turkey</Link>  
            </Nav>
        </Container>
    </Navbar>
    <div className="main ">
            <h1 className="title d-flex justify-content-center">Welcome</h1>
            <p className="title d-flex justify-content-center">Please Click Button For Other Countries' Weather Condition</p>
    </div>
   
</>
  )
}

export default Header