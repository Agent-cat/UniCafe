import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar h-[calc(100vh-5rem)] w-72 bg-white shadow-sm border-r fixed overflow-hidden">
      <div className="h-full flex flex-col overflow-y-auto">
        <div className="p-4">
          {/* Search Bar - improved hover and focus states */}
          <div className="search-container flex items-center bg-gray-50 rounded-lg p-2 mb-6 hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent border-none outline-none ml-2 w-full placeholder:text-gray-400 focus:ring-0"
            />
          </div>

          {/* Groups Section - improved interactive states */}
          <div className="mb-8">
            <h2 className="text-gray-500 text-xs font-semibold mb-4 tracking-wider">YOUR GROUPS</h2>
            <div className="space-y-1">
              {[
                { icon: '🎨', name: 'Figma Community' },
                { icon: '💎', name: 'Sketch Community' }
              ].map((group, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-lg">{group.icon}</div>
                  <span className="font-medium text-gray-700">{group.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Friends Section - improved layout and interactions */}
          <div>
            <h2 className="text-gray-500 text-xs font-semibold mb-4 tracking-wider">FRIENDS</h2>
            <div className="space-y-1">
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
                <div key={index} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-medium">
                      {friend.name.charAt(0)}
                    </div>
                    <span className="font-medium text-gray-700">{friend.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {friend.time && <span className="text-xs text-gray-400">{friend.time}</span>}
                    {friend.online && <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar