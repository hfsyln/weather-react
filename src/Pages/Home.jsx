import React from 'react'
import Header from "../components/Header";
import Wcard from "../components/Wcard";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

const Home = ({setWeather, setCitys, weather, citys}) => {

  const navigate= useNavigate()

  return (
    <div className='d-flex  flex-column gap-3' >
       <div className="main mt-5">
            <h1 className="title d-flex justify-content-center">Welcome</h1>
            <p className="title d-flex justify-content-center">Please Click Button For Other Countries' Weather Condition</p>
      </div>

        <div className='d-flex justify-content-center gap-3 '>
            <Button variant="warning"  onClick={()=>navigate(`/turkey-map`)}>
            Turkey Map
            </Button>
            <Button variant="warning"  onClick={()=>navigate(`/turkey-cities`)}>
            List of Countries
            </Button>
            
        </div>
        
        <Wcard setWeather={setWeather} setCitys={setCitys} citys={citys} weather={weather}/>
        
    </div>
  
  )
}

export default Home;