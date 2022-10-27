import React from 'react';
import{ useNavigate } from 'react-router-dom';
import useTurkeyCities from "use-turkey-cities";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SelectCity = ({setWeather, setCitys, citys, weather}) => {

    const navigate = useNavigate();
    const { cities, city, setCity} = useTurkeyCities();

    console.log(city)
    
    console.log(cities)

   const handleSubmit = (e)=>{
    e.preventDefault();
    setCitys(city)
    console.log(citys)
    navigate(`/weatherPage`)
   }

  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="my-5 d-flex gap-3 mx-auto" style={{ width: '40rem' }} >
        <Form.Select  value={city} onChange={(e) =>
           {setCity(e.target.value)
            console.log(e.target.value)}}>
            {cities.map(city => (
                <option value={city}> {city} </option>
            ))}
        </Form.Select>
        <Button style={{ width: '5rem' }} type="submit" value="Submit" >Submit</Button>
    </Form.Group>
    </Form>
      
  )
}

export default SelectCity