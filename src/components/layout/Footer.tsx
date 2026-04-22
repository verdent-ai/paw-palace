import { Link } from 'react-router-dom'
import { Heart, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Demo', href: '/app' },
      { label: 'Integrations', href: '#' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'API Reference', href: '#' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  }

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-white text-lg">🐾</span>
              </div>
              <span className="text-xl font-semibold text-white">
                Paw<span className="text-amber-400">Palace</span>
              </span>
            </Link>
            <p className="text-sm text-stone-400 mb-6 max-w-xs leading-relaxed">
              The all-in-one platform for modern pet boarding businesses. Manage bookings, pets, and customers with ease.
            </p>
            <div className="flex flex-col gap-2 text-sm text-stone-400">
              <a href="mailto:hello@pawpalace.com" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Mail size={14} /> hello@pawpalace.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                <Phone size={14} /> +1 (555) 123-4567
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Portland, Oregon
              </span>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-stone-400 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="py-6 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {currentYear} PawPalace. All rights reserved.
          </p>
          <p className="text-xs text-stone-500 flex items-center gap-1">
            Made with <Heart size={12} className="text-coral-400 fill-coral-400" /> for pets everywhere
          </p>
        </div>
      </div>
    </footer>
  )
}
