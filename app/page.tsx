'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle, Home, PenTool, Layers } from 'lucide-react';
import { motion } from 'motion/react';

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    name: 'FCY HOMES Limited',
    image: 'https://fcyhomes.co.nz/fcy-homes-logo.jpg',
    '@id': 'https://fcyhomes.co.nz',
    url: 'https://fcyhomes.co.nz',
    telephone: '021490668',
    email: 'fcyhomes@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '52 Omahu Road, Greenlane',
      addressLocality: 'Auckland',
      postalCode: '1051',
      addressCountry: 'NZ',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -36.8915,
      longitude: 174.7982,
    },
    areaServed: {
      '@type': 'City',
      name: 'Auckland',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    sameAs: [
      'https://www.facebook.com/fcyhomes',
      'https://www.instagram.com/fcyhomes',
    ],
    description: 'Professional residential construction, design & build, and subdivision services in Auckland, New Zealand.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '150',
    },
  };

  return (
    <div className="flex flex-col pt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1766603636700-e9d80473f40f?w=1920&q=80" 
            alt="Modern Home" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-5 leading-tight text-white">
              Building Your Dream Home
            </h1>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 w-12 bg-primary"></div>
              <p className="text-lg md:text-xl text-primary font-semibold">
                Quality, Trust, Efficiency
              </p>
            </div>
            <p className="text-base md:text-lg mb-8 text-gray-100 leading-relaxed">
              We specialize in residential construction, design, build, and subdivision projects. 
              Delivering quality and reliability with professional excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-7 py-3.5 rounded-sm font-semibold transition-colors"
              >
                View Our Projects
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-dark px-7 py-3.5 rounded-sm font-semibold transition-colors"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1674558064172-7b6119ebbc41?w=1080&q=80" 
                alt="Construction Team" 
                className="rounded-sm w-full h-[380px] object-cover"
              />
            </div>
            <div>
              <p className="text-primary font-semibold uppercase tracking-wide mb-2 text-xs">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Experience You Can Build On</h2>
              <p className="text-gray-700 mb-5 leading-relaxed">
                With years of experience in residential construction, our team ensures high-quality workmanship and professional service. 
                We deliver trust and credibility for every project with attention to detail and excellence.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2.5 text-dark">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Professional Excellence, Quality</span>
                </li>
                <li className="flex items-start gap-2.5 text-dark">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>High-Quality Workmanship</span>
                </li>
                <li className="flex items-start gap-2.5 text-dark">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <span>Comprehensive Project Management</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-dark font-semibold hover:text-primary transition-colors"
              >
                Learn More About Us 
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-primary font-semibold uppercase tracking-wide mb-2 text-xs">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Comprehensive Construction Solutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: <PenTool size={28} />, 
                title: 'Design, Build', 
                desc: 'Full design and construction services from concept to completion.' 
              },
              { 
                icon: <Home size={28} />, 
                title: 'Residential Construction', 
                desc: 'Building new homes with quality and efficiency tailored to you.' 
              },
              { 
                icon: <Layers size={28} />, 
                title: 'Subdivision', 
                desc: 'Expert planning and construction for land subdivision projects.' 
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href="/services"
                className="block bg-white p-6 rounded-sm border border-gray-200 hover:border-primary transition-colors group"
              >
                <div className="w-14 h-14 bg-gray-100 text-dark rounded-sm flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h4 className="text-primary font-bold uppercase tracking-wider mb-2 text-sm">Our Portfolio</h4>
              <h2 className="text-3xl md:text-4xl font-bold text-dark">Featured Projects</h2>
            </div>
            <Link
              href="/projects"
              className="hidden md:flex items-center gap-2 text-dark font-bold hover:text-primary transition-colors group"
            >
              View All Projects 
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Stand Alone House',
                type: 'New Build',
                slug: 'stand_alone_house',
                image: '/stand_alone_house/1.jpg'
              },
              {
                title: 'Terrace House',
                type: 'Residential',
                slug: 'terrace_house',
                image: '/terrace_house/1.avif'
              },
              {
                title: 'Subdivision',
                type: 'Development',
                slug: 'subdivision',
                image: '/subdivision/1.webp'
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group relative overflow-hidden rounded-sm shadow-lg aspect-[4/3] cursor-pointer block"
                >
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-6">
                    <span className="text-primary text-sm font-bold uppercase mb-1">{project.type}</span>
                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-dark text-white px-6 py-3 rounded-sm font-semibold hover:bg-dark-light transition-colors"
            >
              View All Projects <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h4 className="text-primary font-bold uppercase tracking-wider mb-2 text-sm">Testimonials</h4>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Smith',
                project: 'Modern Family Home',
                rating: 5,
                text: 'FCY Homes exceeded our expectations. Their attention to detail and professionalism made our dream home a reality. Highly recommended!',
                avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Sarah Johnson',
                project: 'Subdivision Project',
                rating: 5,
                text: 'Outstanding service from start to finish. The team was responsive, professional, and delivered on time. We couldn\'t be happier!',
                avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces'
              },
              {
                name: 'Michael Chen',
                project: 'House Renovation',
                rating: 5,
                text: 'Quality workmanship and excellent project management. FCY Homes transformed our old house into a modern masterpiece.',
                avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces'
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl transition-all border border-transparent hover:border-primary"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-bold text-dark">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 font-medium">{testimonial.project}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605174191298-3febad4cef05?w=1920&q=80" 
            alt="Construction Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/85 to-dark/80"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Dream?</h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Contact us today for a consultation and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-sm font-bold text-lg shadow-2xl transition-all group"
            >
              Get a Free Quote
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-dark px-8 py-4 rounded-sm font-bold text-lg shadow-2xl transition-all group"
            >
              View Our Work
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
