import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Github, ArrowUpRightIcon, ArrowLeft, Calendar, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { JSX } from 'react'

export type ParamsType = Promise<{ id: string }>;

// Cette fonction génère les routes statiques
export async function generateStaticParams(): Promise<Array<{ id: string }>> {
  return Promise.resolve([
    { id: '0' }, { id: '1' }, { id: '2' }, { id: '3' },
    { id: '4' }, { id: '5' }, { id: '6' }
  ])
}

const ProjectDetail = async ({ params }: { params: ParamsType }): Promise<JSX.Element> => {
  const { id } = await params;
  const allProjects = [
    {
      id: 0,
      name: "Doczi",
      image: "/projects/doczi.png",
      description: "Générateur de documents administratifs Intelligents",
      fullDescription: "Doczi est une solution innovante qui utilise l'intelligence artificielle pour générer automatiquement des documents administratifs personnalisés. L'application simplifie considérablement le processus de création de documents officiels en guidant l'utilisateur à travers un formulaire intuitif et en générant automatiquement le document final au format souhaité.",
      link: "https://doczi.vercel.app/",
      github: "https://github.com/Lafiasabigado/Doczi.git",
      tools: "React,NextJs,Prisma",
      year: "2025",
      features: [
        "Génération automatique de documents",
        "Interface utilisateur intuitive",
        "Support de multiples formats",
        "Base de données Prisma pour la gestion des données"
      ]
    },
    {
      id: 1,
      name: "Freelanceprop",
      image: "/projects/freelanceprop.png",
      description: "Générateur IA de devis pour freelances",
      fullDescription: "Freelanceprop révolutionne la création de devis pour les freelances en utilisant l'intelligence artificielle. L'application permet de générer des propositions professionnelles en quelques minutes, avec une mise en page moderne et des calculs automatiques.",
      link: "https://freelanceprop.vercel.app/",
      github: "https://github.com/Lafiasabigado/Freelanceprop.git",
      tools: "React,NextJs",
      year: "2025",
      features: [
        "Génération de devis IA",
        "Calculs automatiques",
        "Modèles personnalisables",
        "Export PDF"
      ]
    },
    {
      id: 2,
      name: "Foothub",
      image: "/projects/foothubcommunity.png",
      description: "FootHub est une plateforme sociale dédiée aux passionnés de football",
      fullDescription: "FootHub Community est un réseau social complet dédié aux passionnés de football. La plateforme permet de suivre l'actualité des matchs en temps réel, de publier du contenu, d'interagir avec d'autres fans, et de suivre vos équipes et joueurs préférés.",
      link: "https://foothubcommunity.vercel.app/",
      github: "https://github.com/Lafiasabigado/Foothub.git",
      tools: "React,NextJs,Django",
      year: "2025",
      features: [
        "Actualités en temps réel",
        "Système de publications et commentaires",
        "Profils utilisateurs personnalisables",
        "Suivi d'équipes et de joueurs"
      ]
    },
    {
      id: 3,
      name: "Apex Football",
      image: "/projects/apexfootball.png",
      description: "Agence accompagnant les footballeurs professionnels",
      fullDescription: "Apex Football est une agence sportive qui accompagne les joueurs de football professionnels dans leur carrière. Le site vitrine présente les services de l'agence, leur réseau de partenaires, et permet aux joueurs de prendre contact pour bénéficier d'un accompagnement personnalisé.",
      link: "https://apexfootball.vercel.app/",
      github: "https://github.com/Lafiasabigado/Apex-Foot.git",
      tools: "React,NextJs,Django",
      year: "2025",
      features: [
        "Présentation des services",
        "Portfolio de joueurs",
        "Formulaire de contact",
        "Gestion de contenu via Django"
      ]
    },
    {
      id: 4,
      name: "Ballamas",
      image: "/projects/ballamas.png",
      description: "Plateforme e-commerce de vêtements moderne",
      fullDescription: "Ballamas est une plateforme e-commerce élégante dédiée à la vente de vêtements tendance. Avec une interface utilisateur soignée et une expérience d'achat optimisée, les clients peuvent parcourir le catalogue, ajouter des articles au panier et passer commande facilement.",
      link: "https://figma-to-code-ed2-week2-one.vercel.app/",
      github: "https://github.com/Lafiasabigado/Figma_to_code_ed2_week2.git",
      tools: "Vue.js,Bootstrap",
      year: "2024",
      features: [
        "Catalogue de produits filtrable",
        "Panier d'achat dynamique",
        "Design responsive",
        "Interface utilisateur moderne"
      ]
    },
    {
      id: 5,
      name: "Apex Food",
      image: "/projects/apex-food.png",
      description: "Plateforme de commande de repas",
      fullDescription: "Apex Food est une application de livraison de repas qui connecte les utilisateurs avec les meilleurs restaurants locaux. L'interface intuitive permet de parcourir les menus, de personnaliser les commandes et de suivre la livraison en temps réel.",
      link: "https://apex-food.vercel.app/",
      github: "https://github.com/Lafiasabigado/Apex_food.git",
      tools: "Vue.js,Tailwind",
      year: "2024",
      features: [
        "Navigation par catégories",
        "Personnalisation des commandes",
        "Système de notation",
        "Interface responsive"
      ]
    },
    {
      id: 6,
      name: "Travel Agency",
      image: "/projects/travel-agency.png",
      description: "Application de planification de voyages",
      fullDescription: "Travel Agency est une plateforme complète de planification de voyages. Les utilisateurs peuvent rechercher des vols, réserver des hôtels et louer des véhicules, le tout depuis une interface unifiée et moderne.",
      link: "https://travel-agency-psi-ashen.vercel.app/",
      github: "https://github.com/Lafiasabigado/Travel-Agency.git",
      tools: "React,Tailwind",
      year: "2025",
      features: [
        "Recherche de vols",
        "Réservation d'hôtels",
        "Location de voitures",
        "Interface moderne et intuitive"
      ]
    }
  ]

  const project = allProjects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className='min-h-screen flex items-center justify-center'>
      <p>Projet non trouvé</p>
    </div>
  }

  return (
    <div className='min-h-screen py-24'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Back Button */}
        <Link href="/projects" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors">
          <ArrowLeft className='mr-2 h-4 w-4' />
          Retour aux projets
        </Link>

        {/* Hero Image */}
        <div
          className="relative rounded-xl overflow-hidden mb-10 aspect-video bg-gray-100 dark:bg-gray-800"
          data-aos="fade-up"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className='grid md:grid-cols-[2fr_1fr] gap-12'>
          {/* Main Content */}
          <div className='space-y-10'>
            <div data-aos="fade-up">
              <h1 className="text-3xl font-medium tracking-tight mb-4 text-gray-900 dark:text-white">
                {project.name}
              </h1>
              <p className='text-gray-600 dark:text-gray-400 leading-relaxed text-lg'>
                {project.fullDescription}
              </p>
            </div>

            {/* Features */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h2 className='text-xl font-medium mb-4 text-gray-900 dark:text-white'>
                Fonctionnalités principales
              </h2>
              <ul className='space-y-3'>
                {project.features.map((feature, index) => (
                  <li
                    key={index}
                    className='flex items-start text-gray-600 dark:text-gray-400'
                  >
                    <span className='mr-3 mt-2 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0' />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className='space-y-8'>
            {/* Project Info */}
            <div data-aos="fade-up">
              <h3 className='text-sm font-medium uppercase tracking-wider text-gray-500 mb-4'>
                Informations
              </h3>

              <div className='space-y-6'>
                <div>
                  <p className='text-xs text-gray-500 mb-1'>Année</p>
                  <p className='text-gray-900 dark:text-white font-medium'>{project.year}</p>
                </div>

                <div>
                  <p className='text-xs text-gray-500 mb-2'>Technologies</p>
                  <div className='flex flex-wrap gap-2'>
                    {project.tools.split(',').map((tool, index) => (
                      <span
                        key={index}
                        className='px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-md text-xs'
                      >
                        {tool.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className='space-y-3 mt-8'>
                <Link href={project.link} target='_blank' className='block'>
                  <Button className='w-full bg-black dark:bg-white text-white dark:text-black hover:opacity-80 rounded-full h-11 transition-opacity'>
                    Démo en Direct
                    <ArrowUpRightIcon className='ml-2 h-4 w-4' />
                  </Button>
                </Link>

                <Link href={project.github} target='_blank' className='block'>
                  <Button
                    variant="outline"
                    className='w-full rounded-full h-11 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  >
                    Voir sur Github
                    <Github className='ml-2 h-4 w-4' />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail