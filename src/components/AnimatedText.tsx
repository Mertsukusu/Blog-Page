'use client'

import { useState, useEffect } from 'react'

const words = [
  'software',
  'business',
  'website',
  'application',
  'solution'
]

export default function AnimatedText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length)
        setIsVisible(true)
      }, 500) // Fade out duration
    }, 3000) // Word change interval

    return () => clearInterval(interval)
  }, [])

  return (
    <span 
      className={`
        bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent
        transition-opacity duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      {words[currentIndex]}.
    </span>
  )
} 