import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const Details = () => {
    const{description} = useParams();
    
    return (
        <div className="container">
            <Card className="mt-5 text-center" border="info" style={{ width: '18rem' }}>
    <Card.Header className="text-info">Details</Card.Header>
    <Card.Body>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    );
};

export default Details;