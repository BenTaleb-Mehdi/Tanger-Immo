import { Apartment, BlogPost } from './types';

export const APARTMENTS: Apartment[] = [
  {
    id: 'apt-tanger-01',
    title: 'Superbe Appartement Vue Mer Panoramique à Malabata',
    description: 'Niché au cœur du prestigieux quartier de Malabata, cet appartement d’exception offre une vue imprenable à 180° sur toute la baie de Tanger et le Détroit de Gibraltar. Finitions haut de gamme, marbre de Carrare au sol, climatisation gainée réversible, double vitrage thermique et phonique. Situé dans une résidence sécurisée 24/7 avec piscine et garage en sous-sol.',
    price: 2450000,
    currency: 'DH',
    period: 'total',
    location: {
      address: 'Avenue Mohammed VI, Résidence Marina Bay',
      city: 'Tanger',
      neighborhood: 'Malabata',
      lat: 35.7785,
      lng: -5.7928,
    },
    features: {
      bedrooms: 3,
      bathrooms: 2,
      area: 142,
      floor: 7,
      furnished: true,
      parking: true,
      terrace: true,
      elevator: true,
      seaView: true,
    },
    amenities: [
      'Vue Mer Panoramique',
      'Terrasse aménagée 25m²',
      'Place de parking titrée',
      'Piscine résidentielle',
      'Sécurité 24/7 & Caméras',
      'Climatisation centrale',
      'Cuisine équipée Bosch',
      'Suite parentale avec dressing',
      'Proche Gare TGV Tanger Ville',
    ],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80',
    ],
    type: 'apartment',
    status: 'for-sale',
    featured: true,
    createdAt: '2026-02-15',
    agent: {
      name: 'Youssef El Amrani',
      phone: '+212 661 23 45 67',
      whatsapp: '212661234567',
      email: 'youssef@tangerimmo.ma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    id: 'apt-tanger-02',
    title: 'Penthouse d’Exception avec Terrasse Privative à Iberia',
    description: 'Situé dans le quartier très recherché d’Iberia, à deux pas de la Place Koweit et du Lycée Regnault, ce penthouse moderne propose de grands volumes baignés de lumière naturelle. Grande terrasse circulaire sans vis-à-vis, suite parentale royale avec baignoire balnéo, salon marocain moderne et cuisine avec îlot central.',
    price: 3200000,
    currency: 'DH',
    period: 'total',
    location: {
      address: 'Rue d’Angleterre, Résidence Les Ambassades',
      city: 'Tanger',
      neighborhood: 'Iberia',
      lat: 35.7728,
      lng: -5.8152,
    },
    features: {
      bedrooms: 4,
      bathrooms: 3,
      area: 210,
      floor: 8,
      furnished: false,
      parking: true,
      terrace: true,
      elevator: true,
      seaView: false,
    },
    amenities: [
      'Terrasse rooftop 45m²',
      'Ascenseur privatif à clé',
      '2 places de garage titrées',
      'Cheminée au bioéthanol',
      'Domotique intégrée',
      'Suite parentale avec jacuzzi',
      'Cave privée',
      'Quartier diplomatique calme',
    ],
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    ],
    type: 'penthouse',
    status: 'for-sale',
    featured: true,
    createdAt: '2026-02-10',
    agent: {
      name: 'Salma Bennani',
      phone: '+212 662 89 01 23',
      whatsapp: '212662890123',
      email: 'salma@tangerimmo.ma',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    id: 'apt-tanger-03',
    title: 'Appartement Haut Standing Meublé en Location à Centre-Ville',
    description: 'À louer à l’année sur le prestigieux Boulevard Pasteur, magnifique appartement entièrement meublé et décoré par un architecte d’intérieur. À proximité immédiate des cafés mythiques de Tanger, des banques, des commerces et à 5 minutes à pied de la plage municipale.',
    price: 8500,
    currency: 'DH',
    period: 'month',
    location: {
      address: 'Boulevard Pasteur, Résidence El Minzah',
      city: 'Tanger',
      neighborhood: 'Centre-Ville',
      lat: 35.7801,
      lng: -5.8115,
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 95,
      floor: 4,
      furnished: true,
      parking: true,
      terrace: true,
      elevator: true,
      seaView: true,
    },
    amenities: [
      'Entièrement meublé neuf',
      'Smart TV & Fibre Optique',
      'Balcon vue Détroit',
      'Immeuble sécurisé avec concierge',
      'Climatisation réversible',
      'Ascenseur',
      'Lave-linge & Lave-vaisselle',
    ],
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=80',
    ],
    type: 'apartment',
    status: 'for-rent',
    featured: true,
    createdAt: '2026-02-18',
    agent: {
      name: 'Youssef El Amrani',
      phone: '+212 661 23 45 67',
      whatsapp: '212661234567',
      email: 'youssef@tangerimmo.ma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    id: 'apt-tanger-04',
    title: 'Appartement Moderne et Lumineux à Tanja Balia',
    description: 'Charmant appartement récent de 85m² situé dans un secteur calme et résidentiel de Tanja Balia, à seulement quelques minutes du centre commercial Socco Alto et de la corniche. Idéal pour jeune couple, pied-à-terre ou investissement locatif à haut rendement.',
    price: 920000,
    currency: 'DH',
    period: 'total',
    location: {
      address: 'Route de Malabata, Résidence Les Jardins de Tanja',
      city: 'Tanger',
      neighborhood: 'Tanja Balia',
      lat: 35.7674,
      lng: -5.7761,
    },
    features: {
      bedrooms: 2,
      bathrooms: 1,
      area: 85,
      floor: 3,
      furnished: false,
      parking: true,
      terrace: false,
      elevator: true,
      seaView: false,
    },
    amenities: [
      'Place de garage titrée',
      'Résidence fermée sécurisée',
      'Espace de jeux pour enfants',
      'Syndic professionnel',
      'Double vitrage',
      'Cuisine semi-équipée',
    ],
    images: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=80',
    ],
    type: 'apartment',
    status: 'for-sale',
    featured: false,
    createdAt: '2026-01-28',
    agent: {
      name: 'Salma Bennani',
      phone: '+212 662 89 01 23',
      whatsapp: '212662890123',
      email: 'salma@tangerimmo.ma',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    id: 'apt-tanger-05',
    title: 'Villa de Maître avec Piscine Privée à Boubana (Royal Golf)',
    description: 'Somptueuse villa d’architecte située dans le quartier le plus exclusif de Tanger : Boubana, en lisière immédiate du Royal Golf de Tanger. Jardin arboré de palmiers et d’oliviers centenaires, piscine à débordement chauffée, hammam beldi traditionnel, suite parentale de 60m² et dépendances pour le personnel.',
    price: 6800000,
    currency: 'DH',
    period: 'total',
    location: {
      address: 'Avenue du Golf, Domaine de Boubana',
      city: 'Tanger',
      neighborhood: 'Boubana',
      lat: 35.7651,
      lng: -5.8423,
    },
    features: {
      bedrooms: 5,
      bathrooms: 5,
      area: 450,
      floor: 2,
      furnished: true,
      parking: true,
      terrace: true,
      elevator: false,
      seaView: false,
    },
    amenities: [
      'Piscine à débordement chauffée',
      'Hammam Beldi en marbre',
      'Jardin paysager 1 200m²',
      'Garage pour 3 véhicules',
      'Système de vidéosurveillance',
      'Panneaux solaires',
      'Logement de gardien indépendant',
      'Vue directe sur le Golf',
    ],
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    ],
    type: 'villa',
    status: 'for-sale',
    featured: true,
    createdAt: '2026-02-01',
    agent: {
      name: 'Youssef El Amrani',
      phone: '+212 661 23 45 67',
      whatsapp: '212661234567',
      email: 'youssef@tangerimmo.ma',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
  },
  {
    id: 'apt-tanger-06',
    title: 'Appartement de Caractère avec Vue sur le Détroit à Marshan',
    description: 'Au cœur du mythique quartier de Marshan, à quelques pas du Café Hafa et du Palais Mendoub, ce bel appartement colonial entièrement rénové allie le charme des hauts plafonds et des moulures à une modernité épurée. Vue imprenable sur l’Océan et la côte espagnole par temps clair.',
    price: 1650000,
    currency: 'DH',
    period: 'total',
    location: {
      address: 'Rue de la Kasbah, Marshan',
      city: 'Tanger',
      neighborhood: 'Marshan',
      lat: 35.7915,
      lng: -5.8189,
    },
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 110,
      floor: 2,
      furnished: false,
      parking: false,
      terrace: true,
      elevator: false,
      seaView: true,
    },
    amenities: [
      'Vue panoramique sur le Détroit',
      'Hauts plafonds 3.40m',
      'Parquet en chêne massif',
      'Balcon filant vue mer',
      'Cheminée d’époque fonctionnelle',
      'Quartier historique très calme',
      'À 2 min du Café Hafa',
    ],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=80',
    ],
    type: 'apartment',
    status: 'for-sale',
    featured: false,
    createdAt: '2026-02-12',
    agent: {
      name: 'Salma Bennani',
      phone: '+212 662 89 01 23',
      whatsapp: '212662890123',
      email: 'salma@tangerimmo.ma',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'guide-achat-immobilier-tanger-2026',
    title: 'Guide complet pour acheter un appartement à Tanger en 2026',
    excerpt: 'Prix au m² par quartier, démarches notariales, conservation foncière et conseils d’experts pour réussir votre investissement dans la capitale du Détroit.',
    content: `
Tanger s'impose aujourd'hui comme le deuxième pôle économique du Maroc et l'une des destinations immobilières les plus attractives du bassin méditerranéen. Portée par des projets d'envergure tels que Tanger Med, la ligne TGV Al Boraq reliant Tanger à Casablanca en seulement 2h10, et la rénovation spectaculaire de la corniche et de la Marina Bay, la ville blanche attire investisseurs nationaux, MRE (Marocains Résidant à l'Étranger) et acquéreurs internationaux.

### 1. Panorama des prix au mètre carré à Tanger par quartier

Le marché immobilier tangérois présente une diversité remarquable selon la localisation, la vue sur mer et le standing de la résidence :

- **Malabata & Corniche** : De 18 000 à 28 000 DH/m². Le quartier le plus prisé pour sa vue directe sur la baie, sa proximité avec la gare TGV et ses résidences modernes de standing international.
- **Iberia & Place Koweit** : De 15 000 à 22 000 DH/m². Le quartier résidentiel bourgeois par excellence, très recherché pour sa proximité avec les écoles internationales (Lycée français Regnault) et les consulats.
- **Marshan & Vieille Montagne** : De 17 000 à 30 000 DH/m² pour les villas et appartements de charme avec vue sur le Détroit de Gibraltar.
- **Tanja Balia** : De 10 000 à 14 000 DH/m². Quartier en plein essor offrant d'excellentes opportunités d'accession à la propriété et de forts potentiels de plus-value.
- **Centre-Ville (Boulevard Pasteur & Bd Mohammed V)** : De 13 000 à 19 000 DH/m² pour des appartements centraux idéaux en location courte ou longue durée.

### 2. Les étapes juridiques incontournables au Maroc

Acheter un bien immobilier à Tanger nécessite le respect scrupuleux des étapes légales garantissant la sécurité de votre acquisition :

1. **La vérification du Titre Foncier (Conservation Foncière)** : Avant tout engagement, le notaire consulte le certificat de propriété auprès de l'ANCFCC (Agence Nationale de la Conservation Foncière) pour vérifier l'absence d'hypothèques, de saisies ou de servitudes.
2. **Le Compromis de Vente (Sous seing privé ou notarié)** : Il scelle l'accord sur le prix et les conditions suspensives (obtention de crédit bancaire, etc.) avec le versement d'un acompte généralement fixé à 10%.
3. **La signature de l'Acte Authentique chez le Notaire** : La loi marocaine impose l'intervention d'un notaire pour l'enregistrement et la publication officielle de la vente.
4. **Les frais d'acquisition à prévoir** : Prévoyez environ 6% à 7% du montant de la transaction répartis entre les droits d'enregistrement (4%), la conservation foncière (1.5% + frais fixes), et les honoraires du notaire (environ 1% HT).

### 3. Rendement locatif et attractivité touristique

Avec plus de 300 jours de soleil par an et une demande touristique en constante hausse, Tanger offre d'excellents rendements locatifs. Un appartement 2 pièces bien situé à Malabata ou en Centre-Ville peut générer un rendement brut compris entre **7% et 9%** par an grâce à la combinaison location moyenne durée en hiver et location saisonnière estivale.
    `,
    coverImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1600&q=80',
    author: {
      name: 'Youssef El Amrani',
      role: 'Directeur d’Agence & Expert Immobilier Tanger',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    category: 'Guide d’Achat',
    publishedAt: '12 Février 2026',
    readTime: '6 min',
    tags: ['Tanger', 'Achat Immobilier', 'Prix au m²', 'Conseils Notaire', 'Malabata'],
  },
  {
    id: 'blog-2',
    slug: 'investir-malabata-rendement-locatif',
    title: 'Investir à Malabata : Pourquoi ce quartier reste le n°1 à Tanger',
    excerpt: 'Analyse détaillée des atouts de Malabata : front de mer, marina, gare TGV et rentabilité locative record.',
    content: `
Quartier emblématique de l'expansion moderne de Tanger, Malabata est devenu en quelques années la vitrine du dynamisme immobilier de la région Nord.

Bordé par la Méditerranée et doté d'infrastructures de premier ordre (hôtels 5 étoiles, centre commercial Tanger City Mall, multiplexe cinéma, restaurants gastronomiques), Malabata séduit tant les investisseurs à la recherche de valorisation patrimoniale que les locataires exigeants.

Découvrez les secrets d'un investissement réussi dans le quartier le plus dynamique de Tanger.
    `,
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    author: {
      name: 'Salma Bennani',
      role: 'Consultante Investissement Immobilier',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    },
    category: 'Investissement',
    publishedAt: '28 Janvier 2026',
    readTime: '5 min',
    tags: ['Malabata', 'Investissement Locatif', 'Tanger Marina', 'Location Saisonnière'],
  },
  {
    id: 'blog-3',
    slug: 'vivre-a-la-vieille-montagne-marshan',
    title: 'Vivre à Marshan et Vieille Montagne : Charme historique et prestige',
    excerpt: 'Immersion au cœur des quartiers les plus aristocratiques et verdoyants de Tanger, entre pins parasols et vue sur l’Atlantique.',
    content: `
Pour ceux qui recherchent la sérénité, la verdure et une architecture chargée d'histoire, les collines de la Vieille Montagne et le plateau de Marshan incarnent le sommet de l'élégance tangéroise.

Ancien quartier de prédilection des diplomates, écrivains de la Beat Generation et grandes familles marocaines, ce secteur protégé bénéficie d'une végétation luxuriante et de points de vue spectaculaires où se rencontrent l'Océan Atlantique et la Mer Méditerranée.
    `,
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    author: {
      name: 'Youssef El Amrani',
      role: 'Directeur d’Agence & Expert Immobilier Tanger',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
    category: 'Art de Vivre',
    publishedAt: '18 Janvier 2026',
    readTime: '4 min',
    tags: ['Marshan', 'Vieille Montagne', 'Prestige', 'Villas', 'Histoire de Tanger'],
  },
];
