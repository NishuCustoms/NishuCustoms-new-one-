import Gallery from '../components/Gallery'

const services = [
  {
    title: "Custom Paint Jobs",
    description: "High-quality custom paint work with premium materials",
    icon: "🎨"
  },
  {
    title: "Performance Upgrades",
    description: "Engine tuning and performance enhancements",
    icon: "⚡"
  },
  {
    title: "Interior Customization",
    description: "Luxury interiors tailored to your style",
    icon: "🛋️"
  }
]

export default function Services() {
  return (
    <main className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
      <Gallery />
    </main>
  )
}
