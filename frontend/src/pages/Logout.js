import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const accessTokenCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userAccessToken='));

    const handleLogout = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/user/logout', {}, {
                withCredentials: true,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessTokenCookie.split("=")[1]}`
                },
            });
            if(response.status === 200){
                navigate("/login");
            }
        } catch (error) {
        console.error('Error during logout:', error);
        }
    };

    useEffect(()=>{
        handleLogout();
    },[])
    return <>
    <h1>Logging out Securely !!! </h1>
    </>;
};

export default Logout;
