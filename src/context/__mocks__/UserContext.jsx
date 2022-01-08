import { useContext, createContext, useState } from "react";

const userContext = createContext();

const UserProvider = ({ children , mockuser }) => {
    const [user, setUser] = useState( mockuser ? { id: mockuser.id, email: mockuser.email } : {} )
    return <userContext.Provider value={{ user, setUser }}>
        {children}
    </userContext.Provider>
}


const useUser = () => {
    const useUser = useContext(userContext);

    if(useUser === undefined){
        throw new Error('invalid provider')
    }
        return useUser;
}

export { userContext, UserProvider, useUser }
