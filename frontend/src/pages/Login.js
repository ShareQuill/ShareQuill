import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import InputGroup from '../components/inputs/InputGroup';
import InputButton from '../components/buttons/InputButton';
import '../scss/login.scss'; 
import axios from 'axios';
import { useAuth } from '../hooks/authRedirectHook';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    useEffect(()=>{
        if(auth.hasaccessToken){
            window.location.href = "/"
        }
    })

    const handleLogin = async () => {
    try {
        const response = await axios.post('http://localhost:5000/api/user/login', {
            email,
            password,
        }, {
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    
        if (response.status === 200) {
            alert("Login Successful");
            window.location.href = "/"
        } else {
            console.error('Login failed');
        }
        } catch (error) {
        console.error('Error during login:', error);
        }
    };

    return (
        <>
        {auth.hasaccessToken ? (<></>) :
        (<div className="container">
        <Form>
            <InputGroup
            label="Email"
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={setEmail}
            controlId="formBasicEmail"/>

            <InputGroup
                label="Password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={setPassword}
                controlId="formBasicPassword"/>

            <InputButton text="Login" onClick={handleLogin} />
        </Form>
        </div>)
        }
        </>
    );
};

export default Login;
