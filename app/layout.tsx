import type { Metadata } from 'next';
import './globals.css';
import TopBar from '@/components/layout/TopBar';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'TangerImmo | Immobilier de Prestige à Tanger, Maroc',
  description:
    'Découvrez les plus beaux appartements, penthouses et villas à vendre et à louer à Tanger (Malabata, Iberia, Marshan, Tanja Balia, Boubana). Titres fonciers vérifiés et accompagnement notarié.',
  keywords: [
    'immobilier tanger',
    'appartement tanger',
    'achat appartement tanger',
    'location tanger',
    'malabata tanger',
    'iberia tanger',
    'marshan tanger',
    'villa boubana tanger',
    'penthouse vue mer tanger',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col font-sans">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
