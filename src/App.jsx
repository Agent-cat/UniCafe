import React from 'react'
import Navbar from './Layout/Navbar.jsx'
import Navroutes from './routes/Navroutes.jsx'
import { useLocation } from 'react-router-dom'

const App = () => {
  const location = useLocation()
  const isBlogPage = location.pathname === '/blog'

  return (
    <div className="min-h-screen bg-gray-50">
      {!isBlogPage && <Navbar />}
      <main className={`${isBlogPage ? '' : 'pt-0 lg:pt-16 pb-16 md:pb-0'}`}>
        <Navroutes />
      </main>
    </div>
  )
}

export default App