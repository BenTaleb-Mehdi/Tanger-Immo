export const siteConfig = {
  name: 'TangerImmo',
  shortName: 'TangerImmo',
  description: 'Plateforme immobilière de référence à Tanger, Maroc. Vente et location d’appartements, penthouses et villas de prestige dans les plus beaux quartiers de Tanger.',
  city: 'Tanger',
  country: 'Maroc',
  address: 'Place des Nations, Boulevard Mohammed V, Tanger 90000, Maroc',
  phone: '+212 539 94 28 30',
  mobile: '+212 661 23 45 67',
  whatsapp: '212661234567',
  whatsappNumber: '212661234567',
  whatsappUrl: 'https://wa.me/212661234567?text=Bonjour%20TangerImmo%2C%20je%20souhaite%20des%20informations%20sur%20un%20bien%20immobilier',
  email: 'contact@tangerimmo.ma',
  currency: 'DH',
  currencyCode: 'MAD',

  stats: [
    { label: 'Biens d’Exception à Tanger', value: '150+' },
    { label: 'Clients Accompagnés', value: '1 200+' },
    { label: 'Quartiers Clés de Tanger', value: '9' },
    { label: 'Titres Fonciers Vérifiés', value: '100%' },
  ],

  navLinks: [
    { name: 'Accueil', href: '/' },
    { name: 'Biens Immobiliers', href: '/apartments' },
    { name: 'Quartiers de Tanger', href: '/neighborhoods' },
    { name: 'Blog & Guides', href: '/blog' },
    { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],

  tangerQuartiers: [
    { name: 'Tous les quartiers', value: '' },
    { name: 'Malabata & Corniche', value: 'Malabata' },
    { name: 'Iberia & Place Koweit', value: 'Iberia' },
    { name: 'Marshan & Vieille Montagne', value: 'Marshan' },
    { name: 'Centre-Ville & Bd Pasteur', value: 'Centre-Ville' },
    { name: 'Tanja Balia', value: 'Tanja Balia' },
    { name: 'Boubana & Royal Golf', value: 'Boubana' },
    { name: 'California', value: 'California' },
    { name: 'Achakkar & Cap Spartel', value: 'Achakkar' },
    { name: 'Gzenaya & Free Zone', value: 'Gzenaya' },
  ],

  propertyTypes: [
    { name: 'Tous les types', value: '' },
    { name: 'Appartement', value: 'apartment' },
    { name: 'Penthouse Vue Mer', value: 'penthouse' },
    { name: 'Villa de Luxe', value: 'villa' },
    { name: 'Duplex', value: 'duplex' },
    { name: 'Studio Moderne', value: 'studio' },
  ],

  priceRangesSale: [
    { name: 'Tous les budgets', value: '' },
    { name: 'Moins de 1 000 000 DH', value: '0-1000000' },
    { name: '1 000 000 - 2 000 000 DH', value: '1000000-2000000' },
    { name: '2 000 000 - 4 000 000 DH', value: '2000000-4000000' },
    { name: 'Plus de 4 000 000 DH', value: '4000000-999999999' },
  ],

  priceRangesRent: [
    { name: 'Tous les loyers', value: '' },
    { name: 'Moins de 5 000 DH/mois', value: '0-5000' },
    { name: '5 000 - 10 000 DH/mois', value: '5000-10000' },
    { name: '10 000 - 20 000 DH/mois', value: '10000-20000' },
    { name: 'Plus de 20 000 DH/mois', value: '20000-999999' },
  ],
};
