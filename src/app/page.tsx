import Link from 'next/link'
import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'

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
    title: "Software Development",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#4F46E5', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#7C3AED', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g className="animate-[float_4s_ease-in-out_infinite]">
          {/* Monitor */}
          <rect x="10" y="10" width="80" height="50" rx="2" fill="none" stroke="url(#grad1)" strokeWidth="2.5" />
          {/* Screen Content - Code Lines */}
          <g className="animate-[pulse_2s_ease-in-out_infinite]">
            <line x1="20" y1="25" x2="50" y2="25" stroke="url(#grad1)" strokeWidth="2" />
            <line x1="20" y1="35" x2="60" y2="35" stroke="url(#grad1)" strokeWidth="2" />
            <line x1="20" y1="45" x2="40" y2="45" stroke="url(#grad1)" strokeWidth="2" />
          </g>
          {/* Stand */}
          <path d="M40,60 L60,60 L55,70 L45,70 Z" fill="none" stroke="url(#grad1)" strokeWidth="2.5" />
          {/* Vector Nodes */}
          <g className="animate-[pulse_3s_ease-in-out_infinite]">
            <circle cx="75" cy="25" r="5" fill="url(#grad1)" />
            <circle cx="75" cy="45" r="5" fill="url(#grad1)" />
            <path d="M75,25 L75,45" stroke="url(#grad1)" strokeWidth="2" />
            <circle cx="65" cy="35" r="3" fill="url(#grad1)" />
            <path d="M65,35 L75,25 M65,35 L75,45" stroke="url(#grad1)" strokeWidth="2" />
          </g>
        </g>
      </svg>
    ),
    description: "Offering end-to-end software development, including frontend, backend, and deployment."
  },
  {
    title: "Test Automation",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g className="animate-[float_3s_ease-in-out_infinite]">
          <path
            d="M20,50 L40,30 L60,50 L80,30"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-[pulse_2s_ease-in-out_infinite]"
          />
          <path
            d="M20,60 L40,40 L60,60 L80,40"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-[pulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: '0.2s' }}
          />
          <path
            d="M20,70 L40,50 L60,70 L80,50"
            fill="none"
            stroke="url(#grad2)"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-[pulse_2s_ease-in-out_infinite]"
            style={{ animationDelay: '0.4s' }}
          />
        </g>
      </svg>
    ),
    description: "Building and implementing AI-powered test automation frameworks for web and enterprise applications."
  },
  {
    title: "Startup Consultancy",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g className="animate-[float_4s_ease-in-out_infinite]">
          {[...Array(8)].map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy={35 + i * 4}
              r="20"
              fill="none"
              stroke="url(#grad3)"
              strokeWidth="1.5"
              style={{ opacity: 1 - (i * 0.1) }}
              className="animate-[pulse_3s_ease-in-out_infinite]"
            />
          ))}
        </g>
      </svg>
    ),
    description: "Helping startups and businesses choose the right tech stack and architecture."
  },
  {
    title: "Technology Audit",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#EF4444', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g className="animate-[float_4s_ease-in-out_infinite]">
          {/* Light Bulb */}
          <path 
            d="M50,15 C35,15 25,25 25,40 C25,50 35,55 35,65 L65,65 C65,55 75,50 75,40 C75,25 65,15 50,15"
            fill="none" 
            stroke="url(#grad4)" 
            strokeWidth="2.5"
            className="animate-[pulse_3s_ease-in-out_infinite]"
          />
          <path d="M35,65 L65,65 L65,75 L35,75 Z" fill="none" stroke="url(#grad4)" strokeWidth="2.5" />
          {/* Graph Lines */}
          <g className="animate-[pulse_2s_ease-in-out_infinite]">
            <path 
              d="M30,85 L45,60 L60,75 L75,45" 
              fill="none" 
              stroke="url(#grad4)" 
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Data Points */}
            <circle cx="45" cy="60" r="3" fill="url(#grad4)" />
            <circle cx="60" cy="75" r="3" fill="url(#grad4)" />
            <circle cx="75" cy="45" r="3" fill="url(#grad4)" />
          </g>
          {/* Light Rays */}
          <g className="animate-[pulse_2s_ease-in-out_infinite]">
            {[0, 45, 90, 135, 180].map((angle, i) => (
              <line
                key={i}
                x1="50"
                y1="40"
                x2={50 + 15 * Math.cos(angle * Math.PI / 180)}
                y2={40 + 15 * Math.sin(angle * Math.PI / 180)}
                stroke="url(#grad4)"
                strokeWidth="2"
                strokeLinecap="round"
                style={{ opacity: 0.6 }}
              />
            ))}
          </g>
        </g>
      </svg>
    ),
    description: "Updating and optimizing outdated systems for better performance."
  },
  {
    title: "AI Consultancy",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g className="animate-[float_3s_ease-in-out_infinite]">
          <path
            d="M50,20 L80,40 L80,60 L50,80 L20,60 L20,40 Z"
            fill="none"
            stroke="url(#grad5)"
            strokeWidth="2.5"
            className="animate-[pulse_3s_ease-in-out_infinite]"
          />
          <path
            d="M50,30 L70,43 L70,57 L50,70 L30,57 L30,43 Z"
            fill="none"
            stroke="url(#grad5)"
            strokeWidth="2.5"
            className="animate-[pulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: '0.5s' }}
          />
          <circle
            cx="50"
            cy="50"
            r="10"
            fill="none"
            stroke="url(#grad5)"
            strokeWidth="2.5"
            className="animate-[pulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: '1s' }}
          />
        </g>
      </svg>
    ),
    description: "Strategic guidance on implementing AI solutions and choosing the right AI technologies for your business."
  },
  {
    title: "Global Career Coaching",
    icon: (
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#14B8A6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0EA5E9', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g className="animate-[float_4s_ease-in-out_infinite]">
          <circle 
            cx="50" 
            cy="50" 
            r="30" 
            fill="none" 
            stroke="url(#grad6)" 
            strokeWidth="2.5"
            className="animate-[pulse_3s_ease-in-out_infinite]"
          />
          <path
            d="M30,50 A20,20 0 0,1 70,50"
            fill="none"
            stroke="url(#grad6)"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="animate-[pulse_3s_ease-in-out_infinite]"
            style={{ animationDelay: '0.5s' }}
          />
          <circle cx="30" cy="50" r="5" fill="url(#grad6)"/>
          <circle cx="70" cy="50" r="5" fill="url(#grad6)"/>
        </g>
      </svg>
    ),
    description: "Mentoring and guidance for software developers looking to work internationally or remotely."
  }
]

const projects = [
  {
    title: "Key Achievements",
    items: [
      "Developed React & TypeScript frontend for Advanced Meter Infrastructure with 30% performance boost",
      "Implemented Playwright automation reducing test time by 30% for GPT website",
      "Led mainframe modernization initiatives for utility company's core systems",
      "Designed microservices architecture for new utility company website using Python & FastAPI",
      "Led test data management with Delphix, achieving 35% faster data preparation",
      "Optimized PostgreSQL schemas reducing query times by 30%",
      "Managed CI/CD with Jenkins reducing release times by 25%"
    ]
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
    excerpt: 'Development processes with Next.js, React, and TypeScript for modern web applications.',
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
        
        <div className="relative flex flex-col items-center gap-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-navy-100 shadow-xl">
            <Image
              src="/profile.jpg"
              alt="Mert Sukusu"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="text-center">
            <div className="text-2xl text-gray-900 mb-8 font-display">
              Lead Software Engineer
            </div>
          </div>

          <div className="max-w-3xl text-center">
            <p className="text-xl text-navy-600 mb-8 font-serif leading-relaxed">
              Live in Massachusetts, a passionate Lead Software Engineer dedicated to designing more value 
              for your business through full-stack web and app development, test automation, technical consulting, 
              AI-based solution and architecture creation.
            </p>

            <div className="flex flex-col items-center gap-8">
              <Link 
                href="/support" 
                className="bg-navy-900 text-white px-8 py-3 rounded-full hover:bg-navy-800 transition-colors text-lg"
              >
                Let's Talk
              </Link>
              <h2 className="text-4xl font-bold leading-tight">
                <div className="text-navy-900">Design more value</div>
                <div className="text-navy-900 flex items-center gap-2">
                  for your <AnimatedText />
                </div>
              </h2>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="w-full mt-16 overflow-hidden">
            <h2 className="text-2xl font-bold mb-8 text-navy-900 text-center">Experienced Technologies & Tools</h2>
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
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Latest Posts</h2>
          <Link href="/blog" className="text-gray-600 hover:text-black">
            View All →
          </Link>
        </div>

        {/* LinkedIn Featured Posts */}
        <div className="flex justify-center mb-16">
          <a
            href="https://www.linkedin.com/feed/update/urn:li:activity:7252722757811994626/"
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow max-w-2xl w-full"
          >
            <div className="relative h-48 bg-navy-100">
              <Image
                src="/linkedin/national-grid-expo.jpg"
                alt="National Grid IT&D Innovation Expo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-navy-900 group-hover:text-navy-600 transition-colors">
                National Grid IT&D Innovation Expo
              </h3>
              <p className="text-navy-600">
                Proud to have participated in last month's IT&D Innovation Expo at National Grid! Our team presented several innovative solutions including Digital Twin of Meter, Mainframe Virtualization on Cloud, GridGPT, and Testing Platforms - showcasing how we're driving transformation across the organization.
              </p>
              <div className="mt-4 flex items-center text-navy-500 text-sm">
                <span>Read on LinkedIn</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </a>
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
      </section>
    </div>
  )
}
