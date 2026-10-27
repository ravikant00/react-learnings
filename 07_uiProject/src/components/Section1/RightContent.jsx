import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className="h-full w-2/3 p-6 flex rounded-4xl overflow-x-auto flex-nowrap gap-10 ">
      {
        props.users.map(function (elem, idx) {
          return <RightCard key={idx} img={elem.img} id={idx} tag={elem.tag} color={elem.color} />
          
        })
      }
    </div>
  )
}

export default RightContent