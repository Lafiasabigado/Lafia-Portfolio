'use client';

import Image from 'next/image';
import { Mail, MapPin, Send } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';
import { useTranslations, useLocale } from 'next-intl';
import { Card } from '@/components/ui/Card';
import { Reveal } from '@/components/ui/Reveal';
import { useContactFormAnalytics } from '@/lib/analytics/events';
import { useState } from 'react';

export default function Contact() {
  const t = useTranslations('home_sections.contact');
  const locale = useLocale();
  const { handleFormFocus, handleFormSubmitSuccess, handleFormSubmitError } = useContactFormAnalytics();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/maqdekbd', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
        handleFormSubmitSuccess();
      } else {
        const data = await response.json().catch(() => ({}));
        const errText = data?.errors?.[0]?.message || 'Erreur lors de l’envoi';
        setErrorMessage(errText);
        handleFormSubmitError(errText);
      }
    } catch (err: any) {
      const errText = err?.message || 'Erreur réseau';
      setErrorMessage(errText);
      handleFormSubmitError(errText);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:lafiasabigado@gmail.com',
      label: 'lafiasabigado@gmail.com',
      icon: <Mail className="w-3.5 h-3.5" />,
      event: 'contact_click',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/22956259632',
      label: '+229 56 25 96 32',
      icon: <FaWhatsapp className="w-3.5 h-3.5" />,
      event: 'whatsapp_click',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/Lafiasabigado',
      label: 'github.com/Lafiasabigado',
      icon: <FaGithub className="w-3.5 h-3.5" />,
      event: 'github_click',
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/lafia-sabi-gado-03910a292/',
      label: 'Lafia Sabi Gado',
      icon: <FaLinkedinIn className="w-3.5 h-3.5" />,
      event: 'linkedin_click',
    },
  ];

  return (
    <section id="contact" className="section-spacing relative scroll-mt-20">
      <div className="container-custom">
        {/* Availability Pulsing Dot Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-line bg-white/[0.02] mb-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[11px] font-mono text-fg-soft uppercase tracking-wider">
            {locale === 'en' ? 'Available for new projects' : 'Disponible pour de nouveaux projets'}
          </span>
        </div>

        <h2 className="text-xl sm:text-2xl font-heading font-bold text-white tracking-tight leading-snug mb-2 max-w-xl">
          {locale === 'en'
            ? "Always on the lookout for new challenges & bold ideas."
            : "Toujours en quête de nouveaux problèmes, d'équipes sympas et de bonnes idées."}
        </h2>
        <p className="text-muted text-sm sm:text-base font-handwritten mb-6">
          {locale === 'en' ? "If that resonates, drop me a line." : "si ça te parle, écris-moi."}
        </p>

        {/* Compact Form and Profile Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Form */}
          <div className="md:col-span-7">
            <Reveal>
              <form
                onSubmit={handleSubmit}
                onFocusCapture={handleFormFocus}
                className="space-y-3.5"
                aria-label="Formulaire de contact"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-1"
                    >
                      {t('form.name')}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder={t('form.namePlaceholder')}
                      className="w-full bg-bg-elevated border border-line rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-1"
                    >
                      {t('form.email')}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder={t('form.emailPlaceholder')}
                      className="w-full bg-bg-elevated border border-line rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-1"
                  >
                    {t('form.message')}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    name="message"
                    required
                    placeholder={t('form.messagePlaceholder')}
                    className="w-full bg-bg-elevated border border-line rounded-[12px] px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder:text-muted/50 outline-none transition-all focus:border-accent resize-none"
                  />
                </div>

                {submitted && (
                  <p className="text-xs text-emerald-400 font-mono">
                    {locale === 'en' ? 'Message sent successfully! Thank you.' : 'Message envoyé avec succès ! Merci.'}
                  </p>
                )}

                {errorMessage && (
                  <p className="text-xs text-rose-400 font-mono">
                    {errorMessage}
                  </p>
                )}

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-handwritten text-lg px-6 py-2 rounded-full bg-white text-black hover:-translate-y-0.5 hover:shadow-glow-lift hover:bg-neutral-100 transition-all inline-flex items-center gap-2 disabled:opacity-60"
                  >
                    <span>{isSubmitting ? (locale === 'en' ? 'sending...' : 'envoi...') : locale === 'en' ? 'send message' : 'envoyer'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>

          {/* Right: Portrait Card & Direct Links */}
          <div className="md:col-span-5 space-y-3.5">
            <Reveal delay={0.08}>
              <Card radius="md" interactive={false} className="p-1 group overflow-hidden">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-neutral-900 border border-line/40">
                  <Image
                    src="/ablafia.png"
                    alt="Lafia Sabi Gado"
                    fill
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-3.5 sm:left-3.5 sm:right-3.5">
                    <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-tight">
                      Lafia Sabi Gado
                    </h3>
                    <p className="text-[11px] text-muted font-mono mt-0.5 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent shrink-0" />
                      <span>{t('location')}</span>
                    </p>
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Direct Social Links */}
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-umami-event={item.event}
                  data-umami-event-location="contact"
                  className="p-2.5 rounded-[12px] bg-bg-elevated border border-line hover:border-white/30 hover:bg-bg-soft transition-all flex items-center gap-2 text-xs text-muted hover:text-white group"
                >
                  <span className="text-accent group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  <span className="text-[11px] font-mono truncate">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
