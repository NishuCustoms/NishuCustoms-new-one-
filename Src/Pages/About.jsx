import ContactForm from '../components/ContactForm'

export default function About() {
  return (
    <main className="py-16">
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Nishu Customs</h2>
          <p className="text-lg mb-6">
            Founded in 2010, Nishu Customs has been transforming vehicles into works of art with our 
            unique blend of craftsmanship and innovation.
          </p>
          <p className="text-lg">
            Our team of certified technicians brings over 50 years of combined experience in auto customization,
            ensuring your vehicle gets the premium treatment it deserves.
          </p>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
