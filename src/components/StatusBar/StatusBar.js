import React from 'react'
import { StatusBar as _StatusBar } from 'expo-status-bar';

import { useDarkMode } from '../../providers/DarkModeProvider'

export default function StatusBar() {
    const { darkMode } = useDarkMode()

    return <_StatusBar style={darkMode ? "light" : "dark"} />
}
