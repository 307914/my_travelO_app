import { createContext, useContext, useReducer } from "react"
import { AuthReducer } from "../reducer";

const intialValue = {
    isAuthOpen: false,
    openform: 'login',
    number: "",
    username: "",
    password: "",
    email: "",
    conformpassword: "",
    name: "",
    authToken: ""
}


const AuthContext = createContext(intialValue);


const AuthContextProvider = ({ children }) => {
    const [{ isAuthOpen, openform, name, authToken, conformpassword, state_login, username, email, password, number }, authDispatch] = useReducer(AuthReducer, intialValue)


    return <AuthContext.Provider value={{ name, authToken, conformpassword, username, state_login, email, password, number, isAuthOpen, openform, authDispatch }}>{children}</AuthContext.Provider>
}


const useAuth = () => useContext(AuthContext);

export { useAuth, AuthContextProvider }