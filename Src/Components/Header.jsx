import { Link } from 'react-router-dom'
import logo from '../../public/images/logo.png'

export default function Header() {
  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Nishu Customs" className="h-12 mr-3" />
            <span className="text-2xl font-bold">Nishu Customs</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <Link to="/services" className="hover:text-accent transition-colors">Services</Link>
            <Link to="/about" className="hover:text-accent transition-colors">About</Link>
          </nav>
          <button className="md:hidden text-2xl">☰</button>
        </div>
      </div>
    </header>
  )
}
