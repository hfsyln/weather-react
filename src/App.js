import { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import SelectCity from './Pages/SelectCity';
import TurkeyMaps from "./Pages/TurkeyMaps";
import WeatherPage from "./Pages/WeatherPage";
import { BrowserRouter, Routes,Route  } from 'react-router-dom';




function App() {


  //state oluşturuldu il ile çekilen veriler buraya atılıp dağıtılacak 
  const [weather, setWeather] = useState({});
  //state oluşturuldu değişen ilbilgisini alıp fetche ileticek 
  const [citys, setCitys] = useState("Ankara")

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=5ed635c2454ab17fa31effbe499af547`

  //city bilgisi ile veri çekilecek başlangıç ankara
  const getWeather = async () => {
   
    const response = await fetch(apiUrl);
    const data = await response.json();
     console.log(data)
    const {
      name,
      main: { temp, humidity },
      weather,id,wind:{speed}
    } = data
    
    setWeather({name,temp,weather,id,speed,humidity})
  }
 console.log(weather)

  useEffect(() => {
    getWeather()
  }, [citys])

  return (
    <div className="App">
    
      <Home setWeather={setWeather} setCitys={setCitys} citys={citys} weather={weather}/> 
      <SelectCity citys={citys} setCitys={setCitys} weather={weather}/> 
      <TurkeyMaps city={citys} setCitys={setCitys} weather={weather}/>
      <WeatherPage city={citys} setCitys={setCitys} weather={weather}/>

    </div>
  );
}

export default App;
