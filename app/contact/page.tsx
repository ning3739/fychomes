import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, CheckCircle, ArrowRight, Shield, Award, Users, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-30">
      {/* Header */}
      <section className="relative bg-linear-to-b from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/95 to-white/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            About Us
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 animate-fade-in-delay-1">
            FCY HOMES
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-delay-2">
            Building quality homes across Auckland with trust, efficiency, and professional excellence.
          </p>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold uppercase tracking-wide mb-3 text-xs">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                Experience You Can Build On
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                FCY HOMES is a professional residential construction company based in Auckland, New Zealand.
                With years of hands-on experience in the building industry, we specialise in new home builds,
                design & build projects, and land subdivisions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                Our team is committed to delivering high-quality workmanship on every project.
                We work closely with our clients from initial concept through to completion, ensuring
                that every detail meets our exacting standards. As licensed and registered builders,
                we bring reliability, transparency, and craftsmanship to everything we do.
              </p>

              <div className="flex items-center gap-6">
                <div className="relative h-16 w-16 shrink-0">
                  <Image
                    src="/logo-master-builders.png"
                    alt="Registered Master Builders"
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Proud member of Registered Master Builders — your guarantee of quality and professionalism.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1541888915364-aaeed51d238b?w=1080&q=80"
                alt="FCY HOMES Team"
                className="rounded-sm w-full h-[420px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold uppercase tracking-wide mb-3 text-xs">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">What Sets Us Apart</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield size={28} />,
                title: 'Licensed & Insured',
                desc: 'Fully licensed builders with comprehensive insurance coverage for your peace of mind.',
              },
              {
                icon: <Award size={28} />,
                title: 'Quality Craftsmanship',
                desc: 'We take pride in delivering exceptional build quality with attention to every detail.',
              },
              {
                icon: <Users size={28} />,
                title: 'Client Focused',
                desc: 'We keep you informed and involved throughout the entire building process.',
              },
              {
                icon: <Clock size={28} />,
                title: 'On Time Delivery',
                desc: 'Efficient project management ensures your project is completed on schedule.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-sm border border-gray-200 text-center"
              >
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-sm flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-primary font-semibold uppercase tracking-wide mb-3 text-xs">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 mb-10 text-lg">
            Contact us today for a free consultation and let's bring your vision to life.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <a
              href="tel:021490668"
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-sm border border-gray-200 hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <Phone className="text-primary group-hover:text-white" size={22} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 font-medium">Call Us</p>
                <p className="text-dark font-bold">021 490 668</p>
              </div>
            </a>

            <a
              href="mailto:fcyhomes@gmail.com"
              className="flex items-center gap-4 p-6 bg-gray-50 rounded-sm border border-gray-200 hover:border-primary transition-colors group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                <Mail className="text-primary group-hover:text-white" size={22} />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500 font-medium">Email Us</p>
                <p className="text-dark font-bold">fcyhomes@gmail.com</p>
              </div>
            </a>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-sm font-bold text-lg shadow-2xl transition-all group"
          >
            View Our Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
