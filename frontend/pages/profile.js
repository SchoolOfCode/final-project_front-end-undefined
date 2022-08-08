import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';


export default function Profile() {

    const {user, error, isLoading} = useUser();

    if (user) {
        return (
            <div>
            <h1>Welcome {user.name}</h1>
            <a href="/api/auth/logout">Logout</a>
            </div>
            
        )
    }
    return <a href="/api/auth/login">Login</a>
}


