import { getProjects } from '@/lib/projects';
import ProjectsGrid from './ProjectsGrid';

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <main className="min-h-screen pt-30">
      {/* Header */}
      <section className="relative bg-linear-to-b from-gray-50 to-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
            alt="Projects Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-b from-white/95 to-white/90" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
            Our Portfolio
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark mb-6 animate-fade-in-delay-1">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto animate-fade-in-delay-2">
            Showcasing excellence in residential construction, design, and development.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectsGrid projects={projects} />
        </div>
      </section>
    </main>
  );
}
