import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../hooks/authRedirectHook';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = useAuth();

    useEffect(()=>{
        if(auth.hasaccessToken){
            window.location.href = "/"
        }
    }, [])

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
                window.location.href = "/"
            } else {
                console.error( response.status,'Signup failed');
            }
        } catch (error) {
            console.error('Error during Signup:', error);
        }
    };

    return (
        <>
        {auth.hasaccessToken ? (<></>) :
        (<div className="">
            
        </div>)}</>
    );
};

export default Signup;
