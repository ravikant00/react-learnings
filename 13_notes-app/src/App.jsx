import React, {useState} from 'react'

const App = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const [task, setTask] = useState([]);

  const formHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task]

    copyTask.push({ title, desc });
    setTask(copyTask);

    setTitle("")
    setDesc("")
  }  

  const deleteNote = ()=>{

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
          {task.map(function (elem, idx) {
            
            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-7 pb-2 px-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmgvqd2-mLzhxM_LJlAs9KF8aydUCrh8PhabN9JVk2Q&s=10')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
                <p className='mt-1 leading-tight text-xs font-semibold text-gray-600'>{elem.desc}</p>
              </div>
              
            </div>
          })}
        </div>
      </div>
    </div>
  );
}


export default App
