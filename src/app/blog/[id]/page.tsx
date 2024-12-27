import { notFound } from 'next/navigation'
import React from 'react'

type BlogPost = {
  id: number
  title: string
  content: React.ReactNode
  date: string
  author: string
}

type BlogPosts = {
  [key: string]: BlogPost
}

const blogPosts: BlogPosts = {
  '1': {
    id: 1,
    title: 'AI and Our Future',
    content: (
      <>
        <h1 className="text-4xl font-bold mb-8">AI and Our Future</h1>
        
        <p className="mb-6">
          Artificial Intelligence technology has made tremendous progress in recent years. In this article,
          I will provide a detailed analysis of how AI affects our lives and the changes that await us in the future.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">AI Today</h2>
        <p className="mb-4">AI is now present in every aspect of our lives:</p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Smart Assistants</li>
          <li className="mb-2">Autonomous Vehicles</li>
          <li className="mb-2">Medical Diagnosis Systems</li>
          <li className="mb-2">Personalized Recommendations</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Looking to the Future</h2>
        <p className="mb-4">As AI technology continues to develop in the coming years:</p>
        <ol className="list-decimal pl-6 mb-6">
          <li className="mb-2">The business world will undergo a major transformation</li>
          <li className="mb-2">Education systems will become personalized</li>
          <li className="mb-2">Healthcare services will become more accessible</li>
        </ol>

        <h3 className="text-xl font-bold mt-8 mb-4">Conclusion</h3>
        <p className="mb-6">
          AI will be an important tool in overcoming the challenges humanity faces. However,
          this technology needs to be used ethically and responsibly.
        </p>
      </>
    ),
    date: '2023-12-27',
    author: 'Mert Sukusu'
  },
  '2': {
    id: 2,
    title: 'Modern Web Development Techniques',
    content: (
      <>
        <h1 className="text-4xl font-bold mb-8">Modern Web Development Techniques</h1>
        
        <p className="mb-6">
          The world of web development is constantly evolving. Let's explore how modern technologies
          like Next.js, React, and TypeScript are changing and improving our development processes.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Advantages of Next.js</h2>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Server-Side Rendering (SSR)</li>
          <li className="mb-2">Static Site Generation (SSG)</li>
          <li className="mb-2">Automatic Code Splitting</li>
          <li className="mb-2">API Routes</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8 mb-4">Safe Code with TypeScript</h2>
        <p className="mb-4">
          TypeScript adds type safety to JavaScript, making the development process safer and more efficient:
        </p>
        <ul className="list-disc pl-6 mb-6">
          <li className="mb-2">Compile-time Error Detection</li>
          <li className="mb-2">Better IDE Support</li>
          <li className="mb-2">Code Readability</li>
          <li className="mb-2">Easier Maintenance</li>
        </ul>

        <h3 className="text-xl font-bold mt-8 mb-4">The Future of Modern Web Development</h3>
        <p className="mb-6">
          Modern web technologies are continuously improving our development processes and enhancing user experience.
          Learning and implementing these technologies is no longer a choice but a necessity for a web developer.
        </p>
      </>
    ),
    date: '2023-12-26',
    author: 'Mert Sukusu'
  }
}

async function getBlogPost(id: string) {
  return blogPosts[id] || null
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getBlogPost(params.id)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="text-gray-600">
          {post.date} • {post.author}
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {post.content}
      </div>
    </article>
  )
} 