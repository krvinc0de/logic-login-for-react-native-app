
export const lightTheme = {
    dark: false,
    currentTheme: 'light',
    colors: {
        primary: "#fff",
        primaryVariant: "#3700B3",
        secondary: "#03DAC6",
        background: "#fff",
        surface: "#121212",
        onPrimary: "#FFFFFF",
        error: "#CF6679",
        card: "#1E212D",
        text: "#fff",
        border: "#212630",
        notification: "#EF233C",
    }
}

export const darkTheme = {
    dark: true,
    currentTheme: 'dark',
    colors: {
        primary: "#BB86FC",
        primaryVariant: "#3700B3",
        secondary: "#03DAC6",
        background: "#000",
        surface: "#121212",
        onPrimary: "#FFFFFF",
        error: "#CF6679",
        card: "#121212",
        text: "#E6E9EC",
        border: "#212630",
        notification: "#EF233C",
    }
}


export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'set_light_theme':
            return {...lightTheme}
        case 'set_dark_theme':
            return {...darkTheme}
        default:
            return state;
    }
}