import React from 'react'
import Navbar from './components/Navbar.jsx'
import Navroutes from './routes/Navroutes.jsx'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      <main className="">
      <Navroutes/>
      </main>
    </div>
  )
}

export default App