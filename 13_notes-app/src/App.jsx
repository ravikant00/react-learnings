import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [task, setTask] = useState([]);

  const formHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task]
    setTask(copyTask);

    copyTask.push(title, desc)

    setTitle("")
    setDesc("")
  }  

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          formHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(e.target.value);
          }}
        />

        {/* DETAILED VALA INPUT  */}
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none  rounded "
          placeholder="Write Details here"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
            // console.log(e.target.value);
          }}
        />

        <button className="bg-white active:scale-95 font-medium w-full outline-none  text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      <div className="lg:w-1/2 lg:border-l-2  p-10">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map(function () {
            console.log("hello...");
            
          })}
        </div>
      </div>
    </div>
  );
}


export default App
