import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import InputGroup from '../components/inputs/InputGroup';
import InputButton from '../components/buttons/InputButton';
import axios from 'axios';
import '../scss/styles.scss'; 
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const accessTokenCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userAccessToken='));
    const navigate = useNavigate();

    useEffect(()=>{
        if(accessTokenCookie){
            navigate('/')
        }
    })

    const handleSignup = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/user/signup', {
                username,
                email,
                password,
            }, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 201) {
                console.log(response.data);
                alert("Signup Successful");
                navigate("/");
            } else {
                console.error( response.status,'Signup failed');
            }
        } catch (error) {
            console.error('Error during Signup:', error);
        }
    };

    return (
        <>
        {accessTokenCookie ? (<></>) :
        (<div className="container">
            <Form>
                <InputGroup
                    label="Username"
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={setUsername}
                    controlId="formBasicUsername"/>

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

                <InputButton text="Signup" onClick={handleSignup} />
            </Form>
        </div>)}</>
    );
};

export default Signup;
