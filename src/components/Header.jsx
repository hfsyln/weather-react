import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
   <div className='navbar'>
    <Navbar >
        <Container className=" d-flex justify-content-center ">
            <Nav className=" d-flex justify-content-start gap-5" >
                <Link className='text-decoration-none text-dark'  to="/weatherPage">Weather App</Link>  
                <Link className='text-decoration-none text-dark' to="/">Home</Link> 
                <Link className='text-decoration-none text-dark' to="/turkey-map">Turkey cities map</Link>  
                <Link className='text-decoration-none text-dark' to="/turkey-cities">List of cities Turkey</Link>  
            </Nav>
        </Container>
    </Navbar>
   
   
</div>
  )
}

export default Header