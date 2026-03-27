import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    
    <div className='w-full h-screen duration-200'
    style={{backgroundColor : color}}
    > 
    <div className='fixed flex flex-col justify-center inset-y-0 right-10 p-2'>
      <div className='flex flex-col justify-evenly gap-3 shadow-lg bg-white px-2 py-2 rounded-2xl'>

        <button 
        onClick={()=> setColor("red")}
        className='outline-none w-5 h-5 rounded-full shadow-lg'
        style={{backgroundColor: "red"}}
        > </button>

        <button
        onClick={()=> setColor("green")}
        className='outline-none w-5 h-5 rounded-full shadow-lg'
        style={{backgroundColor: "green"}}
        > </button>

        <button
        onClick={()=> setColor("yellow")}
        className='outline-none w-5 h-5 rounded-full shadow-lg'
        style={{backgroundColor: "yellow"}}
        > </button>

        <button 
        onClick={()=> setColor("blue")}
        className='outline-none w-5 h-5 rounded-full shadow-lg'
        style={{backgroundColor: "blue"}}
        > </button>

        <button 
        onClick={()=> setColor("#000")}
        className='outline-none w-5 h-5 rounded-full shadow-lg'
        style={{backgroundColor: "#000"}}
        > </button>

        <button 
        onClick={()=> setColor("purple")}
        className='outline-none w-5 h-5 rounded-full shadow-lg'
        style={{backgroundColor: "purple"}}
        > </button>

      </div>
    </div>
    </div>
  )
}

export default App
