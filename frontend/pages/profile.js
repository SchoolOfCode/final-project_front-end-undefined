import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';


export default function Profile() {

    const {user, error, isLoading} = useUser();

    // Ensures  that the SDK has completed loading before accessing the user property by checking that isLoading is false.
    if (isLoading) return <div>Loading...</div>;

    // Ensures that the SDK has loaded successfully by checking that no error was produced.
    if (error) return <div>{error.message}</div>;

    // Checks the user property to ensure that Auth0 has authenticated the user before React renders any component that consumes it.
    if (user) {
        return (
            <div>
            <img src={user.picture} alt={user.name} />
            <h1>Welcome {user.name}</h1>
            <a href="/api/auth/logout">Logout</a>
            </div>
            
        )
    }
    return <a href="/api/auth/login">Login</a>
}


