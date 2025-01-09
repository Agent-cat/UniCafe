import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Groups from '../pages/Groups'
const Navroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/groups" element={<Groups />} />
      {/*<Route path="/messages" element={<Messages />} />
      <Route path="/recent" element={<Recent />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/settings" element={<Settings />} /> */}
    </Routes>
    
  )
}

export default Navroutes