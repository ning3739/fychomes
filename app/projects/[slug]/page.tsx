import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/projects';
import ProjectGallery from './ProjectGallery';

type Params = { slug: string };

export function generateStaticParams() {
  return getAllProjectSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} - Project Gallery`,
    description: `View ${project.images.length} photos from our ${project.title} project.`,
    openGraph: {
      title: `${project.title} | FCY HOMES`,
      description: `View ${project.images.length} photos from our ${project.title} project.`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return <ProjectGallery title={project.title} images={project.images} />;
}
