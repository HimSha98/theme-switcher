import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme';
import Card from './components/Card';
import ThemeBtn from './components/ThemeBtn';
import { useEffect } from 'react';

function App() {
    const [themeMode, setThemeMode] = useState('light');

    const lightTheme = () => {
        setThemeMode('light');
    }

    const darkTheme = () => {
        setThemeMode('dark');
    }

    // HS ACTUAL CHANGE IN THEME
    useEffect(() => {
        const doc = document.querySelector('html');

        doc.classList.remove(themeMode === 'light' ? 'dark' : 'light');
        doc.classList.add(themeMode);

    }, [themeMode]);

    return (
        <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                        <Card />
                    </div>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default App;