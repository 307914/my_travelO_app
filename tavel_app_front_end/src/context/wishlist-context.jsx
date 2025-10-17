import { createContext, use, useContext, useReducer, useState } from "react";
import { UserReducer } from "../reducer";




const UserContext = createContext({
    userdata: null,
    setUserData: null,
    message: null,
    setMessage: null,
    isLoading: false,
    setIsLoading: false,
    isOpenWishlist: false,
    setIsOpenWishlist: false,
    success: false,
    setSuccess: false

}
);

const UserContextProvider = ({ children }) => {
    const [userdata, setUserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [isOpenWishlist, setIsOpenWishlist] = useState(false);
    const [success, setSuccess] = useState(false);

    return <UserContext.Provider value={{ success, setSuccess, isOpenWishlist, setIsOpenWishlist, userdata, setUserData, isLoading, setIsLoading, message, setMessage }}>{children}</UserContext.Provider>
}

const useUserdata = () => useContext(UserContext);


export { useUserdata, UserContextProvider };