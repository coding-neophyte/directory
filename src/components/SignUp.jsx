import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signUpUser } from '../services/users'
import { useHistory } from 'react-router-dom'
import { useUser } from '../context/UserContext'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useUser();
    const history = useHistory();
    console.log(setUser)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newUser = await signUpUser(email, password)
            console.log(newUser);
        setUser(newUser);

        history.replace('/profile')
        // setEmail('')
        // setPassword('')

        } catch(error){
            throw error
        }




    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Sign Up</legend>
                    <label htmlFor="email">Email</label>
                    <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} required></input>

                    <label htmlFor="password">Password</label>
                    <input type='password' id='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required></input>
                <button type='submit'>Sign Up</button>
                </fieldset>
            </form>
            <p>Already have Account? <Link to='/signin'>Sign In</Link> </p>


        </div>
    )
}
