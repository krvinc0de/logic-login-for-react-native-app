import { ThemeProvider } from "./src/context/theme/ThemeContext";
import { NavigationContainerRoot } from "./src/router/NavigationContainer";

export default function App() {

  return (
    // <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
    <AppState>
      <NavigationContainerRoot />
    </AppState>
  );
}


const AppState = ({children}) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}
