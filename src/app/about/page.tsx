'use client'

import Image from 'next/image'

const achievements = [
  "Developed React & TypeScript frontend for Advanced Meter Infrastructure with 30% performance boost",
  "Implemented Playwright automation reducing test time by 30% for GPT website",
  "Led mainframe modernization initiatives for utility company's core systems",
  "Designed microservices architecture for new utility company website using Python & FastAPI",
  "Led test data management with Delphix, achieving 35% faster data preparation",
  "Optimized PostgreSQL schemas reducing query times by 30%",
  "Managed CI/CD with Jenkins reducing release times by 25%"
]

const certifications = [
  "Python Certified Developer",
  "Docker Certified Associate",
  "Azure Solutions Architect",
  "Delphix Certified Professional",
  "GenRocket Certified Engineer"
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

      {/* Achievements Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-navy-900">Achievements</h2>
        <div className="bg-navy-50 p-8 rounded-lg">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-navy-600 mr-3">→</span>
                <span className="text-navy-700">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-navy-900">Certifications</h2>
        <div className="bg-navy-50 p-8 rounded-lg">
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <span 
                key={index}
                className="bg-white text-navy-700 px-4 py-2 rounded-full text-sm border border-navy-200 hover:border-navy-400 transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 