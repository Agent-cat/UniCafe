import React from 'react'
import TweetBox from '../components/blog/TweetBox'
import Tweet from '../components/blog/Tweet'
import BlogSidebar from '../components/blog/BlogSidebar'

const Blog = () => {
  const tweets = [
    {
      id: 1,
      author: 'John Doe',
      username: 'johndoe',
      verified: true,
      time: '2h',
      content: 'Just launched my new React project! Check it out! 🚀 #webdev #reactjs\n\nBuilt with:\n• React 18\n• TailwindCSS\n• TypeScript\n• Next.js',
      image: 'https://picsum.photos/500/300',
      comments: 15,
      retweets: 32,
      likes: 128,
    },
    {
      id: 2,
      author: 'Jane Smith',
      username: 'janesmith',
      verified: true,
      time: '4h',
      content: 'Loving the new Tailwind CSS v3.0 features! The JIT compiler is amazing. 🎨 #tailwindcss #css\n\nHere\'s what\'s new:\n1. Just-in-Time Mode by default\n2. Colored box shadows\n3. Scroll snap API\n4. Multi-column layout',
      comments: 8,
      retweets: 25,
      likes: 145,
    },
    {
      id: 3,
      author: 'Tech News',
      username: 'technews',
      verified: true,
      time: '6h',
      content: 'Breaking: Major updates coming to JavaScript in 2024! Thread 🧵⬇️\n\nNew features include:\n• Pattern Matching\n• Decorators\n• Array Grouping\n• Type Annotations',
      comments: 45,
      retweets: 212,
      likes: 548,
    },
    {
      id: 4,
      author: 'Web Dev Tips',
      username: 'webdevtips',
      time: '8h',
      content: '🔥 5 VS Code extensions every web developer needs:\n\n1. ESLint\n2. Prettier\n3. GitLens\n4. Live Server\n5. Auto Rename Tag\n\nWhich ones do you use? 🤔 #coding #webdev',
      comments: 32,
      retweets: 156,
      likes: 423,
    },
    // Add more tweets as needed...
  ]

  return (
    <div className="flex h-screen bg-white">
      {/* Main Content - Center Column */}
      <div className="flex-1 max-w-2xl mx-auto border-x border-gray-200 h-full flex flex-col">
        <div className="sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur">
          <div className="px-4 py-3 border-b border-gray-200">
            <h1 className="text-xl font-bold">Home</h1>
          </div>
        </div>

        <TweetBox />

        {/* Scrollable Tweets Section */}
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-gray-200">
            {tweets.map(tweet => (
              <Tweet key={tweet.id} tweet={tweet} />
            ))}
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block w-[350px] h-screen sticky top-0">
        <BlogSidebar />
      </div>
    </div>
  )
}

export default Blog 