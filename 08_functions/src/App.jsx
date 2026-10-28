import React from 'react'

const App = () => {

  const showInput= function (val) {
    console.log(val);
  }
  return (
    <div>
      <input
        onChange = {function (elem) {
          showInput(elem.target.value);
        }}
        type="text"
        placeholder="Enter name"
      />
    </div>
  );
}

export default App