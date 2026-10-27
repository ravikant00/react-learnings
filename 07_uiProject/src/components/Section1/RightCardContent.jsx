import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
      <h4 className="h-10 w-10 rounded-full bg-amber-50 text-xl font-semibold flex items-center justify-center">
        {props.id + 1}
      </h4>
      <div>
        <p className="text-white text-shadow-2xs leading-relaxed mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          voluptate dignissimos adipisci quis consectetur facilis Lorem ipsum
          dolor sit amet.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className="text-white px-4 py-1 rounded-3xl"
          >
            {props.tag}
          </button>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white px-3 py-1 rounded-3xl"
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightCardContent