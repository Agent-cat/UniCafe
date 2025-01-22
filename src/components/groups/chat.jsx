import React from 'react'

const Chat = ({ onMenuClick, onDetailsClick }) => {
  return (
    <div className="flex-1 h-[92vh]  flex flex-col bg-white">
      {/* Chat Header */}
      <div className="px-4 py-4 border-b flex items-center justify-between lg:px-6">
        {/* Mobile Menu Button */}
        <button 
          onClick={onMenuClick}
          className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
            🎨
          </div>
          <div>
            <h2 className="font-semibold">Figma Community</h2>
            <p className="text-sm text-gray-500">32 members</p>
          </div>
        </div>

        {/* Mobile Details Button */}
        <button 
          onClick={onDetailsClick}
          className="p-2 hover:bg-gray-100 rounded-lg "
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto  p-4 space-y-6 lg:p-6">
        {/* Message bubbles would go here */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex-shrink-0 flex items-center justify-center">
            E
          </div>
          <div className="bg-gray-100 rounded-lg p-3 max-w-[85%] lg:max-w-[70%]">
            <p className="text-sm font-medium mb-1">Eleanor Pena</p>
            <p className="text-gray-600">Hey everyone! Check out this new design I've been working on.</p>
          </div>
        </div>

        <div className="flex items-start gap-3 justify-end">
          <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[85%] lg:max-w-[70%]">
            <p className="text-sm">That looks amazing! Love the color scheme.</p>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="p-4 border-t lg:p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded-lg border border-gray-200 px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition-colors whitespace-nowrap">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default Chat