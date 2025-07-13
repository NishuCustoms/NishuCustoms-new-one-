import heroBg from '../../public/images/hero-bg.jpg'

export default function Home() {
  return (
    <main>
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Auto Customization</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Transform your vehicle with our expert custom automotive solutions
          </p>
          <button className="bg-accent text-black px-8 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors">
            Explore Services
          </button>
        </div>
      </section>
    </main>
  )
}
