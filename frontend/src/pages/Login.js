import React, { useEffect, useState } from 'react';
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
        (<div>

        </div>)
        }
        </>
    );
};

export default Login;
