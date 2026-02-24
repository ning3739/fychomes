import fs from 'fs';
import path from 'path';

const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);

const FEATURED_ONLY = new Set(['stand_alone_house', 'terrace_house', 'subdivision']);

function toTitleCase(str: string): string {
  return str.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

export interface Project {
  slug: string;
  title: string;
  thumbnail: string;
  imageCount: number;
}

function getImageFiles(folderPath: string, folderName: string): string[] {
  const files = fs.readdirSync(folderPath);
  return files
    .filter(file => SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort()
    .map(file => `/${folderName}/${encodeURIComponent(file)}`);
}

export function getProjects(): Project[] {
  const publicDir = path.join(process.cwd(), 'public');
  const entries = fs.readdirSync(publicDir, { withFileTypes: true });

  return entries
    .filter(entry => entry.isDirectory() && !FEATURED_ONLY.has(entry.name))
    .map(entry => {
      const images = getImageFiles(path.join(publicDir, entry.name), entry.name);
      return {
        slug: entry.name,
        title: toTitleCase(entry.name),
        thumbnail: images[0] ?? '',
        imageCount: images.length,
      };
    })
    .filter(project => project.imageCount > 0)
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getProjectBySlug(slug: string) {
  const folderPath = path.join(process.cwd(), 'public', slug);
  if (!fs.existsSync(folderPath) || !fs.statSync(folderPath).isDirectory()) {
    return null;
  }

  const images = getImageFiles(folderPath, slug);
  if (images.length === 0) return null;

  return {
    slug,
    title: toTitleCase(slug),
    images,
  };
}

export function getAllProjectSlugs(): string[] {
  return getProjects().map(p => p.slug);
}
