export type Project = {
  id: number
  name: string
  image: string
  description: string // French (Default)
  description_en: string
  fullDescription: string // French (Default)
  fullDescription_en: string
  link: string
  github: string
  tools: string
  year: string
  features: string[] // French (Default)
  features_en: string[]
  category: string
  color: string
}

export const projects: Project[] = [
  {
    id: 0,
    name: "Tikonna",
    image: "/projects/tikonna.png",
    description: "Site web de l'Association Tikonna",
    description_en: "Tikonna Association Website",
    fullDescription:
      "Tikonna est une association qui assure l'autonomisation des femmes des montagnes de l'Atacora. Le site présente les activités de l'association, ses membres et ses projets, des produits en ventes ainsi que des actualités.",
    fullDescription_en: "Tikonna is an association that ensures the empowerment of women in the Atacora mountains. The site presents the association's activities, its members and projects, products for sale, and news.",
    link: "https://www.tikonna.org/",
    github: "https://github.com/Lafiasabigado/Tikonna_Frontend.git",
    tools: "React,NextJs,Django",
    year: "2025",
    features: [
      "Page produits présentant une variété de produits locaux",
      "Interface utilisateur intuitive",
      "Support de multiples formats",
      "Blog présentant les actualités de l'association",
      "Gestion des données via Django",
    ],
    features_en: [
      "Product page showcasing a variety of local products",
      "Intuitive user interface",
      "Multi-format support",
      "Blog presenting association news",
      "Data management via Django"
    ],
    category: "Web App",
    color: "from-purple-500/20 to-blue-500/20"
  },
  {
    id: 1,
    name: "Doczi",
    image: "/projects/doczi.png",
    description: "Générateur de documents administratifs Intelligents",
    description_en: "Intelligent Administrative Document Generator",
    fullDescription:
      "Doczi est une solution innovante qui utilise l'intelligence artificielle pour générer automatiquement des documents administratifs personnalisés. L'application simplifie considérablement le processus de création de documents officiels en guidant l'utilisateur à travers un formulaire intuitif et en générant automatiquement le document final au format souhaité.",
    fullDescription_en: "Doczi is an innovative solution that uses artificial intelligence to automatically generate personalized administrative documents. The application significantly simplifies the official document creation process by guiding the user through an intuitive form and automatically generating the final document in the desired format.",
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
    features_en: [
      "Automatic document generation",
      "Intuitive user interface",
      "Multi-format support",
      "Prisma database for data management"
    ],
    category: "SaaS Platform",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    name: "BrainWritor",
    image: "/projects/brainwritor.png",
    description: "Assistant rédactionnel IA",
    description_en: "AI Writing Assistant",
    fullDescription:
      "BrainWritor révolutionne la rédaction de document pour les professionnels en utilisant l'intelligence artificielle. L'application permet de générer des documents professionnelles en quelques minutes, avec une mise en page moderne et des calculs automatiques.",
    fullDescription_en: "BrainWritor revolutionizes document writing for professionals using artificial intelligence. The application allows generating professional documents in minutes, with a modern layout and automatic calculations.",
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
    features_en: [
      "AI Quote generation",
      "Professional proposal generation",
      "Customizable templates",
      "Document generation",
      "Modern user interface"
    ],
    category: "SaaS Platform",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    id: 3,
    name: "Foothub",
    image: "/projects/foothubcommunity.png",
    description:
      "FootHub est une plateforme sociale dédiée aux passionnés de football",
    description_en: "FootHub is a social platform dedicated to football enthusiasts",
    fullDescription:
      "FootHub Community est un réseau social complet dédié aux passionnés de football. La plateforme permet de suivre l'actualité des matchs en temps réel, de publier du contenu, d'interagir avec d'autres fans, et de suivre vos équipes et joueurs préférés.",
    fullDescription_en: "FootHub Community is a complete social network dedicated to football enthusiasts. The platform allows following match news in real-time, publishing content, interacting with other fans, and following your favorite teams and players.",
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
    features_en: [
      "Real-time news",
      "Post and comment system",
      "Customizable user profiles",
      "Team and player tracking"
    ],
    category: "Web App",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 4,
    name: "Apex Football",
    image: "/projects/apexfootball.png",
    description: "Agence accompagnant les footballeurs professionnels",
    description_en: "Agency accompanying professional footballers",
    fullDescription:
      "Apex Football est une agence sportive qui accompagne les joueurs de football professionnels dans leur carrière. Le site vitrine présente les services de l'agence, leur réseau de partenaires, et permet aux joueurs de prendre contact pour bénéficier d'un accompagnement personnalisé.",
    fullDescription_en: "Apex Football is a sports agency that accompanies professional football players in their careers. The showcase site presents the agency's services, their partner network, and allows players to make contact to benefit from personalized support.",
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
    features_en: [
      "Services presentation",
      "Player portfolio",
      "Contact form",
      "Content management via Django"
    ],
    category: "Website",
    color: "from-slate-500/20 to-gray-500/20"
  },
  {
    id: 5,
    name: "Ballamas",
    image: "/projects/ballamas.png",
    description: "Plateforme e-commerce de vêtements moderne",
    description_en: "Modern clothing e-commerce platform",
    fullDescription:
      "Ballamas est une plateforme e-commerce élégante dédiée à la vente de vêtements tendance. Avec une interface utilisateur soignée et une expérience d'achat optimisée, les clients peuvent parcourir le catalogue, ajouter des articles au panier et passer commande facilement.",
    fullDescription_en: "Ballamas is an elegant e-commerce platform dedicated to selling trendy clothing. With a polished user interface and optimized shopping experience, customers can browse the catalog, add items to the cart, and place orders easily.",
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
    features_en: [
      "Filterable product catalog",
      "Dynamic shopping cart",
      "Responsive design",
      "Modern user interface"
    ],
    category: "E-commerce",
    color: "from-pink-500/20 to-rose-500/20"
  },
  {
    id: 6,
    name: "Apex Food",
    image: "/projects/apex-food.png",
    description: "Plateforme de commande de repas",
    description_en: "Meal ordering platform",
    fullDescription:
      "Apex Food est une application de livraison de repas qui connecte les utilisateurs avec les meilleurs restaurants locaux. L'interface intuitive permet de parcourir les menus, de personnaliser les commandes et de suivre la livraison en temps réel.",
    fullDescription_en: "Apex Food is a meal delivery application that connects users with the best local restaurants. The intuitive interface allows browsing menus, customizing orders, and tracking delivery in real-time.",
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
    features_en: [
      "Category navigation",
      "Order customization",
      "Rating system",
      "Responsive interface"
    ],
    category: "Web App",
    color: "from-yellow-500/20 to-orange-500/20"
  },
  {
    id: 7,
    name: "Travel Agency",
    image: "/projects/travel-agency.png",
    description: "Application de planification de voyages",
    description_en: "Travel planning application",
    fullDescription:
      "Travel Agency est une plateforme complète de planification de voyages. Les utilisateurs peuvent rechercher des vols, réserver des hôtels et louer des véhicules, le tout depuis une interface unifiée et moderne.",
    fullDescription_en: "Travel Agency is a complete travel planning platform. Users can search for flights, book hotels, and rent vehicles, all from a unified and modern interface.",
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
    features_en: [
      "Flight search",
      "Hotel booking",
      "Car rental",
      "Modern and intuitive interface"
    ],
    category: "Website",
    color: "from-cyan-500/20 to-blue-500/20"
  },
]

export const featuredProjects: Project[] = projects.slice(0, 4)

export function getProjectById(id: number): Project | undefined {
  return projects.find((p) => p.id === id)
}
