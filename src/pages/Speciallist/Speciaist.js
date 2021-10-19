import { Card } from "react-bootstrap";

const Speciaist = ({speciaist}) => {
    const{name, especialist, description, img} = speciaist;
    return ( 
        <div>
            <Card className="h-75">
    <Card.Img className="h-50 w-100" variant="top" src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{especialist}</small>
    </Card.Footer>
  </Card>
        </div>
    );
};

export default Speciaist;