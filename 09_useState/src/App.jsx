import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(0)

  function increaseNum() {
    setnum(num+1)
  }

  function decreaseNum() {
    setnum(num - 1);
  }

  function increase5Num() {
   setnum(num + 5);
  }

  return (
    <div>
      <h1>{num} </h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button> <br />
      <button onClick={increase5Num}>Increase by 5</button>
    </div>
  );
}

export default App