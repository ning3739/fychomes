import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Get a Free Construction Quote",
  description: "Contact FCY HOMES for a free consultation and quote. Located in Greenlane, Auckland. Phone: 021 490 668. Professional construction services across Auckland, New Zealand.",
  openGraph: {
    title: "Contact Us | FCY HOMES",
    description: "Get in touch with FCY HOMES for professional construction services in Auckland.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
