import React from 'react'
import { useState } from "react"

const App = () => {

  const [user, setuser] = useState({name:"ravi", age: 23})

  const btnClick = ()=>{
    // setuser({name:"aman", age: 19}) // not right way

    const newUser = {...user}
    newUser.name ="aman"
    newUser.age = 19
    setuser(newUser)
  }

  return (
    <div>
      <h1>{user.name}, {user.age} </h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App