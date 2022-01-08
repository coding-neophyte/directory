import React from 'react'
import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom';
import { signOutUser } from '../services/users';
import { useHistory } from 'react-router-dom';

export default function Header() {
    const { user, setUser } = useUser();
    const history = useHistory();

    const handleSignout = async () => {
        await signOutUser();
        setUser({})
        history.replace('/')


    }

    return (
        <div>
            <header>
                <p> {user.email ? `Signed in as ${user.email}` : 'Not Signed In'} </p>
                {user.email ? <button onClick={handleSignout}>Sign Out</button> : <Link to='/signin'><button>Sign In</button></Link>}
            </header>

        </div>
    )
}
