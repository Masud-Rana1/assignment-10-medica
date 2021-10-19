import React from 'react';
import "./Footer.css";
const Footer = () => {
    return (
        <div className="footer">
            <div className="address">  
                <h3>Address</h3>
                <hr />
                <h5>Shekhertek8, Mohammadpur, Dhaka-1207</h5>
                <h5>Phone:19993943483</h5>
                <h5>mr90.masud@gmail.com</h5>
            </div>
            <div className="condition">
                <h3>Legal</h3>
                <hr />
                <h5>Refund Policy</h5>
                <h5>Terms & Conditions</h5>
            </div>
        </div>
    );
};

export default Footer;