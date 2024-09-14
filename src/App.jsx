import { useState } from 'react'
import HomePage from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage />
      <HomePage />
    </>
  )
}

export default App
