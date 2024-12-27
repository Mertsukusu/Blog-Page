import { useState, FormEvent } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  country: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  country?: string
  message?: string
}

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "Other"
]

export default function Support() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // İsim kontrolü - sadece harf ve boşluk
    if (!formData.name.trim() || !/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Please enter a valid name (letters only)'
    }

    // Email kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Telefon kontrolü - opsiyonel ama girilmişse geçerli olmalı
    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    // Ülke kontrolü
    if (!formData.country) {
      newErrors.country = 'Please select your country'
    }

    // Mesaj kontrolü
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (validateForm()) {
      try {
        // Burada form gönderme işlemi simüle ediliyor
        await new Promise(resolve => setTimeout(resolve, 1500))
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: ''
        })
      } catch (error) {
        console.error('Form submission error:', error)
      }
    }

    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Kullanıcı yazmaya başladığında hata mesajını temizle
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }))
    }
  }

  return (
    <div className="min-h-screen bg-navy-50 py-12 px-4 sm:px-6 lg:px-8">
      <div 
        className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
        style={{
          backgroundImage: 'url(/manzara.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-navy-900/90 p-8 sm:p-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-white/80">
              Have a question or want to work together? I'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white focus:bg-white/20 focus:ring-0 text-white ${
                  errors.name ? 'border-red-500' : ''
                }`}
                placeholder="John Doe"
                required
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white focus:bg-white/20 focus:ring-0 text-white ${
                  errors.email ? 'border-red-500' : ''
                }`}
                placeholder="john@example.com"
                required
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white focus:bg-white/20 focus:ring-0 text-white ${
                  errors.phone ? 'border-red-500' : ''
                }`}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
              )}
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-white">
                Country *
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white focus:bg-white/20 focus:ring-0 text-white ${
                  errors.country ? 'border-red-500' : ''
                }`}
                required
              >
                <option value="">Select a country</option>
                {countries.map(country => (
                  <option key={country} value={country} className="text-navy-900">
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && (
                <p className="mt-1 text-sm text-red-400">{errors.country}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white focus:bg-white/20 focus:ring-0 text-white ${
                  errors.message ? 'border-red-500' : ''
                }`}
                placeholder="Your message here..."
                required
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-navy-600 hover:bg-navy-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-navy-500 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitSuccess && (
              <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
} 