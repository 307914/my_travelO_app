import { createContext, useContext, useState } from "react";

const intialValue = "National Parks";

export const CategoryContext = createContext();


export const ContextProvider = ({ children }) => {
    const [state, setState] = useState(intialValue);
    const [single, setSingle] = useState(null);

    return <CategoryContext.Provider value={{ single, setSingle, state, setState }}>{children}</CategoryContext.Provider>
}

export const useCategory = () => useContext(CategoryContext);
