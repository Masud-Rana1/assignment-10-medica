import React from 'react';
import { Button, FloatingLabel, Form} from 'react-bootstrap';
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contact-container">
            <div> 
                <h1> Submit Your Query</h1>
                
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Message"
                        className="mb-3"
                    >
                        <Form.Control type="text" placeholder="Your Message" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingEmail" label="Your Email Address">
                        <Form.Control type="text" placeholder="Your Email Address" />
                    </FloatingLabel>

                <Button variant="outline-success" className="mt-2">Send</Button>
            </div>
            <div>
                <h1>Phone</h1>
                <h3>Vice Chancellor: +88 02 9661065,</h3>
                <h3>Pro-Vice-Chancellor (Academic):	+88 02 55165850,</h3>
                <h3>Pro-Vice-Chancellor (Administration):	+88 02 9673775,</h3>
                <h3>Treasurer: +88 02 9672066,</h3>
                <h3>Registrar: +88 02 9661064</h3>
            </div>
        </div>
    );
};

export default Contact;