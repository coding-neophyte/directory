import React, { createContext } from 'react'
import { useContext } from 'react'
import { useState } from 'react';

export const ProfileCtx = createContext();

export const ProfileProvider = ({ children, mockprofile }) => {
    const [profile, setProfile] = useState( mockprofile ? { id: mockprofile.id, email: mockprofile.email } : {} );

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
