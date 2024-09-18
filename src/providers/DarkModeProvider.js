import React, { createContext, useEffect, useState, useContext } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

const DarkModeContext = createContext({})

export const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const useDarkMode = () => {
    const { darkMode } = useContext(DarkModeContext)
    const _setDarkMode = useContext(DarkModeContext).setDarkMode

    // Quando o componente é executado pela primeira vez, pegar dados do AsyncStorage
    useEffect(() => {
        (async () =>
            await AsyncStorage.getItem('darkMode', (err, res) =>
                _setDarkMode((res == "true"))
            )
        )()
    }, [])

    // Setar valores no Context e no AsyncStorage
    const setDarkMode = async (value) => {
        _setDarkMode(value)
        await AsyncStorage.setItem('darkMode', String(value))
    }

    return { darkMode, setDarkMode }
}
