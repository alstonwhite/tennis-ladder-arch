import React, { useContext, useState } from 'react';

const themes = {
    light: {
        color: '#000000',
        backgroundColor: '#eeeeee',
    },
    dark: {
        color: '#ffffff',
        backgroundColor: '#222222',
    },
  };

const ThemeContext = React.createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(themes.light);

    const updateTheme = () => {
        setTheme(theme === themes.light ? themes.dark : themes.light);
        console.log(theme === themes.light ? themes.dark : themes.light);
    }

    const value = {theme, updateTheme};

    return (
        <ThemeContext.Provider value={value}>
            { children }
        </ThemeContext.Provider>
    )
}