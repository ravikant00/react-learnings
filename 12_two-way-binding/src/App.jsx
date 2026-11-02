import React, {useState} from "react";

const App = () => {

  const [title, settitle] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Submitted by", title);
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
          settitle("")
        }}
      >
        <input type="text" 
          placeholder="Enter your name" 
          value={title}
          onChange={(e)=>{
            settitle(e.target.value)
            console.log(e.target.value)
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
