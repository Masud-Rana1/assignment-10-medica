import React, { useEffect, useState } from 'react';
import Speciaist from '../Speciallist/Speciaist';
import "./Specialists.css";
const Specialists = () => {
    const[spcealists, setSpcealists] = useState([]);
    useEffect(()=>{
        fetch('specialists.json')
        .then(res => res.json())
        .then(data => setSpcealists(data));
    })
    return (
        <div className="specialist-container">
            {
                spcealists.map(spcealist =><Speciaist
                key={spcealist.id}
                speciaist={spcealist}
                ></Speciaist>)
            }
        </div>
    );
};

export default Specialists;