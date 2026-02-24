'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function ServicesPage() {
  const services = [
    {
      id: 'design-build',
      title: 'Design & Build',
      description: 'From initial concept to final construction, we provide seamless design and building services. Our integrated approach ensures that your vision is realized with precision, keeping budget and timeline in check.',
      features: ['Architectural Design', 'Council Consent Management', 'Cost Estimation', 'End-to-End Project Management'],
      image: 'https://images.unsplash.com/photo-1762146828422-50a8bd416d3c?w=1200&q=80',
    },
    {
      id: 'construction',
      title: 'House Construction',
      description: 'High-quality new home construction tailored to your requirements. We use premium materials and trusted techniques to build homes that stand the test of time and provide comfort for generations.',
      features: ['New Home Builds', 'Sustainable Construction', 'Quality Assurance', 'Professional Guarantee'],
      image: 'https://images.unsplash.com/photo-1676803210608-39cdef6a505c?w=1200&q=80',
    },
    {
      id: 'subdivision',
      title: 'Subdivision',
      description: 'Professional planning and execution of land subdivision projects. We maximize the potential of your land through smart design, infrastructure development, and efficient project execution.',
      features: ['Feasibility Studies', 'Resource Consents', 'Infrastructure Development', 'Landscaping'],
      image: 'https://images.unsplash.com/photo-1760129745103-91c4022ed5fb?w=1200&q=80',
    },
  ];

  return (
    <main className="min-h-screen pt-30">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605174191298-3febad4cef05?w=1920&q=80" 
            alt="Services Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            What We Do
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 animate-fade-in-delay-1">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-delay-2">
            Professional construction services tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center gap-12`}
            >
              <div className="lg:w-1/2">
                <div className="relative rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-[4/3] object-cover"
                  />
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  Service {idx + 1}
                </div>
                <h2 className="text-4xl font-bold text-dark mb-6">{service.title}</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="text-primary" size={14} />
                      </div>
                      <span className="text-dark font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Get a Quote
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-dark mb-6">Not sure what you need?</h2>
          <p className="text-gray-700 mb-8 text-lg">
            Our team is here to help guide you through the process. Contact us for a free consultation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Contact Our Team
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
