import { useContext, createContext, useState } from "react";
import { getUser } from "../services/users";

const userContext = createContext();

const UserProvider = ({ children }) => {
    const currentUser = getUser();
    const [user, setUser] = useState( currentUser ? { id: currentUser.id, email: currentUser.email } : {} )
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
