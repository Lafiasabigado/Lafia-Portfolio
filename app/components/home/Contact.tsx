'use client';

import Image from 'next/image';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { useTranslations, useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';

export default function Contact() {
  const t = useTranslations('home_sections.contact');
  const locale = useLocale();

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:lafiasabigado@gmail.com',
      label: 'lafiasabigado@gmail.com',
      icon: <Mail className="w-4 h-4" />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/22961882772',
      label: '+229 61 88 27 72',
      icon: <FaWhatsapp className="w-4 h-4" />,
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Lafiasabigado',
      label: 'github.com/Lafiasabigado',
      icon: <FaGithub className="w-4 h-4" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/',
      label: 'Lafia Sabi Gado',
      icon: <FaLinkedinIn className="w-4 h-4" />,
    },
  ];

  return (
    <section id="contact" className="section-spacing relative scroll-mt-24">
      <div className="container-custom">
        {/* Availability Pulsing Dot Eyebrow */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-line bg-white/[0.02] mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono text-fg-soft uppercase tracking-wider">
            {locale === 'en' ? 'Available for new projects' : 'Disponible pour de nouveaux projets'}
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white tracking-tight leading-[1.15] mb-4 max-w-3xl">
          {locale === 'en'
            ? "Always on the lookout for new challenges, great teams & bold ideas."
            : "Toujours en quête de nouveaux problèmes, d'équipes sympas et de bonnes idées."}
        </h2>
        <p className="text-muted text-lg sm:text-xl font-handwritten mb-14">
          {locale === 'en' ? "If that resonates, drop me a line." : "si ça te parle, écris-moi."}
        </p>

        {/* Form and Profile Photo Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                action="https://formspree.io/f/maqdekbd"
                method="POST"
                className="space-y-5"
                aria-label="Formulaire de contact"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-muted uppercase tracking-wider mb-2"
                    >
                      {t('form.name')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder={t('form.namePlaceholder')}
                      className="w-full bg-bg-elevated border border-line rounded-[14px] px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-muted uppercase tracking-wider mb-2"
                    >
                      {t('form.email')}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder={t('form.emailPlaceholder')}
                      className="w-full bg-bg-elevated border border-line rounded-[14px] px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-muted uppercase tracking-wider mb-2"
                  >
                    {t('form.message')}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    name="message"
                    required
                    placeholder={t('form.messagePlaceholder')}
                    className="w-full bg-bg-elevated border border-line rounded-[14px] px-4 py-3.5 text-sm text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent focus:shadow-[0_0_0_3px_rgba(59,130,246,0.15)] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="font-handwritten text-[22px] px-8 py-3 rounded-[18px] bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <span>{locale === 'en' ? 'send message' : 'envoyer'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

          {/* Right: Portrait Card & Direct Links */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={0.1}>
              <Card radius="lg" interactive={false} className="p-2">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900 border-b border-line/40">
                  <Image
                    src="/lafia.png"
                    alt="Lafia Sabi Gado"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-lg font-bold text-white">
                    Lafia Sabi Gado
                  </h3>
                  <p className="text-xs text-muted font-mono mt-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{t('location')}</span>
                  </p>
                </div>
              </Card>
            </Reveal>

            {/* Direct Social / Contact Links */}
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-[14px] bg-bg-elevated border border-line hover:border-white/30 hover:bg-bg-soft transition-all flex items-center gap-3 text-xs text-muted hover:text-white group"
                >
                  <span className="text-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="font-medium truncate">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
