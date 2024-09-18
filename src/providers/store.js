import React, {createContext,useContext,useEffect,useState} from 'react'
import AsyncStorage from '@react-native-community/async-storage'


const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
    const [store,setStore] = useState({
        firstInit: true,
        darkMode: false,
        userToken: '',
    })

    const setDarkMode = (value) => setStore({...store, darkMode: value})

    const providerValue = {
        store,
        //firstInit,setFirstInit,
        //darkMode,
        setDarkMode,
        //userToken,setUserToken
    }

    return (
        <StoreContext.Provider value={providerValue}>
            {children}
        </StoreContext.Provider>
    )
}
export default StoreProvider


export const useDarkMode = () => {
    const { store: { darkMode }, setDarkMode } = useContext(StoreContext)
    return { darkMode, setDarkMode }
}

export const useTest = () => {
    const { value, setValue } = React.useContext(TesteContext)
    return { value, setValue }
}
