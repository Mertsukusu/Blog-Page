'use client'

import Image from 'next/image'

const linkedinPosts = [
  {
    id: 1,
    title: "National Grid IT&D Innovation Expo",
    description: "Proud to have participated in last month's IT&D Innovation Expo at National Grid! Our team presented several innovative solutions including Digital Twin of Meter, Mainframe Virtualization on Cloud, GridGPT, and Testing Platforms - showcasing how we're driving transformation across the organization.",
    image: "/linkedin/national-grid-expo.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7252722757811994626/"
  }
]

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16 space-y-16">
      {/* About Section */}
      <section>
        <h1 className="text-4xl font-bold mb-8 text-navy-900">About Me</h1>
        <div className="prose prose-lg max-w-none text-navy-700">
          <p className="mb-6">
            Lead Software Engineer & Domain Architect with extensive experience in test automation, 
            test data management, and enterprise software development. Currently based in Massachusetts, USA, 
            working at National Grid where I lead digital transformation initiatives and implement 
            innovative testing solutions.
          </p>
          <p className="mb-6">
            My expertise spans across multiple domains including AI-powered test automation, synthetic data generation, 
            and modern web development. I'm passionate about leveraging cutting-edge technologies to solve complex 
            business problems and improve software quality.
          </p>
          <p className="mb-6">
            At National Grid, I've successfully led various projects including the development of an Advanced Meter 
            Infrastructure front-end self-service portal, mainframe modernization initiatives, and implementation 
            of AI-powered test automation frameworks. I specialize in creating efficient test data strategies and 
            management solutions for complex testing environments.
          </p>
          <p>
            I'm also dedicated to sharing knowledge and mentoring others in the tech community. Through career coaching 
            and technical consulting, I help developers advance their careers and organizations improve their 
            testing practices.
          </p>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-navy-900">Featured Posts</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {linkedinPosts.map(post => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-navy-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-navy-900 group-hover:text-navy-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-navy-600">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center text-navy-500 text-sm">
                  <span>Read on LinkedIn</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Career Journey Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-navy-900">Career Journey</h2>
        <div className="bg-navy-50 rounded-xl p-8">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-navy-900">National Grid</h3>
              <p className="text-navy-600 mt-2">
                Leading digital transformation initiatives and implementing innovative testing solutions.
                Key achievements include developing an Advanced Meter Infrastructure portal and
                modernizing legacy systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy-900">Technical Expertise</h3>
              <ul className="mt-4 space-y-2 text-navy-600">
                <li>• AI-Powered Test Automation</li>
                <li>• Test Data Management & Synthetic Data Generation</li>
                <li>• Enterprise Software Development</li>
                <li>• Modern Web Development (Next.js, React, TypeScript)</li>
                <li>• Cloud Solutions (Azure)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 