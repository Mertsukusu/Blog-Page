import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-navy-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-navy-900 hover:text-navy-700 transition-colors">
            Mert Sukusu
          </Link>
          <div className="flex space-x-8">
            <Link href="/" className="text-navy-600 hover:text-navy-900 transition-colors">
              Home
            </Link>
            <Link href="/support" className="text-navy-600 hover:text-navy-900 transition-colors">
              Support
            </Link>
            <Link href="/about" className="text-navy-600 hover:text-navy-900 transition-colors">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 