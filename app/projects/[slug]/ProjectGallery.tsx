'use client';

import { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectGalleryProps {
  title: string;
  images: string[];
}

export default function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goToPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === 0 ? images.length - 1 : lightboxIndex - 1);
  }, [lightboxIndex, images.length]);

  const goToNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex(lightboxIndex === images.length - 1 ? 0 : lightboxIndex + 1);
  }, [lightboxIndex, images.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, goToPrev, goToNext]);

  return (
    <main className="min-h-screen pt-30">
      {/* Header */}
      <section className="relative bg-linear-to-b from-gray-50 to-white py-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gray-100" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Back to Projects</span>
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark animate-fade-in">
            {title}
          </h1>
          <p className="text-lg text-gray-600 mt-4 animate-fade-in-delay-1">
            {images.length} photos
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <motion.div
                key={src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.3, delay: Math.min(idx * 0.03, 0.3) }}
                className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer bg-gray-100"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={src}
                  alt={`${title} - Photo ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Quote CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Interested in this project?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us to discuss your project requirements and get a free quote.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-sm font-bold text-lg shadow-2xl transition-all group"
          >
            Get a Free Quote
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
            >
              <X size={28} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 z-10 text-white/70 text-sm font-medium">
              {lightboxIndex + 1} / {images.length}
            </div>

            {/* Prev button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goToPrev(); }}
              className="absolute left-4 z-10 p-2 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft size={36} />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={images[lightboxIndex]}
              alt={`${title} - Photo ${lightboxIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next button */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 z-10 p-2 text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
