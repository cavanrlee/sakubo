import { useState } from 'react'
import viteLogo from '/saKubo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen flex items-center justify-center bg-black">
      <h1 className="text-4xl text-white font-bold"></h1>
        <img src={viteLogo} alt="saKubo" />
    </div>
  )
}

export default App
