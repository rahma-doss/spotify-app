// UserProfile.tsx
import React from 'react';

import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import Button from './ui/Button';
import { FaUserAlt } from "react-icons/fa";
import { SPOTIFY_REDIRECT_URI } from '../constants/config';



const fetchUserProfile = async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
        throw new Error('Access token not found.');
    }

    const response = await axios.get('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });
    return response.data;
};

const UserProfile: React.FC = () => {
    const { data } = useQuery({ queryKey: ['userProfile'], queryFn: () => fetchUserProfile() });


    console.log('data', data)

    const handleLogout = () => {

        localStorage.removeItem("accessToken")
        window.location.href = SPOTIFY_REDIRECT_URI;

    };
    return (
        <div className="flex gap-x-4 items-center">
            <Button
                onClick={handleLogout}
                className="bg-white-default px-6 py-2"
            >
                Logout
            </Button>
            <Button
                // onClick={() => router.push('/account')} 
                className="bg-white-default"
            >
                <FaUserAlt />
            </Button>
        </div>
    );
};


export default UserProfile;
