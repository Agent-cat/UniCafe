import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar p-4 w-72 bg-white">
      {/* Search Bar */}
      <div className="search-container flex items-center bg-gray-100 rounded-lg p-2 mb-6">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input 
          type="text" 
          placeholder="Search" 
          className="bg-transparent border-none outline-none ml-2 w-full"
        />
      </div>

      {/* Groups Section */}
      <div className="mb-8">
        <h2 className="text-gray-500 text-sm font-medium mb-4">YOUR GROUP</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6">🎨</div>
            <span className="font-medium">Figma Community</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6">💎</div>
            <span className="font-medium">Sketch Community</span>
          </div>
        </div>
      </div>

      {/* Friends Section */}
      <div>
        <h2 className="text-gray-500 text-sm font-medium mb-4">FRIENDS</h2>
        <div className="space-y-4">
          {[
            { name: 'Eleanor Pena', time: '11 min', online: false },
            { name: 'Leslie Alexander', time: '', online: true },
            { name: 'Brooklyn Simmons', time: '', online: true },
            { name: 'Arlene McCoy', time: '11 min', online: false },
            { name: 'Jerome Bell', time: '9 min', online: false },
            { name: 'Darlene Robertson', time: '', online: true },
            { name: 'Kathryn Murphy', time: '', online: true },
            { name: 'Theresa Webb', time: '11 min', online: false },
            { name: 'Darrell Steward', time: '', online: true },
          ].map((friend, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <span className="font-medium">{friend.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {friend.time && <span className="text-sm text-gray-400">{friend.time}</span>}
                {friend.online && <div className="w-2 h-2 bg-teal-400 rounded-full"></div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar