'use client'

import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "Mainframe Modernization: A Journey to Cloud",
    date: "March 15, 2024",
    category: "Cloud Computing",
    excerpt: "Exploring the challenges and solutions in modernizing legacy mainframe systems for cloud environments."
  },
  {
    id: 2,
    title: "Test Automation with AI: The Future is Here",
    date: "March 10, 2024",
    category: "Testing",
    excerpt: "How artificial intelligence is revolutionizing test automation and improving software quality."
  }
]

export default function Blog() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12 text-navy-900">Blog Posts</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map(post => (
          <article key={post.id} className="group">
            <div className="mb-4">
              <span className="text-gray-500 text-sm">{post.date}</span>
              <span className="mx-2 text-gray-300">•</span>
              <span className="text-gray-500 text-sm">{post.category}</span>
            </div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
              <Link href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <Link 
              href={`/blog/${post.id}`} 
              className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
            >
              Read More
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
} 