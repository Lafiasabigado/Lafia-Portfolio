export type CaseStudySection = {
  title: string;
  title_en: string;
  content: string;
  content_en: string;
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  category: "Web Apps" | "Outils & CLI" | "Mobile" | "IA" | "SaaS";
  tagline: string;
  tagline_en: string;
  description: string;
  description_en: string;
  stack: string[];
  cover: string;
  links: {
    demo?: string;
    repo?: string;
  };
  featuredInHero?: boolean;
  sections?: {
    context?: { fr: string; en: string };
    problem?: { fr: string; en: string };
    solution?: { fr: string; en: string };
    features?: { fr: string[]; en: string[] };
    techChoices?: { fr: string; en: string };
    learnings?: { fr: string; en: string };
  };
};

export const projects: Project[] = [
  {
    slug: "afriglot",
    name: "Afriglot",
    year: "2026",
    category: "Web Apps",
    tagline: "PWA traducteur de langues béninoises et africaines",
    tagline_en: "PWA translator for Beninese and African languages",
    description: "Application web progressive dédiée à l'apprentissage et à la traduction des langues locales africaines, connectée à l'API 229langues.",
    description_en: "Progressive web application dedicated to learning and translating local African languages, powered by the 229langues API.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "API 229langues"],
    cover: "/projects/afriglot.png",
    links: {
      demo: "https://afriglot.vercel.app/",
      repo: "https://github.com/Lafiasabigado/afriglot.git",
    },
    featuredInHero: true,
    sections: {
      context: {
        fr: "La préservation et l'accès numérique aux langues locales en Afrique de l'Ouest constituent un enjeu culturel et technologique majeur.",
        en: "Preserving and providing digital access to local languages in West Africa is a major cultural and technical challenge."
      },
      problem: {
        fr: "La plupart des solutions grand public ignorent les langues d'Afrique de l'Ouest comme le Fon, le Yoruba ou le Dendi, et nécessitent une connexion continue difficile dans certaines zones.",
        en: "Most mainstream translators overlook West African languages like Fon, Yoruba, or Dendi, and require persistent high-speed connection."
      },
      solution: {
        fr: "Une PWA ultra-légère, installable sur mobile, fonctionnant avec mise en cache hors-ligne et intégrant des synthèses et traductions précises.",
        en: "An ultra-lightweight installable PWA that works with offline caching and integrates accurate local language translations."
      },
      features: {
        fr: [
          "Traduction bidirectionnelle français-langues locales",
          "Support PWA installable et mode hors-ligne partiel",
          "Interface fluide pensée pour les connexions mobiles modestes",
          "Partage instantané de traductions audio et texte"
        ],
        en: [
          "Bidirectional translation between French and local languages",
          "Installable PWA support with partial offline mode",
          "Fluid interface optimized for mobile connections",
          "Instant sharing of audio and text translations"
        ]
      },
      techChoices: {
        fr: "Next.js avec App Router et mise en cache granulaire pour garantir un temps de réponse instantané.",
        en: "Next.js with App Router and granular caching to ensure instantaneous response times."
      },
      learnings: {
        fr: "Optimisation poussée des flux audio sur mobile et structuration des corpus linguistiques multilingues.",
        en: "Deep optimization of mobile audio streaming and multilingual linguistic corpus handling."
      }
    }
  },
  {
    slug: "fonika-translate",
    name: "Fonika Translate",
    year: "2025",
    category: "Mobile",
    tagline: "Package Flutter pour traduction, TTS & STT en langues africaines",
    tagline_en: "Flutter package for translation, TTS & STT in African languages",
    description: "Package open-source publié sur pub.dev facilitant l'intégration des fonctionnalités de traduction, synthèse vocale (TTS) et reconnaissance vocale (STT) pour les applications mobiles en Afrique.",
    description_en: "Open-source package published on pub.dev facilitating the integration of translation, TTS, and STT features in African mobile apps.",
    stack: ["Flutter", "Dart", "REST API", "Pub.dev", "Audio Processing"],
    cover: "/projects/ballamas.png", // fallback placeholder
    links: {
      repo: "https://github.com/Lafiasabigado",
    },
    featuredInHero: true,
    sections: {
      context: {
        fr: "Faciliter la vie des développeurs mobiles construisant des applications pour le marché africain.",
        en: "Empowering mobile developers building applications for the African market."
      },
      problem: {
        fr: "Intégrer la voix et la traduction dans les langues locales demandait trop de code rébarbatif et de configurations spécifiques.",
        en: "Integrating voice and local language translation previously required repetitive boilerplate and custom configurations."
      },
      solution: {
        fr: "Un package Dart propre avec typage strict, gestion unifiée des erreurs réseau et streaming audio fluide.",
        en: "A clean Dart package with strict typing, unified network error handling, and fluid audio streaming."
      },
      features: {
        fr: [
          "API simplifiée pour TTS et reconnaissance vocale",
          "Documentation complète et exemples prêts à l'emploi",
          "Gestion optimisée de la mémoire sur appareils d'entrée de gamme"
        ],
        en: [
          "Simplified API for TTS and speech recognition",
          "Complete documentation and ready-to-use examples",
          "Optimized memory footprint on entry-level devices"
        ]
      }
    }
  },
  {
    slug: "securio",
    name: "Securio",
    year: "2025",
    category: "Outils & CLI",
    tagline: "Audit de sécurité web passif (Web App & CLI Node/Python)",
    tagline_en: "Passive web security audit suite (Web App & Node/Python CLI)",
    description: "Suite complète d'audit de sécurité passif comprenant une application web, une CLI Node.js et une CLI Python au sein d'un monorepo pour inspecter en un clic les en-têtes de sécurité, certificats SSL et vulnérabilités de configuration.",
    description_en: "Complete passive security audit suite featuring a web app, Node.js CLI, and Python CLI in a monorepo to inspect security headers, SSL certificates, and config vulnerabilities.",
    stack: ["TypeScript", "Node.js", "Python", "Next.js", "Tailwind CSS"],
    cover: "/projects/doczi.png", // fallback placeholder
    links: {
      repo: "https://github.com/Lafiasabigado",
    },
    featuredInHero: true,
    sections: {
      context: {
        fr: "Les failles de configuration de sécurité de base (en-têtes HTTP manquants, SSL obsolète) touchent des milliers de sites sans que les équipes s'en aperçoivent.",
        en: "Basic security configuration vulnerabilities (missing HTTP headers, outdated SSL) affect thousands of web applications unnoticed."
      },
      problem: {
        fr: "La plupart des scanners de sécurité sont complexes, intrusifs ou payants pour de simples vérifications passives.",
        en: "Most security scanners are overly complex, intrusive, or paywalled for straightforward passive checks."
      },
      solution: {
        fr: "Une suite d'audit non-intrusive disponible aussi bien dans le terminal que dans le navigateur avec rapports exportables.",
        en: "A non-intrusive audit suite available both via terminal and browser with exportable actionable reports."
      },
      features: {
        fr: [
          "Analyse des en-têtes HTTP (CSP, HSTS, X-Frame-Options...)",
          "Vérification de validité et chaîne de certification SSL",
          "CLI rapide intégrable dans les pipelines CI/CD",
          "Notation claire de A+ à F avec recommandations concrètes"
        ],
        en: [
          "HTTP security header analysis (CSP, HSTS, X-Frame-Options...)",
          "SSL certificate validity and chain inspection",
          "Fast CLI easily integrated into CI/CD pipelines",
          "Clear A+ to F grading with concrete recommendations"
        ]
      }
    }
  },
  {
    slug: "ai-funnel-builder",
    name: "AI Funnel Builder",
    year: "2025",
    category: "IA",
    tagline: "SaaS pages de vente, funnels WhatsApp & Mobile Money",
    tagline_en: "SaaS landing pages, WhatsApp funnels & Mobile Money",
    description: "Plateforme SaaS conçue pour le commerce ouest-africain : génération par IA de pages de vente à forte conversion, automatisation des funnels de redirection vers WhatsApp et encaissement Mobile Money simplifié.",
    description_en: "SaaS platform crafted for West African e-commerce: AI generation of high-converting landing pages, WhatsApp funnels, and seamless Mobile Money checkout.",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "OpenAI API", "FedaPay / MTN MoMo"],
    cover: "/projects/brainwritor.png", // fallback placeholder
    links: {
      repo: "https://github.com/Lafiasabigado",
    },
    featuredInHero: true,
    sections: {
      context: {
        fr: "En Afrique de l'Ouest, l'immense majorité des ventes en ligne se conclut directement sur WhatsApp et via Mobile Money.",
        en: "In West Africa, the overwhelming majority of digital sales happen directly through WhatsApp and Mobile Money."
      },
      problem: {
        fr: "Créer une landing page adaptée, rédiger du texte percutant et relier le formulaire au bon flux WhatsApp prend des heures aux marchands.",
        en: "Creating tailored landing pages, writing persuasive copy, and hooking forms into WhatsApp workflows takes hours for local merchants."
      },
      solution: {
        fr: "Un constructeur intelligent qui génère la page, la copy localisée et les boutons d'appel à l'action WhatsApp en moins de deux minutes.",
        en: "An intelligent builder that generates the page, localized copy, and WhatsApp conversion triggers in under two minutes."
      }
    }
  },
  {
    slug: "grace-branco",
    name: "Grâce Branco Portfolio",
    year: "2025",
    category: "Web Apps",
    tagline: "Site portfolio moderne et épuré pour cliente créative",
    tagline_en: "Modern and sleek portfolio website for creative client",
    description: "Conception et développement sur-mesure d'un site portfolio interactif, optimisé pour le référencement et la mise en valeur de créations visuelles.",
    description_en: "Custom design and development of an interactive portfolio website, optimized for SEO and creative visual showcases.",
    stack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    cover: "/projects/freelanceprop.png", // fallback placeholder
    links: {
      repo: "https://github.com/Lafiasabigado",
    },
    featuredInHero: true,
    sections: {
      context: {
        fr: "Projet client demandant une direction artistique élégante et des animations soignées.",
        en: "Client project requiring elegant art direction and refined micro-interactions."
      },
      solution: {
        fr: "Un portfolio fluide avec chargement optimisé des visuels haute définition et mise en page responsive.",
        en: "A fluid portfolio with optimized high-resolution asset delivery and responsive layout."
      }
    }
  },
  {
    slug: "ml-self-study",
    name: "ML Self-Study",
    year: "2025",
    category: "IA",
    tagline: "Parcours machine learning Python appliqué au marché ouest-africain",
    tagline_en: "Python machine learning path applied to West African data",
    description: "Travaux pratiques, expérimentations et notebooks de modèles prédictifs et de traitement du langage naturel adaptés aux données locales.",
    description_en: "Practical experiments and notebooks for predictive models and natural language processing adapted to regional data.",
    stack: ["Python", "Pandas", "Scikit-Learn", "PyTorch", "Jupyter"],
    cover: "/projects/toji.png",
    links: {
      repo: "https://github.com/Lafiasabigado",
    },
    featuredInHero: false,
    sections: {
      context: {
        fr: "Exploration approfondie des techniques modernes de modélisation appliquée.",
        en: "In-depth exploration of modern applied modeling techniques."
      }
    }
  },
  {
    slug: "tikonna",
    name: "Tikonna",
    year: "2025",
    category: "Web Apps",
    tagline: "Plateforme web de l'Association Tikonna",
    tagline_en: "Tikonna Association web platform",
    description: "Site web pour l'autonomisation des femmes de l'Atacora : vitrine d'activités, catalogue de produits locaux et blog d'actualités.",
    description_en: "Website for the empowerment of Atacora women: showcase of activities, local products catalog, and news blog.",
    stack: ["React", "Next.js", "Django", "Tailwind CSS"],
    cover: "/projects/tikonna.png",
    links: {
      demo: "https://www.tikonna.org/",
      repo: "https://github.com/Lafiasabigado/Tikonna_Frontend.git",
    },
    featuredInHero: false,
  },
  {
    slug: "brainwritor",
    name: "BrainWritor",
    year: "2025",
    category: "SaaS",
    tagline: "Assistant rédactionnel et devis intelligent par IA",
    tagline_en: "AI-powered writing and smart quote assistant",
    description: "Application permettant aux professionnels de générer devis, propositions commerciales et documents personnalisés en quelques clics.",
    description_en: "Application allowing professionals to generate quotes, business proposals, and custom documents in a few clicks.",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    cover: "/projects/brainwritor.png",
    links: {
      demo: "https://brainwritor.vercel.app/",
      repo: "https://github.com/Lafiasabigado/BrainWritor.git",
    },
    featuredInHero: false,
  },
  {
    slug: "doczi",
    name: "Doczi",
    year: "2025",
    category: "SaaS",
    tagline: "Générateur intelligent de documents administratifs",
    tagline_en: "Intelligent administrative document generator",
    description: "Solution simplifiant la génération de documents officiels et administratifs avec formulaire guidé et export multi-format.",
    description_en: "Solution simplifying the generation of official and administrative documents with guided forms and multi-format export.",
    stack: ["React", "Next.js", "Prisma", "Tailwind CSS"],
    cover: "/projects/doczi.png",
    links: {
      demo: "https://doczi.vercel.app/",
      repo: "https://github.com/Lafiasabigado/Doczi.git",
    },
    featuredInHero: false,
  },
  {
    slug: "kamischool",
    name: "KamiSchool",
    year: "2026",
    category: "Web Apps",
    tagline: "Gestion complète de centres de formation",
    tagline_en: "Complete training center management platform",
    description: "Plateforme de gestion pour centres de formation : suivi des élèves, formateurs, sessions, paiements et émission d'attestations.",
    description_en: "Management platform for training centers: student tracking, trainers, sessions, payments, and certificate issuing.",
    stack: ["React", "Next.js", "Django", "Tailwind CSS"],
    cover: "/projects/kamischool.png",
    links: {
      demo: "https://kamischool.vercel.app/",
      repo: "https://github.com/Lafiasabigado/kamischool.git",
    },
    featuredInHero: false,
  },
  {
    slug: "localshare",
    name: "LocalShare",
    year: "2025",
    category: "Outils & CLI",
    tagline: "Transfert P2P de fichiers sur réseau local",
    tagline_en: "Local network peer-to-peer file transfer",
    description: "Outil web léger facilitant le partage rapide et sécurisé de fichiers entre appareils connectés au même réseau Wi-Fi local sans passer par Internet.",
    description_en: "Lightweight web tool enabling fast and secure file transfer between devices on the same local Wi-Fi without going through the internet.",
    stack: ["React", "Next.js", "WebRTC", "Django"],
    cover: "/projects/localshare.png",
    links: {
      demo: "https://localshare.vercel.app/",
      repo: "https://github.com/Lafiasabigado/localshare.git",
    },
    featuredInHero: false,
  },
  {
    slug: "foothub",
    name: "FootHub Community",
    year: "2025",
    category: "Web Apps",
    tagline: "Réseau social dédié aux passionnés de football",
    tagline_en: "Social platform dedicated to football enthusiasts",
    description: "Plateforme communautaire permettant de suivre les matchs en direct, publier du contenu, échanger avec d'autres fans et suivre ses équipes favorites.",
    description_en: "Community platform for following live matches, posting content, interacting with other fans, and following favorite teams.",
    stack: ["React", "Next.js", "Django", "Tailwind CSS"],
    cover: "/projects/foothubcommunity.png",
    links: {
      demo: "https://foothubcommunity.vercel.app/",
      repo: "https://github.com/Lafiasabigado/Foothub.git",
    },
    featuredInHero: false,
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
