import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={ <Index /> } />
      <Route path='*' element={ <NotFound /> } />
    </Routes>
  )
}

export default App
