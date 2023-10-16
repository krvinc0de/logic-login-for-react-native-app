import { createContext, useEffect, useReducer } from "react";
import { darkTheme, lightTheme, themeReducer } from "./ThemeReducer";
import { useColorScheme } from "react-native";


export const ThemeContext = createContext({})

export const ThemeProvider = ({children}) => {

    const actualTheme = useColorScheme()

    //la seleccion ternaria funciona para ios
    const [theme, dispatch] = useReducer(themeReducer, (actualTheme === 'dark' ? darkTheme : lightTheme))

    //este efecto es para android
    useEffect(() => {
        (actualTheme === 'light') ? setLightTheme() : setDarkTheme()
    }, [actualTheme])

    const setDarkTheme = () => {
        dispatch({type: 'set_dark_theme'})
        console.log('theme dark');
    }

    const setLightTheme = () => {
        dispatch({type: 'set_light_theme'})
        console.log('theme light');
    }

    return (
        <ThemeContext.Provider value={{
            setDarkTheme,
            setLightTheme,
            theme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}