import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notFound from "../images/404.png";
const NotFound = () => {
    return (
        <div>
            <img style={{width:"100%", height:"100%"}} src={notFound} alt="" />
            <Link to="/"><Button className="danger">Please Go Home</Button></Link>
        </div>
    );
};

export default NotFound;