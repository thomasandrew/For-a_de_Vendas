import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './src/theme'
import { DarkModeProvider, useDarkMode } from './src/providers/DarkModeProvider'
import DatabaseInit from './src/database/InitializeDatabase';

import Routes from './src/Routes'

//Inicializando o Banco..
{
  new DatabaseInit
  console.log("initialize database")
}

const ThemeContainer = ({ children }) => {
  const { darkMode } = useDarkMode()
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  )
}

export default function App() {
  return (
      <DarkModeProvider>
        <ThemeContainer>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeContainer>
      </DarkModeProvider>
  );
}

