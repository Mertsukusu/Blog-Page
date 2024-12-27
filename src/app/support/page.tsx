'use client'

import { useState, FormEvent } from 'react'
import Image from 'next/image'

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export default function Support() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Kullanıcı değişiklik yaptığında hata mesajını temizle
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form validasyonu
    const newErrors: Partial<FormData> = {};
    if (!formData.name.match(/^[a-zA-ZğüşıöçĞÜŞİÖÇ\s]*$/)) {
      newErrors.name = 'Please enter a valid name (only letters and spaces)';
    }
    if (!formData.email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.match(/[0-9+\-\s()]+/)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.country) {
      newErrors.country = 'Please select a country';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // API çağrısı burada yapılacak
        console.log('Form data:', formData);
        alert('Form başarıyla gönderildi!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          country: '',
          message: ''
        });
      } catch (error) {
        console.error('Form gönderimi sırasında hata:', error);
        alert('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen py-16 bg-navy-900">
      <div className="absolute inset-0">
        <Image
          src="/manzara.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white text-center">Get in Touch</h1>
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-white/90 text-navy-900 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                  errors.name ? 'border-red-400' : 'border-white/30'
                }`}
                placeholder="John Doe"
              />
              {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-white/90 text-navy-900 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                  errors.email ? 'border-red-400' : 'border-white/30'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-lg font-medium text-white mb-2">
                Phone Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-white/90 text-navy-900 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                  errors.phone ? 'border-red-400' : 'border-white/30'
                }`}
                placeholder="+1 (555) 000-0000"
              />
              {errors.phone && <p className="mt-2 text-sm text-red-400">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="country" className="block text-lg font-medium text-white mb-2">
                Country <span className="text-red-400">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 bg-white/90 text-navy-900 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                  errors.country ? 'border-red-400' : 'border-white/30'
                }`}
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="TR">Turkey</option>
                <option value="GB">United Kingdom</option>
                <option value="DE">Germany</option>
                <option value="FR">France</option>
                <option value="IT">Italy</option>
                <option value="ES">Spain</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="JP">Japan</option>
              </select>
              {errors.country && <p className="mt-2 text-sm text-red-400">{errors.country}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-medium text-white mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={`w-full px-4 py-3 bg-white/90 text-navy-900 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent ${
                  errors.message ? 'border-red-400' : 'border-white/30'
                }`}
                placeholder="Please describe how I can help you..."
              />
              {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-4 px-6 rounded-lg hover:bg-blue-600 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-lg font-medium"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 