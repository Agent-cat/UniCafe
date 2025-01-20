import React, { useState } from 'react'
import Sidebar from '../components/groups/Sidebar'
import Chat from '../components/groups/chat'
import Details from '../components/groups/Details'

const Groups = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="flex ">
 
      <div className={`fixed inset-y-0 left-0 z-30 w-72 transform transition-transform duration-300 lg:relative lg:transform-none lg:translate-x-0 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar onClose={() => setShowSidebar(false)} />
      </div>

      
      <div className="flex-1  ">
        <div className="flex h-full lg:h-[calc(100vh-4rem)] ">
          <Chat 
            onMenuClick={() => setShowSidebar(true)}
            onDetailsClick={() => setShowDetails(true)}
          />
          
          <div className={`fixed inset-y-0 right-0 z-30 w-80 transform transition-transform duration-300 lg:relative lg:transform-none lg:translate-x-0 ${showDetails ? 'translate-x-0' : 'translate-x-full'}`}>
            <Details onClose={() => setShowDetails(false)} onDetailsClick={() => setShowDetails(true)} />
          </div>

          
        </div>
      </div>
    </div>
  )
}

export default Groups