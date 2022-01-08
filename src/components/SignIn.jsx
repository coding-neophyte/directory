import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInUser } from '../services/users'
import { useUser } from '../context/UserContext'
import { useHistory } from 'react-router-dom'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useUser();
    const history = useHistory();


    const handleSubmit = async (e) => {
        e.preventDefault();
        const existingUser = await signInUser(email, password)
        setUser(existingUser);
        history.replace('/profile')


    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign In</legend>
                    <label htmlFor="email">Email</label>
                    <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <button type='submit'>Login</button>
                </fieldset>
            </form>
            <p>Need an Account? <Link to='/signup'>Sign Up</Link> </p>
        </div>
    )
}
