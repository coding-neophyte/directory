import React from 'react'
// import Profile from '../views/Profile'
import { useState } from 'react'
import { updateProfile } from '../services/profiles'
import { UseProfile } from '../context/ProfileContext'
import { useHistory } from 'react-router-dom'
import { getProfile } from '../services/profiles'
import { useEffect } from 'react/cjs/react.development'

export default function EditProfile() {
    const [name, setName] = useState('')
    const [textEntry, setTextEntry] = useState('')
    const [birthday, setBirthday] = useState('')
    // const { profile ,setProfile } = UseProfile();
    const [profile, setProfile] = useState({})
    const history = useHistory();

    const userProfile  = UseProfile();



     const handleEditProfile = async (e) => {
         e.preventDefault();

         const editProfile = await updateProfile( { name, bio:textEntry, birthday, email: profile.email } );

         setProfile(editProfile);
         history.push('/profile')


     }
     useEffect(() => {
        getProfile()
        .then((res) => {setProfile(res)
            setName(res.name)
            setBirthday(res.birthday)
            setTextEntry(res.bio)
        } );
    }, [])


    return (
        <div>
            <h1>Profile Page</h1>
            <form onSubmit={handleEditProfile}>
                <fieldset>
                    <legend>Edit Profile</legend>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' name='name' defaultValue={name} onChange={(e) => setName(e.target.value)} />
                    <label>Email</label>
                    <p>{profile.email}</p>
                    <label htmlFor='birthday'>Birthday</label>
                    <input type='date' id='date' name='date'
                    defaultValue={birthday} onChange={() => setBirthday()} />
                    <label htmlFor='bio'>Insert Bio</label>
                    <textarea type='textarea' id='bio' name='bio' defaultValue={textEntry} onChange={(e) => setTextEntry(e.target.value)} />
                    <button type='submit'>Save</button>
                </fieldset>

            </form>

        </div>
    )
}
