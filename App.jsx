import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Task1 from './Components/Task1'
import Task2 from './Components/Task2'
import Task3 from './Components/Task3'
import Task4 from './Components/Task4'
import Task5 from './Components/Task5'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Task1 />
      <Task2 />
       <Task3 /> 
       <Task4 />
       <Task5 />

    </>
  )
}

export default App
