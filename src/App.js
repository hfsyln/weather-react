import { useState, useEffect } from 'react';
import './App.css';
import SelectCity from './components/SelectCity';
import Home from './Pages/Home';
import Header from "./components/Header"


function App() {


  //state oluşturuldu il ile çekilen veriler buraya atılıp dağıtılacak 
  const [weather, setWeather] = useState({});
  //state oluşturuldu değişen ilbilgisini alıp fetche ileticek 
  const [city, setCity] = useState("")

  //city bilgisi ile veri çekilecek başlangıç ankara
  const getWeather = async (city) => {
   
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5ed635c2454ab17fa31effbe499af547`
   
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    console.log(data);
    setWeather(data);
  }
 console.log(weather)

  useEffect(() => {
    getWeather('Ankara')
  }, [])

  return (
    <div className="App">
    
      <Home setWeather={setWeather}/> 
      
    </div>
  );
}

export default App;
