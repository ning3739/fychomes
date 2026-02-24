'use client';

import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import type { Project } from '@/lib/projects';

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <Link key={project.slug} href={`/projects/${project.slug}`}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="group bg-white border border-gray-200 rounded-sm overflow-hidden hover:shadow-xl hover:border-primary transition-all cursor-pointer"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={16} className="text-primary shrink-0" />
                <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <div className="flex items-center gap-1.5 text-sm font-medium text-primary group-hover:text-primary-dark transition-colors">
                View More
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
