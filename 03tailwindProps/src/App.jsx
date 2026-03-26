import { useState } from 'react'

import Card from './components/card'

import './App.css'

function App() {

  // let myobj ={
  //   name : "ravi",
  // };

  return (
    <>
    <h1 className='bg-blue-400 text-black p-4 rounded-2xl mb-4'>Tailwind Css Test</h1> 

    <div className='flex flex-wrap justify-evenly'>

    <Card username="chaiaurcode" btnTxt="Click Me"/>
    <Card username="ravikant" />

    </div>
    
    </>
  )
}

export default App
