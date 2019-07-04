import React, { createContext, useContext } from 'react'
import defaultTheme from './Theme.js'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'

let themeContext = createContext(theme)

export function useTheme() {
  return useContext(theme)
}

export function ThemeProvider({ children, theme = defaultTheme }) {
  return (
    <EmotionThemeProvider theme={theme}>
      <themeContext.Provider value={theme}>{children}</themeContext.Provider>
    </EmotionThemeProvider>
  )
}
