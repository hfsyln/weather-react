import React from 'react'
import Card from 'react-bootstrap/Card';
import { FiWind } from 'react-icons/fi';
import { WiHumidity } from 'react-icons/wi';


const Wcard = ({setWeather,  weather}) => {
  console.log(weather)


    
  console.log(weather)
  if (!weather.weather) {
      return <h1>Loading</h1>
  }

    return (
    <>
    <Card style={{ width: '25rem', height:`25rem`}} className= "mx-auto my-5 bg-secondary" key={weather?.id}>
        <Card.Body className='d-flex align-items-center flex-column' >
            <Card.Title  style={{fontSize: 35}}>{weather?.name}</Card.Title>
            <Card.Subtitle className="text-muted my-4">
                <h2 className="text-center text-dark ">{Math.floor(weather?.temp/33.8)}°C</h2>
                <p className="text-center text-dark m-5">{weather?.weather[0].description.toLocaleUpperCase()}</p>
            </Card.Subtitle>
            <Card.Text className="text-muted">
                <Card.Text className='d-flex flex-column gap-3 text-dark' style={{fontSize: 17}}>
                    <div className='d-flex gap-4'><FiWind size={35}/>
                    <Card.Text>
                    {weather?.speed} km/h
                    </Card.Text></div>
                    <div className='d-flex gap-4'>
                    <WiHumidity size={40}/>
                    <Card.Text >
                    {weather?.humidity} %
                    </Card.Text></div>
                    
                </Card.Text>
            </Card.Text>
        </Card.Body>
    </Card> 
    </>
  )
}

export default Wcard;