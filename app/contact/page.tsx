'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen pt-30">
      {/* Header */}
      <section className="relative bg-gradient-to-b from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80" 
            alt="Contact Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 to-white/90"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 animate-fade-in-delay-1">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-delay-2">
            Ready to start your project? Get in touch with us today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info Card */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-dark mb-4">Let's Talk</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Whether you have a specific project in mind or just want to explore your options,
                we are here to help. Fill out the form or contact us directly using the details below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-muted rounded-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Visit Us</h3>
                    <p className="text-gray-700 text-sm">
                      52 Omahu Road, Greenlane
                      <br />
                      Auckland, 1051, New Zealand
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted rounded-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Call Us</h3>
                    <p className="text-gray-700 text-sm">021 490 668</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted rounded-sm">
                  <div className="w-12 h-12 bg-primary/10 rounded-sm flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-1">Email Us</h3>
                    <p className="text-gray-700 text-sm">fcyhomes@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-sm">
                <div className="flex items-center gap-3 text-primary">
                  <CheckCircle size={24} />
                  <span className="font-semibold">Professional Excellence & Quality</span>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="bg-white border border-gray-200 rounded-sm p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-4">Message Sent!</h3>
                  <p className="text-gray-700 mb-8">
                    Thank you for contacting us. We will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-dark mb-6">Send us a message</h3>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="021 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-dark mb-2">
                      I am interested in...
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="Design & Build">Design & Build</option>
                      <option value="New Home Construction">New Home Construction</option>
                      <option value="Subdivision">Subdivision</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white rounded-sm font-semibold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
