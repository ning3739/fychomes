import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 border-t border-dark-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="relative h-12 w-40 mb-4">
              <Image
                src="/fcy-homes-logo.png"
                alt="FCY HOMES"
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
            <p className="text-sm text-gray-300 mb-6 leading-relaxed font-semibold">
              Professional residential construction, design & build, and subdivision services in New Zealand.
            </p>
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
              <li className="flex items-center gap-3 text-sm">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <a href="tel:021490668" className="text-gray-300 hover:text-primary transition-colors">
                  021 490 668
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <a href="mailto:fcyhomes@gmail.com" className="text-gray-300 hover:text-primary transition-colors">
                  fcyhomes@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} FCY HOMES Limited. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Developed by</span>
              <a 
                href="https://bittech.co.nz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary-light transition-colors font-bold"
              >
                BitTech
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
