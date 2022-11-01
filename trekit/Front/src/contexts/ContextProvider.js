import React, { useContext, createContext, useState} from "react"

const stateContext = createContext()

const initialState = {
    chat: false,
    userProfile: false,
    notification: false,
  };

export const ContextProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined);
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)


    const handleClick = (clicked) => {setIsClicked(
        {...initialState,
        [clicked]: true,}
    )}

    return (
        <stateContext.Provider value={{activeMenu, setActiveMenu, handleClick, isClicked, screenSize, setScreenSize}}>
            {children}
        </stateContext.Provider>
    )
}

export const useStateContext = () => useContext(stateContext)
  