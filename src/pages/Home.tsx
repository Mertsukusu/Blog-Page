import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedText from '../components/AnimatedText'

const technologies = [
  { 
    name: "JavaScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  { 
    name: "Python", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    url: "https://www.python.org/"
  },
  { 
    name: "Java", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    url: "https://www.java.com/"
  },
  { 
    name: "Spring", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    url: "https://spring.io/"
  },
  { 
    name: "Docker", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    url: "https://www.docker.com/"
  },
  { 
    name: "Microsoft Azure", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    url: "https://azure.microsoft.com/"
  },
  { 
    name: "TypeScript", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    url: "https://www.typescriptlang.org/"
  },
  { 
    name: "Playwright", 
    icon: "https://playwright.dev/img/playwright-logo.svg",
    url: "https://playwright.dev/"
  },
  { 
    name: "GenRocket", 
    icon: "https://img.icons8.com/ios-filled/50/000000/rocket.png",
    url: "https://www.genrocket.com/"
  },
  { 
    name: "FastAPI", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
    url: "https://fastapi.tiangolo.com/"
  },
  { 
    name: "Next.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    url: "https://nextjs.org/"
  },
  { 
    name: "Node.js", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    url: "https://nodejs.org/"
  },
  { 
    name: "Django", 
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    url: "https://www.djangoproject.com/"
  }
]

const certifications = [
  "Python Certified Developer",
  "Docker Certified Associate",
  "Azure Solutions Architect",
  "Delphix Certified Professional",
  "GenRocket Certified Engineer"
]

const services = [
  {
    title: "Test Automation",
    description: "Advanced test automation solutions using AI and modern testing frameworks for web and enterprise applications.",
  },
  {
    title: "Test Data Management",
    description: "Efficient test data strategies and management solutions for complex testing environments.",
  },
  {
    title: "Web Development",
    description: "Modern web applications using React and TypeScript with focus on performance and user experience.",
  },
  {
    title: "Career Coaching",
    description: "Mentoring and guidance for software developers looking to advance their careers in tech.",
  },
  {
    title: "Project Support",
    description: "Technical consulting and support for enterprise-level projects and digital transformations.",
  }
]

const projects = [
  {
    title: "National Grid Achievements",
    items: [
      "Built Advanced Meter Infrastructure front-end self-service portal",
      "Led mainframe modernization initiatives",
      "Implemented environment management solutions",
      "Developed AI-powered test automation frameworks"
    ]
  }
]

const personalProjects = [
  {
    title: "Test Automation Framework",
    type: "Open Source Project",
    description: "AI-powered test automation framework for web applications",
    link: "https://github.com/mertsukusu/test-automation"
  },
  {
    title: "Data Management Tool",
    type: "Enterprise Solution",
    description: "Comprehensive test data management solution",
    link: "https://github.com/mertsukusu/data-management"
  }
]

const blogPosts = [
  {
    id: 1,
    title: 'AI and Our Future',
    excerpt: 'A detailed analysis of how artificial intelligence affects our lives and the changes that await us in the future.',
    date: '2023-12-27',
    category: 'Artificial Intelligence'
  },
  {
    id: 2,
    title: 'Modern Web Development Techniques',
    excerpt: 'Development processes with React and TypeScript for modern web applications.',
    date: '2023-12-26',
    category: 'Web Development'
  },
]

export default function Home() {
  return (
    <div className="space-y-24 bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-4 pt-20 pb-16">
        <div className="absolute inset-0 bg-navy-50 rounded-3xl" />
        
        <div className="relative flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              <div className="text-navy-900">Design more value</div>
              <div className="text-navy-900 flex items-center gap-2">
                for your <AnimatedText />
              </div>
            </h2>
            <div className="text-2xl text-navy-700 mb-6">
              Lead Software Engineer & Domain Architect
            </div>
            <p className="text-xl text-navy-600 max-w-2xl mb-6">
              Based in Massachusetts, USA. I'm a passionate software engineer and architect
              dedicated to creating innovative solutions through modern development practices
              and intelligent testing strategies.
            </p>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-navy-800 mb-3">Certifications:</h3>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert, index) => (
                  <span 
                    key={index}
                    className="bg-navy-50 text-navy-700 px-3 py-1 rounded-full text-sm border border-navy-200"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4">
              <Link 
                to="/support" 
                className="bg-navy-900 text-white px-8 py-3 rounded-full hover:bg-navy-800 transition-colors"
              >
                Let's Talk
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 relative">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-navy-100 shadow-xl">
              <img
                src="/profile.jpg"
                alt="Mert Sukusu"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-0 right-0 w-full h-full">
              <img
                src="/bilgisayar-background.jpg"
                alt="Background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-16 overflow-hidden">
          <h2 className="text-2xl font-bold mb-8 text-navy-900 text-center">Technologies & Tools</h2>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-navy-50 via-navy-50 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-navy-50 via-navy-50 to-transparent z-10" />
            <div className="relative z-20">
              <div className="flex">
                <div className="flex gap-12 animate-infinite-scroll whitespace-nowrap">
                  {[...technologies, ...technologies].map((tech, index) => (
                    <a
                      key={index}
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-none w-12 h-12 relative group hover:-translate-y-1 transition-transform duration-300"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        style={{ maxWidth: '100%', height: 'auto' }}
                      />
                      <div className="opacity-0 group-hover:opacity-100 absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-navy-600 whitespace-nowrap transition-opacity bg-white/80 px-2 py-1 rounded">
                        {tech.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-5xl mx-auto px-4 py-16 rounded-2xl relative">
        <div className="absolute inset-0 bg-navy-800 rounded-3xl" />
        <div className="relative flex flex-col md:flex-row gap-12">
          <div className="md:w-2/3">
            <h2 className="text-3xl font-bold mb-12 text-white">Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="space-y-4 p-6 bg-white/10 backdrop-blur-sm rounded-lg hover:shadow-lg transition-shadow border border-white/20">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-white/80">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:w-1/3 relative">
            <img
              src="/bilgisayar-background.jpg"
              alt="Background"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-navy-900">Experience & Projects</h2>
        
        {/* Latest Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-navy-900">Achievements in my latest projects</h3>
          <div className="bg-navy-50 p-8 rounded-lg">
            <ul className="space-y-4">
              {projects[0].items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-navy-600 mr-3">→</span>
                  <span className="text-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-navy-900">Personal Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {personalProjects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white border border-navy-100 rounded-lg hover:shadow-lg transition-all group"
              >
                <div className="text-sm text-navy-500 mb-2">{project.type}</div>
                <h4 className="text-xl font-semibold mb-3 text-navy-900 group-hover:text-navy-600">{project.title}</h4>
                <p className="text-navy-600">{project.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link to="/blog" className="text-gray-600 hover:text-black">
            View All →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="group">
              <div className="mb-4">
                <span className="text-gray-500 text-sm">{post.date}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500 text-sm">{post.category}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                <Link to={`/blog/${post.id}`}>
                  {post.title}
                </Link>
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link 
                to={`/blog/${post.id}`} 
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
      </section>
    </div>
  )
} 