import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import useAuth from '../../../hooks/useAuth';
import "./Login.css";
const Login = () => {
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const auth = getAuth();
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const toogleLogin = e => {
        setIsLogin(e.target.checked);
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value);
    }
    const handleRegistration = (event) =>{
        event.preventDefault();
        if(password.length < 6){
            setError('Password Must Be at least 6 characters');
            return
        }
        isLogin ? processLogin(email, password) : createNewUser(email, password)
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }

    const createNewUser = (email, password)=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            setError(error.message);
        })
    }
    const{signInUsingGoogle} = useAuth();
    return (
        <div className="login-container mt-5">
        
        <div>
        <Form onSubmit={handleRegistration}> 
        <h2 className="text-primary">Please {isLogin ? "Login" : 'Registration'}</h2>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
  </Form.Group>
  <div className="text-danger">{error}</div>
  <Form.Group onChange={toogleLogin} className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Already Registered?" />
  </Form.Group>
  <Button variant="primary" type="submit">
    {isLogin? 'login': "Register"}
  </Button>
</Form>
        </div>
        <div>  
            <h2>Use Google</h2>
             <Button onClick={signInUsingGoogle} variant="outline-warning">Google SignIn</Button> 
        </div>
        </div>
    );
};

export default Login;