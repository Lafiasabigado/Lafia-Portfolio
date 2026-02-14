export type Service = {
    id: number
    title: string
    description: string
    features: string[]
    icon: string
    color: string
}

export const services: Service[] = [
    {
        id: 1,
        title: "Web Development",
        description: "Building modern, fast, and SEO-optimized websites. Using the latest technologies like Next.js, React, and TypeScript.",
        features: [
            "Responsive and performant websites",
            "Advanced SEO optimization",
            "Modern and scalable architecture",
            "Third-party API integration"
        ],
        icon: "Code2",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: 2,
        title: "SaaS Applications",
        description: "Development of complete SaaS platforms with authentication, payments, and custom dashboards.",
        features: [
            "Secure authentication",
            "Payment integration (Stripe, PayPal)",
            "Interactive dashboards",
            "Optimized database (Prisma, PostgreSQL)"
        ],
        icon: "Rocket",
        color: "from-purple-500/20 to-pink-500/20"
    },
    {
        id: 3,
        title: "E-commerce",
        description: "Custom e-commerce solutions with product management, shopping cart, and secure payment processing.",
        features: [
            "Dynamic product catalog",
            "Optimized cart and checkout",
            "Inventory and order management",
            "Payment gateway integration"
        ],
        icon: "ShoppingCart",
        color: "from-green-500/20 to-emerald-500/20"
    },
    {
        id: 4,
        title: "UI/UX Design",
        description: "Designing modern and intuitive user interfaces with particular attention to user experience.",
        features: [
            "Design systems and reusable components",
            "Interactive prototypes (Figma)",
            "Animations and micro-interactions",
            "Responsive and accessible design"
        ],
        icon: "Palette",
        color: "from-orange-500/20 to-red-500/20"
    },
    {
        id: 5,
        title: "Web Applications",
        description: "Development of complex web applications with advanced features and third-party integrations.",
        features: [
            "Real-time applications (WebSockets)",
            "AI and Machine Learning integration",
            "Complex state management (Redux, Zustand)",
            "Progressive Web Apps (PWA)"
        ],
        icon: "Zap",
        color: "from-yellow-500/20 to-orange-500/20"
    },
    {
        id: 6,
        title: "Maintenance & Support",
        description: "Ongoing technical support, security updates, and performance optimization for your existing applications.",
        features: [
            "Bug fixes and updates",
            "Performance optimization",
            "Monitoring and analytics",
            "Responsive technical support"
        ],
        icon: "Wrench",
        color: "from-slate-500/20 to-gray-500/20"
    }
]
