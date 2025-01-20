import React from 'react'
import Navbar from './Layout/Navbar.jsx'
import Navroutes from './routes/Navroutes.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main className="pt-0 lg:pt-16 pb-16 md:pb-0">
        <Navroutes/>
      </main>
    </div>
  )
}

export default App