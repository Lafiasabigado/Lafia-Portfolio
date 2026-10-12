'use client';

import { useActionState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Lock, Mail, ArrowLeft, ShieldAlert } from 'lucide-react';
import { loginAction, type LoginActionState } from '@/lib/auth/actions';

interface LoginFormProps {
  locale: string;
}

export default function LoginForm({ locale }: LoginFormProps) {
  const [state, formAction, isPending] = useActionState<LoginActionState | null, FormData>(
    loginAction,
    null
  );

  const isEn = locale === 'en';

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative z-20">
      <div className="w-full max-w-sm">
        {/* Back Link */}
        <Link
          href={isEn ? '/' : '/fr'}
          className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-white transition-colors mb-6 font-mono"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{isEn ? 'Back to portfolio' : 'Retour au portfolio'}</span>
        </Link>

        {/* Card Container */}
        <div className="bg-card-ring p-2 rounded-[22px] shadow-glow border border-line">
          <div className="bg-bg-elevated rounded-[16px] p-6 sm:p-7 border border-white/[0.04]">
            {/* Header with Logo */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center mb-3">
                <Image
                  src="/logo-icon.png"
                  alt="ALSG Logo"
                  width={72}
                  height={19}
                  priority
                  className="h-5 w-auto object-contain"
                />
              </div>
              <h1 className="font-heading text-lg font-bold text-white tracking-tight">
                {isEn ? 'Private Analytics' : 'Statistiques Privées'}
              </h1>
              <p className="text-xs text-muted mt-1">
                {isEn ? 'Sign in to access your dashboard' : 'Connexion réservée au propriétaire'}
              </p>
            </div>

            {/* Error Message */}
            {state?.error && (
              <div
                role="alert"
                className="mb-5 p-3 rounded-[10px] bg-rose-950/40 border border-rose-800/50 flex items-start gap-2.5 text-xs text-rose-300"
              >
                <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <p>{state.error}</p>
              </div>
            )}

            {/* Login Form */}
            <form action={formAction} className="space-y-4">
              <input type="hidden" name="locale" value={locale} />

              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-1.5"
                >
                  {isEn ? 'Authorized Email' : 'Email Autorisé'}
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="email@example.com"
                    className="w-full bg-black/50 border border-line rounded-[10px] pl-9 pr-3.5 py-2.5 text-xs text-white placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-[11px] font-mono text-muted uppercase tracking-wider mb-1.5"
                >
                  {isEn ? 'Password' : 'Mot de passe'}
                </label>
                <div className="relative">
                  <Lock className="w-3.5 h-3.5 text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    className="w-full bg-black/50 border border-line rounded-[10px] pl-9 pr-3.5 py-2.5 text-xs text-white placeholder:text-muted/40 outline-none transition-colors focus:border-accent"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full mt-2 font-mono text-xs uppercase tracking-wider font-semibold py-2.5 px-4 rounded-[10px] bg-white text-black hover:bg-neutral-200 hover:shadow-glow-lift transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending
                  ? isEn
                    ? 'Verifying...'
                    : 'Vérification...'
                  : isEn
                  ? 'Sign In'
                  : 'Se Connecter'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] font-mono text-center text-muted/60 mt-5">
          {isEn
            ? 'Protected access · 5 attempts / 15 min limit'
            : 'Accès sécurisé · Limité à 5 tentatives / 15 min'}
        </p>
      </div>
    </div>
  );
}
