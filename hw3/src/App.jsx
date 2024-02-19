import { useState } from 'react'

import './App.css'
import Register from './FuncComps/Register'
import { Login } from '@mui/icons-material'
import LogIn from './FuncComps/LogIn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Register/>
     <LogIn/>

     
     
    </>
  )
}

export default App
