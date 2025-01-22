import React from 'react'

const BlogSidebar = () => {
  const trends = [
    { 
      category: 'Technology · Trending',
      title: '#React19',
      tweets: '125K',
      description: 'New features coming to React 19'
    },
    { 
      category: 'Development · Live',
      title: '#TailwindCSS',
      tweets: '95K',
      description: 'Developers discussing the latest Tailwind features'
    },
    { 
      category: 'Tech News · Trending',
      title: '#WebDevTrends2024',
      tweets: '85K',
      description: 'What\'s new in web development'
    },
    { 
      category: 'Programming · Popular',
      title: '#CodeLife',
      tweets: '75K',
      description: 'Developers sharing their coding experiences'
    },
  ]

  const suggestions = [
    { 
      name: 'React Team', 
      username: 'reactjs', 
      image: '⚛️',
      verified: true,
      followers: '2.1M'
    },
    { 
      name: 'Next.js', 
      username: 'nextjs', 
      image: '▲',
      verified: true,
      followers: '850K'
    },
    { 
      name: 'Tailwind Labs', 
      username: 'tailwindcss', 
      image: '🌊',
      verified: true,
      followers: '650K'
    },
  ]

  return (
    <div className="h-full w-[350px] px-4 py-3 overflow-y-auto border-l border-gray-200">
      {/* Search */}
      <div className="sticky top-0 bg-white py-2 z-10">
        <div className="relative">
          <input
            type="text"
            placeholder="Search topics"
            className="w-full bg-gray-100 rounded-full py-2.5 px-4 pl-12 focus:outline-none focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <svg className="w-5 h-5 text-gray-500 absolute left-4 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Trends */}
      <div className="mt-4 bg-gray-50 rounded-xl">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Trends for you</h2>
          <div className="space-y-4">
            {trends.map((trend, index) => (
              <div key={index} className="cursor-pointer hover:bg-gray-100 p-3 rounded-lg transition-colors">
                <p className="text-xs text-gray-500">{trend.category}</p>
                <p className="font-bold text-base mt-0.5">{trend.title}</p>
                <p className="text-sm text-gray-500 mt-0.5">{trend.tweets} tweets</p>
                <p className="text-sm text-gray-600 mt-1">{trend.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-3 text-blue-500 hover:text-blue-600 text-sm font-medium">
            Show more
          </button>
        </div>
      </div>

      {/* Who to follow */}
      <div className="mt-4 bg-gray-50 rounded-xl">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Who to follow</h2>
          <div className="space-y-4">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="flex items-center justify-between group p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-11 h-11 rounded-full bg-gray-200 flex items-center justify-center text-lg">
                    {suggestion.image}
                  </div>
                  <div>
                    <div className="flex items-center">
                      <p className="font-bold group-hover:underline">{suggestion.name}</p>
                      {suggestion.verified && (
                        <svg className="w-4 h-4 ml-1 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                    </div>
                    <p className="text-gray-500 text-sm">@{suggestion.username}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{suggestion.followers} followers</p>
                  </div>
                </div>
                <button className="bg-black text-white rounded-full px-4 py-1.5 text-sm font-bold hover:bg-gray-900 transition-colors">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <button className="mt-3 text-blue-500 hover:text-blue-600 text-sm font-medium">
            Show more
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="mt-4 px-4 text-sm text-gray-500">
        <div className="flex flex-wrap gap-2">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookie Policy</a>
          <a href="#" className="hover:underline">Accessibility</a>
          <a href="#" className="hover:underline">Ads info</a>
          <a href="#" className="hover:underline">More</a>
        </div>
        <p className="mt-2">© 2024 Your Company, Inc.</p>
      </div>
    </div>
  )
}

export default BlogSidebar 