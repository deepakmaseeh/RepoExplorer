import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='bg-green-500 border p-4 rounded-2xl shadow-green-300 shadow-lg'>RepoExplorer</h1>
    </>
  )
}

export default App
