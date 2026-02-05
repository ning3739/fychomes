import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Projects - Residential Construction Portfolio",
  description: "View our portfolio of completed residential construction projects in Auckland, including new home builds, subdivisions, and design & build projects. Quality craftsmanship and professional excellence.",
  openGraph: {
    title: "Our Projects | FCY HOMES",
    description: "View our portfolio of completed residential construction projects in Auckland, New Zealand.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
