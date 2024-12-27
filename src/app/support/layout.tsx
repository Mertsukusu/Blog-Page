import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Support - Mert Sukusu',
  description: 'Get personalized support and consulting services',
}

export default function SupportLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 