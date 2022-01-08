import React from 'react'
import { Link } from 'react-router-dom'



export default function Home() {
    return (
        <div>
            <h1>Welcome to Employee Directory</h1>
            <Link to='/signin'>Login</Link>
            <p>Or</p>
            <Link to='/signup'>Create Account</Link>

        </div>
    )
}
