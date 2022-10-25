import React from 'react'
import Header from "../components/Header";
import Wcard from "../components/Wcard";
import SelectCity from './SelectCity';


const Home = ({setWeather, setCitys, weather, citys}) => {
  return (
    <>
        <Header setWeather={setWeather} setCitys={setCitys} />
    
        <Wcard setWeather={setWeather} setCitys={setCitys} citys={citys} weather={weather}/>
        
    </>
  
  )
}

export default Home;