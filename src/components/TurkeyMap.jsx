import React, { useState } from 'react'
import { Tooltip } from 'react-bootstrap';
import TurkeyMap from 'turkey-map-react';



const Turkeymap = () => {
    const [cityName, setCityName] = useState("")



    const renderCity = (cityComponent, cityData) => (
        <Tooltip title={cityData.name} key={cityData.id}>
            {cityComponent}
        </Tooltip>
    );

    return (
        <div>
            <div><h3>{cityName}</h3></div>
            <TurkeyMap
                hoverable={true}
                customStyle={{ idleColor: "#444", hoverColor: "#dc3522" }}
                onHover={({ plateNumber, name }) => setCityName(plateNumber + name)}
                cityWrapper={renderCity}
            />
        </div>
    )
}

export default Turkeymap