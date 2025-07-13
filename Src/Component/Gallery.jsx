import { useState } from 'react'

const galleryItems = [
  { id: 1, title: 'Custom Paint Job', img: '/images/gallery1.jpg' },
  { id: 2, title: 'Interior Upgrade', img: '/images/gallery2.jpg' },
  { id: 3, title: 'Performance Mod', img: '/images/gallery3.jpg' }
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={item.id}
              className={`relative overflow-hidden rounded-lg shadow-md transition-all duration-300 cursor-pointer ${activeIndex === index ? 'ring-4 ring-accent' : 'hover:shadow-xl'}`}
              onClick={() => setActiveIndex(index)}
            >
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <h3 className="text-white font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
