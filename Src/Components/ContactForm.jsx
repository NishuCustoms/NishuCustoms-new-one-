import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will contact you soon.')
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-accent"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-accent"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Phone</label>
          <input
            type="tel"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-accent"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-accent"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded hover:bg-secondary transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}
