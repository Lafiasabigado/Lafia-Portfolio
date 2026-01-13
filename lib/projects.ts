export type Project = {
  id: number
  name: string
  image: string
  description: string
  fullDescription?: string
  link: string
  github: string
  tools: string
  year: string
  features?: string[]
}

export const projects: Project[] = [
  {
    id: 0,
    name: "Doczi",
    image: "/projects/doczi.png",
    description: "Générateur de documents administratifs Intelligents",
    fullDescription:
      "Doczi est une solution innovante qui utilise l'intelligence artificielle pour générer automatiquement des documents administratifs personnalisés. L'application simplifie considérablement le processus de création de documents officiels en guidant l'utilisateur à travers un formulaire intuitif et en générant automatiquement le document final au format souhaité.",
    link: "https://doczi.vercel.app/",
    github: "https://github.com/Lafiasabigado/Doczi.git",
    tools: "React,NextJs,Prisma",
    year: "2025",
    features: [
      "Génération automatique de documents",
      "Interface utilisateur intuitive",
      "Support de multiples formats",
      "Base de données Prisma pour la gestion des données",
    ],
  },
  {
    id: 1,
    name: "BrainWritor",
    image: "/projects/brainwritor.png",
    description: "Assistant rédactionnel IA",
    fullDescription:
      "BrainWritor révolutionne la rédaction de document pour les professionnels en utilisant l'intelligence artificielle. L'application permet de générer des documents professionnelles en quelques minutes, avec une mise en page moderne et des calculs automatiques.",
    link: "https://brainwritor.vercel.app/",
    github: "https://github.com/Lafiasabigado/BrainWritor.git",
    tools: "React,NextJs",
    year: "2025",
    features: [
      "Génération de devis IA",
      "Génération de propositions professionnelles",
      "Modèles personnalisables",
      "Génération de documents",
      "Interface utilisateur moderne",
    ],
  },
  {
    id: 2,
    name: "Foothub",
    image: "/projects/foothubcommunity.png",
    description:
      "FootHub est une plateforme sociale dédiée aux passionnés de football",
    fullDescription:
      "FootHub Community est un réseau social complet dédié aux passionnés de football. La plateforme permet de suivre l'actualité des matchs en temps réel, de publier du contenu, d'interagir avec d'autres fans, et de suivre vos équipes et joueurs préférés.",
    link: "https://foothubcommunity.vercel.app/",
    github: "https://github.com/Lafiasabigado/Foothub.git",
    tools: "React,NextJs,Django",
    year: "2025",
    features: [
      "Actualités en temps réel",
      "Système de publications et commentaires",
      "Profils utilisateurs personnalisables",
      "Suivi d'équipes et de joueurs",
    ],
  },
  {
    id: 3,
    name: "Apex Football",
    image: "/projects/apexfootball.png",
    description: "Agence accompagnant les footballeurs professionnels",
    fullDescription:
      "Apex Football est une agence sportive qui accompagne les joueurs de football professionnels dans leur carrière. Le site vitrine présente les services de l'agence, leur réseau de partenaires, et permet aux joueurs de prendre contact pour bénéficier d'un accompagnement personnalisé.",
    link: "https://apexfootball.vercel.app/",
    github: "https://github.com/Lafiasabigado/Apex-Foot.git",
    tools: "React,NextJs,Django",
    year: "2025",
    features: [
      "Présentation des services",
      "Portfolio de joueurs",
      "Formulaire de contact",
      "Gestion de contenu via Django",
    ],
  },
  {
    id: 4,
    name: "Ballamas",
    image: "/projects/ballamas.png",
    description: "Plateforme e-commerce de vêtements moderne",
    fullDescription:
      "Ballamas est une plateforme e-commerce élégante dédiée à la vente de vêtements tendance. Avec une interface utilisateur soignée et une expérience d'achat optimisée, les clients peuvent parcourir le catalogue, ajouter des articles au panier et passer commande facilement.",
    link: "https://figma-to-code-ed2-week2-one.vercel.app/",
    github: "https://github.com/Lafiasabigado/Figma_to_code_ed2_week2.git",
    tools: "Vue.js,Bootstrap",
    year: "2024",
    features: [
      "Catalogue de produits filtrable",
      "Panier d'achat dynamique",
      "Design responsive",
      "Interface utilisateur moderne",
    ],
  },
  {
    id: 5,
    name: "Apex Food",
    image: "/projects/apex-food.png",
    description: "Plateforme de commande de repas",
    fullDescription:
      "Apex Food est une application de livraison de repas qui connecte les utilisateurs avec les meilleurs restaurants locaux. L'interface intuitive permet de parcourir les menus, de personnaliser les commandes et de suivre la livraison en temps réel.",
    link: "https://apex-food.vercel.app/",
    github: "https://github.com/Lafiasabigado/Apex_food.git",
    tools: "Vue.js,Tailwind",
    year: "2024",
    features: [
      "Navigation par catégories",
      "Personnalisation des commandes",
      "Système de notation",
      "Interface responsive",
    ],
  },
  {
    id: 6,
    name: "Travel Agency",
    image: "/projects/travel-agency.png",
    description: "Application de planification de voyages",
    fullDescription:
      "Travel Agency est une plateforme complète de planification de voyages. Les utilisateurs peuvent rechercher des vols, réserver des hôtels et louer des véhicules, le tout depuis une interface unifiée et moderne.",
    link: "https://travel-agency-psi-ashen.vercel.app/",
    github: "https://github.com/Lafiasabigado/Travel-Agency.git",
    tools: "React,Tailwind",
    year: "2025",
    features: [
      "Recherche de vols",
      "Réservation d'hôtels",
      "Location de voitures",
      "Interface moderne et intuitive",
    ],
  },
]

export const featuredProjects: Project[] = projects.slice(0, 4)

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id)
}
