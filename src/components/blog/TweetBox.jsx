import  { useState } from 'react'

const TweetBox = () => {
  const [content, setContent] = useState('')
  const [image, setImage] = useState(null)
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false)
  const [charCount, setCharCount] = useState(0)
  const MAX_CHARS = 300

  const handleContentChange = (e) => {
    const text = e.target.value
    if (text.length <= MAX_CHARS) {
      setContent(text)
      setCharCount(text.length)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (content.trim() || image) {
      console.log({ content, image })
      setContent('')
      setImage(null)
      setCharCount(0)
    }
  }

  return (
    <div className="px-4 py-3 border-b border-gray-200 bg-white">
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-semibold">ME</span>
          </div>
          <div className="flex-1">
            <textarea
              value={content}
              onChange={handleContentChange}
              placeholder="What's happening?"
              className="w-full border-none focus:ring-0 text-lg placeholder-gray-400 resize-none h-24"
            />
            {image && (
              <div className="relative mt-2">
                <img src={URL.createObjectURL(image)} alt="Tweet" className="rounded-2xl max-h-80 object-contain" />
                <button
                  type="button"
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 p-1 bg-black bg-opacity-75 rounded-full text-white hover:bg-opacity-90"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <label className="cursor-pointer text-blue-500 hover:text-blue-600 p-2 rounded-full hover:bg-blue-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="file"
                    className="hidden"
                    onChange={(e) => setImage(e.target.files[0])}
                    accept="image/*"
                  />
                </label>
                <button
                  type="button"
                  onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
                  className="p-2 text-blue-500 hover:text-blue-600 rounded-full hover:bg-blue-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <div className={`text-sm ${charCount > MAX_CHARS * 0.8 ? 'text-red-500' : 'text-gray-500'}`}>
                  {charCount}/{MAX_CHARS}
                </div>
                <button
                  type="submit"
                  disabled={!content.trim() && !image}
                  className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Tweet
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TweetBox 