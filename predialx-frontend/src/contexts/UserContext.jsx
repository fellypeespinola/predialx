import { createContext, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider(props) {
    const [users, setUsers] = useState([]);

    return (
        <UserContext.Provider value={{users, setUsers}}>
            {props.children}
        </UserContext.Provider>
    );
}