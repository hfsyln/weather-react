import React from 'react'
import Card from 'react-bootstrap/Card';


const Wcard = ({setWeather,  weather}) => {
  console.log(weather)


    
  console.log(weather)
  if (!weather.weather) {
      return <h1>Loading</h1>
  }

    return (
    <>
    <Card style={{ width: '20rem' }} className= "m-3" key={weather?.id}>
        <Card.Body>
            <Card.Title className="mr-0">{weather?.name}</Card.Title>
            <Card.Subtitle className="text-muted my-5">
                <h2 className="text-center">{Math.floor(weather?.temp/33.8)}°C</h2>
                <p className="text-center">{weather?.weather[0].description}</p>
            </Card.Subtitle>
            <Card.Text className="text-muted  ">
                <Card.Text>
                    <Card.Text>
                    {weather?.speed} km/h
                    </Card.Text>
                    <Card.Text>
                    {weather?.humidity} %
                    </Card.Text>
                </Card.Text>
            </Card.Text>
        </Card.Body>
    </Card> 
    </>
  )
}

export default Wcard;