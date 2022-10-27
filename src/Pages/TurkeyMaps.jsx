import React, { useState } from 'react'
import TurkeyMap from 'turkey-map-react';
import { useNavigate } from 'react-router-dom'




const Turkeymaps = ({setWeather, setCitys, citys, weather}) => {
   
    const [cityName, setCityName] = useState("")
    
    const navigate = useNavigate();

    const handleClick = () => {
        setCitys(cityName.split(" ")[1])
        console.log(citys)
        navigate(`/weatherPage`)
        }

    return (
        <div className='text-center text-danger mt-5'>
            <div><h3  className='text-center text-danger mt-3'>{cityName}</h3></div>
            <TurkeyMap
                hoverable={true}
                customStyle={{ idleColor: "#444", hoverColor: "#dc3522" }}
                onHover={({ plateNumber, name }) => setCityName(plateNumber + " " + name)}
                onClick={handleClick}

            
            />
        </div>
    )
}

export default Turkeymaps;