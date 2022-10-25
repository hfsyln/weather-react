import React from 'react';
import{ useNavigate } from 'react-router-dom';
import useTurkeyCities from "use-turkey-cities";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const SelectCity = () => {

    const navigate = useNavigate();
    const { cities, city, setCity} = useTurkeyCities();


  return (
    <>
    <Form.Group className="mb-3">
        <Form.Label onSubmit={(e) => { e.preventDefault();
            
            navigate(`/weather/${city.toLowerCase()}`) }}>
                citys
        </Form.Label>
        <Form.Select  onChange={e => {setCity(e.target.value);}} value={city}>
            {cities.map(city => (
                <option value={city}> {city}</option>
            ))}
        </Form.Select>
        <Button type="submit" value="Submit" />
    </Form.Group>
    </>
      
  )
}

export default SelectCity