import React from 'react'

const Details = ({ onClose }) => {
  return (
    <div className="w-80 h-full border-l bg-white shadow-sm">
      <div className="p-4 border-b flex items-center justify-between lg:p-6">
        <h3 className="text-lg font-semibold text-gray-900">Group Details</h3>
        {/* Mobile Close Button */}
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="p-4 lg:p-6">
        <div className="space-y-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-sm font-medium text-gray-600 mb-2">Description</h4>
            <p className="text-sm text-gray-700 leading-relaxed">A community for Figma enthusiasts to share designs, get feedback, and discuss best practices.</p>
          </div>

          {/* Members */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-gray-600">Members</h4>
              <span className="text-xs text-gray-400">3 members</span>
            </div>
            <div className="space-y-3">
              {['Eleanor Pena', 'Leslie Alexander', 'Brooklyn Simmons'].map((member, index) => (
                <div key={index} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                  <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-medium">
                    {member.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-700">{member}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Group Settings */}
          <div>
            <h4 className="text-sm font-medium text-gray-600 mb-3">Settings</h4>
            <div className="space-y-2">
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Notifications
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Media & Files
              </button>
              <button className="w-full text-left px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Leave Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details