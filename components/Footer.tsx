import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 border-t border-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="relative h-12 w-40 mb-4">
              <Image
                src="/fcy-homes-logo.jpg"
                alt="FCY HOMES"
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Professional residential construction, design & build, and subdivision services in New Zealand.
            </p>
            
            {/* Master Builders Logo */}
            <div className="mb-6">
              <div className="relative h-16 w-32">
                <Image
                  src="/logo-master-builders.png"
                  alt="Master Builders"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-dark-light hover:bg-primary text-gray-400 hover:text-white rounded-sm flex items-center justify-center transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-dark-light hover:bg-primary text-gray-400 hover:text-white rounded-sm flex items-center justify-center transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-9 h-9 bg-dark-light hover:bg-primary text-gray-400 hover:text-white rounded-sm flex items-center justify-center transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Design & Build
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  House Construction
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Subdivision
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-300">
                <MapPin className="text-primary flex-shrink-0 mt-0.5" size={18} />
                <span>52 Omahu Road, Greenlane<br />Auckland, 1051, New Zealand</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <span>021 490 668</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-300">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <span>fcyhomes@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-light pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} FCY HOMES Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
