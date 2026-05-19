import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; // HS Creating a provider for the theme context

// HS Custom hook to use the theme context
export default function useTheme() {
    return useContext(ThemeContext);
}