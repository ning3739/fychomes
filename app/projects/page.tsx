'use client';

import Link from 'next/link';
import { MapPin, Ruler } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: 'Modern Family Home',
      type: 'Design & Build',
      location: 'Queenstown, NZ',
      size: '250m²',
      description: 'A contemporary 4-bedroom family home featuring open plan living and sustainable design.',
      image: 'https://images.unsplash.com/photo-1649001241420-cbd5641d4951?w=800&q=80',
    },
    {
      id: 2,
      title: 'Luxury Subdivision Project',
      type: 'Subdivision',
      location: 'Wanaka, NZ',
      size: '12 Lots',
      description: 'Premium land subdivision with integrated landscaping and community spaces.',
      image: 'https://images.unsplash.com/photo-1650222360656-8a3061cb004f?w=800&q=80',
    },
    {
      id: 3,
      title: 'Contemporary Renovation',
      type: 'Renovation',
      location: 'Arrowtown, NZ',
      size: '180m²',
      description: 'Complete modernization of a heritage cottage while preserving its original character.',
      image: 'https://images.unsplash.com/photo-1758998202918-d921125a700f?w=800&q=80',
    },
    {
      id: 4,
      title: 'Hillside Retreat',
      type: 'New Home',
      location: 'Queenstown Hill',
      size: '320m²',
      description: 'Architectural masterpiece maximizing panoramic lake views with floor-to-ceiling glass.',
      image: 'https://images.unsplash.com/photo-1767950470198-c9cd97f8ed87?w=800&q=80',
    },
    {
      id: 5,
      title: 'Timber Eco-Lodge',
      type: 'Design & Build',
      location: 'Glenorchy',
      size: '200m²',
      description: 'Sustainable timber construction designed to blend seamlessly with the natural environment.',
      image: 'https://images.unsplash.com/photo-1750680805673-ba0ab887a5fe?w=800&q=80',
    },
    {
      id: 6,
      title: 'Urban Townhouses',
      type: 'Development',
      location: 'Frankton',
      size: '8 Units',
      description: 'Modern high-density living solution with smart spatial planning and premium finishes.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    },
  ];

  return (
    <main className="min-h-screen pt-30">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80" 
            alt="Projects Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            Our Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 animate-fade-in-delay-1">Our Projects</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-delay-2">
            Showcasing excellence in residential construction, design, and development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl hover:border-primary transition-all"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-sm">
                    {project.type}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin size={16} className="text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Ruler size={16} className="text-primary" />
                      {project.size}
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-primary text-white rounded-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    Contact Us About This
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
