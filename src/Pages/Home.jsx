import React from 'react'
import Header from "../components/Header";
import Wcard from "../components/Wcard";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const Home = ({setWeather, setCitys, weather, citys}) => {

  const navigate= useNavigate()

  return (
    <>
      

        <div >
            <Button variant="warning" className='m-1 w-20' onClick={()=>navigate(`/turkey-map`)}>
            Turkey Map
            </Button>
            <Button variant="warning" className='m-1 w-20' onClick={()=>navigate(`/turkey-cities`)}>
            List of Countries
            </Button>
            
        </div>
    
        <Wcard setWeather={setWeather} setCitys={setCitys} citys={citys} weather={weather}/>
        
    </>
  
  )
}

export default Home;