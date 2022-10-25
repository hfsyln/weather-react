import React from 'react'
import Card from 'react-bootstrap/Card';

const Wcard = () => {
  
    return (
    <>
    <Card style={{ width: '50rem' }} className= "m-3">
        <Card.Body>
            <Card.Title className="mr-0">il.ismi</Card.Title>
            <Card.Subtitle className="text-muted my-5">
                <h2 className="text-center">°C</h2>
                <p className="text-center">açık/bulutlu....</p>
            </Card.Subtitle>
            <Card.Text className="text-muted d-flex justify-content-between">
                <Card.Text>
                    <Card.Text>
                    rüzgar km/h
                    </Card.Text>
                    <Card.Text>
                        yağış %
                    </Card.Text>
                </Card.Text>
                <Card.Text className="text-muted ">
                    ****
                </Card.Text>
            </Card.Text>
        </Card.Body>
    </Card> 
    </>
  )
}

export default Wcard;