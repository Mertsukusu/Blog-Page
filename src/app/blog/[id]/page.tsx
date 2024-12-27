import Link from 'next/link'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    title: "Mainframe Modernization: A Journey to Cloud",
    date: "March 15, 2024",
    category: "Cloud Computing",
    excerpt: "Exploring the challenges and solutions in modernizing legacy mainframe systems for cloud environments.",
    content: `
      Mainframe modernization is a critical journey that many enterprises are undertaking as they move towards cloud-native architectures. This transformation involves not just lifting and shifting applications, but reimagining them for the cloud era.

      Key Aspects of Mainframe Modernization:

      1. Assessment and Planning
      - Analyzing existing mainframe applications
      - Identifying dependencies and integration points
      - Creating a phased migration strategy

      2. Technical Challenges
      - Data migration and validation
      - Maintaining business logic integrity
      - Ensuring performance parity
      - Managing security and compliance

      3. Cloud Architecture Decisions
      - Choosing between lift-and-shift vs. re-architecting
      - Selecting appropriate cloud services
      - Implementing modern DevOps practices

      4. Benefits Realized
      - Improved scalability and flexibility
      - Reduced operational costs
      - Enhanced development agility
      - Better integration capabilities

      The journey to cloud modernization requires careful planning, expert knowledge, and a clear understanding of business objectives. Success in this transformation can lead to significant competitive advantages and operational improvements.
    `
  },
  {
    id: 2,
    title: "Test Automation with AI: The Future is Here",
    date: "March 10, 2024",
    category: "Testing",
    excerpt: "How artificial intelligence is revolutionizing test automation and improving software quality.",
    content: `
      Artificial Intelligence is transforming the landscape of test automation, bringing unprecedented efficiency and intelligence to software testing processes. This evolution is changing how we approach quality assurance in software development.

      Key Innovations in AI-Powered Testing:

      1. Self-Healing Test Scripts
      - Automatic adaptation to UI changes
      - Smart element location strategies
      - Reduced maintenance overhead

      2. Intelligent Test Generation
      - AI-driven test case creation
      - Automated test scenario identification
      - Risk-based test prioritization

      3. Predictive Analytics
      - Test coverage optimization
      - Defect prediction
      - Performance bottleneck identification

      4. Visual Testing Enhancements
      - Automated visual regression testing
      - Layout anomaly detection
      - Cross-browser compatibility verification

      The integration of AI in test automation not only improves efficiency but also enables teams to focus on more strategic testing activities while ensuring comprehensive coverage and faster release cycles.
    `
  }
]

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}

export default function BlogPost({ params }: { params: { id: string } }) {
  const post = blogPosts.find(post => post.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <Link 
        href="/blog"
        className="text-navy-600 hover:text-navy-800 inline-flex items-center mb-8"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Blog
      </Link>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-navy-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-500">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.category}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            paragraph.trim() && (
              <p key={index} className="mb-4 text-navy-700">
                {paragraph.trim()}
              </p>
            )
          ))}
        </div>
      </article>
    </div>
  )
} 