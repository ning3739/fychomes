import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Construction Services - Design & Build, House Construction, Subdivision",
  description: "FCY HOMES offers comprehensive construction services in Auckland: Design & Build, House Construction, and Subdivision. Licensed builders providing professional residential construction services.",
  openGraph: {
    title: "Our Services | FCY HOMES",
    description: "Comprehensive construction services in Auckland: Design & Build, House Construction, and Subdivision.",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
