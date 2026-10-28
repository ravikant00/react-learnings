Function calling---

(1).. Right way of calling

<!-- const App = () => {

  const btnClicked = function () {
    console.log("btn clicked")
  }
  return (
    <div>
      <button onClick={btnClicked} >Click Me</button>
    </div>
  )
} -->

(2).. Not a proper way (event triggered before clicking) 

<!-- const App = () => {

  const btnClicked = function () {
    console.log("btn clicked")
  }
  return (
    <div>
      <button onClick={btnClicke()} >Click Me</button>
    </div>
  )
} -->

(3).. By Creating function directly on the elements 

<!-- const App = () => {
  return (
    <div>
      <input
        onChange = {function (elem) {
          console.log(elem.target.value);
        }}
        type="text"
        placeholder="Enter name"
      />
    </div>
  );
} -->

(4).. Created two func one to extract inputs and second to print them

<!-- const App = () => {

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
} -->