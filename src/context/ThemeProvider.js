import {createContext, useContext, useState} from "react";

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();

export function  useTheme() {
    return useContext(ThemeContext)
}

export function  useThemeUpdate() {
    return useContext(ThemeUpdateContext)
}

export function ThemeProvider ({ children }) {
    const [dark,setDark] = useState(false)

    const handleChangeDark = () => setDark( s => !s)

    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdateContext.Provider value={handleChangeDark()}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}