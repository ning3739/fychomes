'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Top Banner - Dark Professional */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 sm:h-12">
            <a href="tel:021490668" className="flex items-center gap-1.5 sm:gap-2 hover:text-primary transition-colors text-xs sm:text-sm font-medium">
              <Phone size={14} className="sm:w-4 sm:h-4" />
              <span>021 490 668</span>
            </a>
            <a href="mailto:fcyhomes@gmail.com" className="flex items-center gap-1.5 sm:gap-2 hover:text-primary transition-colors text-xs sm:text-sm font-medium">
              <Mail size={14} className="sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">fcyhomes@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar - Clean White */}
      <nav className="fixed top-10 sm:top-12 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-48 transition-transform group-hover:scale-105">
              <Image
                src="/fcy-homes-logo.png"
                alt="FCY HOMES"
                fill
                className="object-contain object-left"
                priority
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold transition-colors relative group ${
                  isActive(item.href)
                    ? 'text-dark'
                    : 'text-gray-600 hover:text-dark'
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all ${
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} 
                />
              </Link>
            ))}
          </div>

          {/* Get Quote Button */}
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-dark text-white rounded-sm font-semibold hover:bg-dark-light transition-all shadow-md hover:shadow-lg group"
          >
            Get Quote
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-sm transition-colors ${
                  isActive(item.href)
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-foreground hover:text-primary hover:bg-muted'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 bg-dark text-white text-center rounded-sm font-semibold hover:bg-dark-light transition-colors shadow-md"
            >
              Get Quote
            </Link>
          </div>
        </div>
      )}
      </nav>
    </>
  );
}
