import React from 'react'
import { Bookmark } from 'lucide-react'


const App = () => {
  return (
    <div className="parent">
        <div className="card">
        <div className="top">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmpqIluoF13WK8lbYHRs08Ly6PQ6WnWWK2DBaxb9fDlw&s" alt="" />
          <button>Save <Bookmark size={14}/> </button>
        </div>

        <div className="center">
          <h3>Amazon <span>5days working</span> </h3>
          <h2>Senior UI/UX Developer</h2>
          <div className='tag'>
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>120$/hr</h3>
            <p>Mumbai,India</p>
          </div>
          <button>Apply</button>
        </div>
      </div>
    </div>
  )
}

export default App