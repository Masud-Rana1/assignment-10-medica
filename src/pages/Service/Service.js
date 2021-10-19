import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Service.css";
const Service = ({service}) => {
    const{id,name, price, description, img} = service;
    return (
        <div>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                  ${price}
                </Card.Text>
                <Link to={`/details/${description}`}>
                <Button variant="dark">Details</Button>
                </Link>
              </Card.Body>
        </Card>
        </div>
    );
};

export default Service;