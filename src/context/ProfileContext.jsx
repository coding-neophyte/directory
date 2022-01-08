import React, { createContext } from 'react'
import { getProfile } from '../services/profiles'
import { useContext } from 'react'
import { useState } from 'react';

export const ProfileCtx = createContext();

export const ProfileProvider = ({ children }) => {
    const userProfile = getProfile()
    const [profile, setProfile] = useState( userProfile ? { id: userProfile.id, email: userProfile.email } : {} );

    return <ProfileCtx.Provider value={ { profile, setProfile }}>{children}</ProfileCtx.Provider>
}


export const UseProfile = () => {
    const UseProfile = useContext(ProfileCtx)

    if(UseProfile === undefined){
        throw new Error('invalid')
    }
    return UseProfile;
}


export default { ProfileProvider, UseProfile }
