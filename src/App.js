import { useState, useEffect } from 'react';
import './App.css';
import Home from './Pages/Home';
import Header from "./components/Header";
import SelectCity from './Pages/SelectCity';
import TurkeyMaps from "./Pages/TurkeyMaps";
import WeatherPage from "./Pages/WeatherPage";
import { BrowserRouter, Routes, Route  } from 'react-router-dom';




function App() {


  //state oluşturuldu il ile çekilen veriler buraya atılıp dağıtılacak 
  const [weather, setWeather] = useState({});
  //state oluşturuldu değişen ilbilgisini alıp fetche ileticek 
  const [citys, setCitys] = useState("Ankara")

  const APİKEY = process.env.REACT_APP_API_ID;

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citys}&appid=${APİKEY}`

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
    <BrowserRouter>
    <Header setWeather={setWeather} setCitys={setCitys} />
    <Routes>
        <Route path="/" element={<Home setWeather={setWeather} citys={citys} setCitys={setCitys} weather={weather} />} />
        <Route path="/turkey-cities" element={<SelectCity setWeather={setWeather} citys={citys} setCitys={setCitys} weather={weather} />} />
        <Route path="/turkey-map" element={<TurkeyMaps setWeather={setWeather} citys={citys} setCitys={setCitys} weather={weather}/>} />
        <Route path="/weatherPage" element={<WeatherPage setWeather={setWeather} citys={citys} setCitys={setCitys} weather={weather}/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
