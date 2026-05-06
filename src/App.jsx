import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* THEME BUTTON */}
            </div>

            <div className="w-full max-w-sm mx-auto">
                {/* CARD */}
            </div>
        </div>
    </div>
  )
}

export default App;