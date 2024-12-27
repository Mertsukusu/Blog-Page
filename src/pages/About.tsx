import { Link } from 'react-router-dom'

const linkedinPosts = [
  {
    id: 1,
    title: "National Grid IT&D Innovation Expo",
    description: "Excited to share that I participated in the National Grid IT&D Innovation Expo, where I had the opportunity to showcase our innovative solutions in test automation and data management. It was inspiring to connect with fellow innovators and discuss the future of technology in the energy sector.",
    image: "/linkedin/national-grid-expo.jpg",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7252722757811994626/"
  }
]

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Node.js", "Spring Boot", "FastAPI", "Django"]
  },
  {
    category: "Testing & Automation",
    items: ["Playwright", "Selenium", "JUnit", "PyTest", "TestNG"]
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "AWS", "Docker", "Kubernetes", "Jenkins"]
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "Oracle", "Redis"]
  }
]

const experience = [
  {
    title: "Lead Software Engineer & Domain Architect",
    company: "National Grid",
    period: "2020 - Present",
    description: "Leading digital transformation initiatives and architecting enterprise-scale solutions. Specializing in test automation, data management, and cloud-native applications.",
    achievements: [
      "Developed AI-powered test automation framework",
      "Led mainframe modernization projects",
      "Implemented enterprise data management solutions",
      "Mentored junior developers and established best practices"
    ]
  },
  {
    title: "Senior Software Engineer",
    company: "Previous Company",
    period: "2017 - 2020",
    description: "Focused on building scalable web applications and implementing automated testing solutions.",
    achievements: [
      "Reduced testing time by 60% through automation",
      "Improved application performance by 40%",
      "Led team of 5 developers",
      "Implemented CI/CD pipelines"
    ]
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-navy-50">
      {/* Hero Section */}
      <section className="bg-navy-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            Based in Massachusetts, USA. I'm a passionate software engineer and architect
            dedicated to creating innovative solutions through modern development practices
            and intelligent testing strategies. With extensive experience in enterprise
            software development, I specialize in building scalable applications and
            implementing efficient testing frameworks.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-navy-900">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-navy-800">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-navy-600 flex items-center"
                    >
                      <span className="mr-2">•</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-navy-900">Professional Experience</h2>
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div 
                key={index}
                className="border-l-4 border-navy-500 pl-6 space-y-4"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-900">{job.title}</h3>
                    <p className="text-lg text-navy-700">{job.company}</p>
                  </div>
                  <span className="text-navy-600">{job.period}</span>
                </div>
                <p className="text-navy-600">{job.description}</p>
                <ul className="space-y-2">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li 
                      key={achievementIndex}
                      className="flex items-start text-navy-700"
                    >
                      <span className="text-navy-500 mr-2">→</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Posts Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-navy-900">Featured Posts</h2>
          <div className="grid gap-8">
            {linkedinPosts.map(post => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h3 className="text-2xl font-semibold mb-4 text-navy-900">
                      {post.title}
                    </h3>
                    <p className="text-navy-600">{post.description}</p>
                    <div className="mt-4 text-navy-500 font-medium">
                      Read more on LinkedIn →
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or have a project in mind? I'd love to hear from you
            and discuss how we can work together.
          </p>
          <Link
            to="/support"
            className="inline-block bg-white text-navy-900 px-8 py-3 rounded-full font-medium hover:bg-navy-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
} 