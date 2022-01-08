import { useState } from 'react'
import { createProfile, getProfile } from '../services/profiles'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

export default function Profile() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [birthday, setBirthday] = useState('')
    const [textEntry, setTextEntry] = useState('')
    const [profile, setProfile] = useState({})
    const history = useHistory();


    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        const newProfile = await createProfile({ name, email, birthday, bio:textEntry })
        setProfile(newProfile);
        history.push('/profile/edit')


    }

    useEffect(() => {
        getProfile()
        .then((res) => setProfile(res) );
    }, [])

    return (
        <div>
            <h1>Profile Page</h1>
            {!profile.id ? <form onSubmit={handleProfileSubmit}>
                <fieldset>
                    <legend>Enter Profile Information</legend>

                        <label htmlFor='name'>Name</label>
                            <input type='text' id='name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                             <label>Email</label>
                             <input type='email' id='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />

                            <label>Birthday</label>
                            <input type='date' id='date' name='date'
                            value={birthday} onChange={(e) => setBirthday(e.target.value)} />

                            <label htmlFor='bio'>Insert Bio</label>
                            <textarea type='textarea' id='bio' name='bio' value={textEntry} onChange={(e) => setTextEntry(e.target.value)} />
                            <button type='submit'>Submit</button>
                </fieldset>
            </form> : <><p>{profile.name}</p> <p>{profile.birthday}</p> <p>{profile.email}</p><p>{profile.bio}</p>< p><Link to='/profile/edit'><button>Edit Profile</button></Link></p> </>}
        </div>
    )
}
