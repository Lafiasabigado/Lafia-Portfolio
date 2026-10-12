'use client';

import { useState, useTransition } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  LayoutDashboard,
  Globe,
  Share2,
  Sparkles,
  Laptop,
  Activity,
  Eye,
  Users,
  MousePointerClick,
  Timer,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  ExternalLink,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  FileText,
  MessageSquare,
  ShieldCheck,
  Compass,
  Smartphone,
  Layers,
  Flame,
} from 'lucide-react';
import { logoutAction } from '@/lib/auth/actions';
import type {
  DashboardData,
  TimeRange,
  TimeSeriesPoint,
} from '@/lib/analytics/posthog-api';

interface DashboardViewProps {
  initialData: DashboardData;
  locale: 'fr' | 'en';
  userEmail: string;
}

type NavSection = 'overview' | 'pages' | 'referrers' | 'conversions' | 'audience' | 'logs';

export default function DashboardView({
  initialData,
  locale,
  userEmail,
}: DashboardViewProps) {
  const isEn = locale === 'en';
  const [data, setData] = useState<DashboardData>(initialData);
  const [currentRange, setCurrentRange] = useState<TimeRange>(initialData.range);
  const [activeSection, setActiveSection] = useState<NavSection>('overview');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [chartMode, setChartMode] = useState<'both' | 'pageviews' | 'visitors'>('both');
  const [hoveredPoint, setHoveredPoint] = useState<TimeSeriesPoint | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPendingLogout, startLogoutTransition] = useTransition();

  const handleRangeChange = async (range: TimeRange) => {
    if (range === currentRange && !isRefreshing) return;
    setCurrentRange(range);
    setIsRefreshing(true);
    try {
      const res = await fetch(`/api/dashboard/stats?range=${range}&locale=${locale}`);
      if (res.ok) {
        const newData = await res.json();
        setData(newData);
      }
    } catch (err) {
      console.error('Error refreshing PostHog stats:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleManualRefresh = () => {
    handleRangeChange(currentRange);
  };

  const handleLogout = () => {
    startLogoutTransition(async () => {
      await logoutAction(locale);
    });
  };

  // SVG Chart computation
  const points = data.timeSeries;
  const maxVal = Math.max(
    ...points.map((p) => Math.max(p.pageviews, p.visitors)),
    10
  );

  const chartWidth = 840;
  const chartHeight = 230;
  const paddingX = 24;
  const paddingY = 26;

  const getCoordinates = (value: number, index: number) => {
    const x =
      paddingX +
      (index / Math.max(points.length - 1, 1)) * (chartWidth - paddingX * 2);
    const y =
      chartHeight -
      paddingY -
      (value / maxVal) * (chartHeight - paddingY * 2);
    return { x, y };
  };

  const pvPath = points
    .map((p, i) => {
      const { x, y } = getCoordinates(p.pageviews, i);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const visPath = points
    .map((p, i) => {
      const { x, y } = getCoordinates(p.visitors, i);
      return `${i === 0 ? 'M' : 'L'} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(' ');

  const pvAreaPath =
    points.length > 0
      ? `${pvPath} L ${getCoordinates(0, points.length - 1).x.toFixed(1)} ${(chartHeight - paddingY).toFixed(1)} L ${paddingX} ${(chartHeight - paddingY).toFixed(1)} Z`
      : '';

  const navItems = [
    {
      id: 'overview' as NavSection,
      label: isEn ? 'Overview' : "Vue d'ensemble",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      id: 'pages' as NavSection,
      label: isEn ? 'Top Pages' : 'Pages & Trafic',
      icon: Globe,
      badge: `${data.topPages.length}`,
    },
    {
      id: 'referrers' as NavSection,
      label: isEn ? 'Traffic Sources' : 'Sources & Référents',
      icon: Share2,
      badge: null,
    },
    {
      id: 'conversions' as NavSection,
      label: isEn ? 'Conversions & Leads' : 'Conversions & Leads',
      icon: Sparkles,
      badge: isEn ? 'Hot' : 'Clés',
    },
    {
      id: 'audience' as NavSection,
      label: isEn ? 'Devices & Geography' : 'Appareils & Pays',
      icon: Laptop,
      badge: null,
    },
    {
      id: 'logs' as NavSection,
      label: isEn ? 'Live PostHog Stream' : 'Flux Direct PostHog',
      icon: Flame,
      badge: 'Live',
    },
  ];

  return (
    <div className="min-h-screen bg-bg text-fg selection:bg-blue-500/20 font-sans flex flex-col lg:flex-row">
      {/* =========================================================================
          DESKTOP SIDEBAR
      ========================================================================= */}
      <aside
        className={`hidden lg:flex flex-col shrink-0 sticky top-0 h-screen z-30 bg-bg-elevated border-r border-line transition-all duration-300 ${
          sidebarCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {/* Brand & Header */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-line">
          <Link
            href={isEn ? '/' : '/fr'}
            className="flex items-center gap-3 overflow-hidden group"
            title={isEn ? 'Back to portfolio' : 'Retour au portfolio'}
          >
            <div className="p-1.5 rounded-[12px] bg-card-ring border border-line group-hover:border-white/20 transition-colors shrink-0">
              <Image
                src="/logo-icon.png"
                alt="ALSG"
                width={26}
                height={26}
                className="w-5 h-auto object-contain"
              />
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col min-w-0">
                <span className="font-heading text-sm font-bold text-white tracking-tight truncate">
                  ALSG Analytics
                </span>
                <span className="text-[10px] font-mono text-muted tracking-wider uppercase">
                  PostHog Cloud
                </span>
              </div>
            )}
          </Link>

          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1.5 rounded-[8px] hover:bg-white/[0.05] text-muted hover:text-white transition-colors"
            title={sidebarCollapsed ? (isEn ? 'Expand sidebar' : 'Agrandir') : isEn ? 'Collapse sidebar' : 'Réduire'}
          >
            {sidebarCollapsed ? (
              <ChevronRight className="w-4 h-4" />
            ) : (
              <ChevronLeft className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Live Status Pill in Sidebar */}
        <div className="p-3 border-b border-line/60">
          <div
            className={`flex items-center rounded-[12px] bg-card-ring/70 border border-line p-2.5 ${
              sidebarCollapsed ? 'justify-center' : 'justify-between'
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              {!sidebarCollapsed && (
                <span className="text-[11px] font-mono text-emerald-400">
                  {data.activeVisitors} {isEn ? 'active online' : 'en ligne'}
                </span>
              )}
            </div>
            {!sidebarCollapsed && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950/60 text-blue-400 border border-blue-800/40">
                #{data.projectId}
              </span>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-3 py-4 space-y-1.5 overflow-y-auto no-scrollbar">
          {!sidebarCollapsed && (
            <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-wider text-muted/60">
              {isEn ? 'Dashboard Navigation' : 'Navigation Métriques'}
            </div>
          )}

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                title={sidebarCollapsed ? item.label : undefined}
                className={`w-full flex items-center rounded-[12px] text-xs font-mono transition-all group ${
                  sidebarCollapsed ? 'justify-center p-2.5' : 'justify-between px-3.5 py-2.5'
                } ${
                  isActive
                    ? 'bg-white text-black font-semibold shadow-glow-lift'
                    : 'text-muted hover:text-white hover:bg-card-ring'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-black' : 'text-muted group-hover:text-white'
                    }`}
                  />
                  {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
                </div>

                {!sidebarCollapsed && item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                      isActive
                        ? 'bg-black/10 text-black'
                        : item.badge === 'Live' || item.badge === 'Hot'
                        ? 'bg-rose-950/40 text-rose-300 border border-rose-800/40'
                        : 'bg-white/10 text-muted'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User Card & Logout Bottom */}
        <div className="p-3 border-t border-line space-y-2">
          {/* Quick link to live portfolio */}
          <Link
            href={isEn ? '/' : '/fr'}
            target="_blank"
            className={`w-full flex items-center rounded-[10px] text-xs text-muted hover:text-white hover:bg-white/[0.04] transition-colors ${
              sidebarCollapsed ? 'justify-center p-2' : 'gap-2 px-3 py-2'
            }`}
            title={isEn ? 'View Live Portfolio' : 'Voir le portfolio'}
          >
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
            {!sidebarCollapsed && (
              <span className="font-mono text-[11px] truncate">
                {isEn ? 'Live Portfolio' : 'Voir le portfolio'}
              </span>
            )}
          </Link>

          {/* User profile & Logout */}
          <div
            className={`flex items-center rounded-[12px] bg-card-ring/80 p-2 border border-line ${
              sidebarCollapsed ? 'justify-center' : 'justify-between'
            }`}
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-[8px] bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center font-bold text-[11px] text-white shrink-0 font-heading">
                LA
              </div>
              {!sidebarCollapsed && (
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-medium text-white truncate max-w-[120px]">
                    {userEmail}
                  </span>
                  <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-2.5 h-2.5" /> {isEn ? 'Admin Owner' : 'Propriétaire'}
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={handleLogout}
              disabled={isPendingLogout}
              className="p-1.5 rounded-[8px] hover:bg-rose-950/40 text-muted hover:text-rose-400 transition-colors"
              title={isEn ? 'Sign out' : 'Déconnexion'}
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </aside>

      {/* =========================================================================
          MOBILE DRAWER / OVERLAY
      ========================================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop blur */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
          />

          <div className="relative w-72 max-w-[85vw] bg-bg-elevated h-full border-r border-line flex flex-col z-10 p-4">
            <div className="flex items-center justify-between pb-4 border-b border-line">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo-icon.png"
                  alt="ALSG"
                  width={22}
                  height={22}
                  className="w-5 h-auto object-contain"
                />
                <span className="font-heading text-sm font-bold text-white">
                  ALSG Analytics
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-muted hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-4 space-y-1.5 flex-1 overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-[12px] text-xs font-mono transition-colors ${
                      isActive
                        ? 'bg-white text-black font-semibold'
                        : 'text-muted hover:text-white hover:bg-card-ring'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-950/60 text-blue-300">
                        {item.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-line space-y-2">
              <button
                onClick={handleLogout}
                disabled={isPendingLogout}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-[10px] bg-rose-950/30 border border-rose-800/40 text-rose-300 text-xs font-mono"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>{isPendingLogout ? 'Sortie...' : 'Déconnexion'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MAIN CONTENT AREA
      ========================================================================= */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header / Control Bar */}
        <header className="sticky top-0 z-20 bg-bg/85 backdrop-blur-xl border-b border-line px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-[10px] bg-card-ring border border-line text-muted hover:text-white"
            >
              <Menu className="w-4 h-4" />
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-heading text-base sm:text-lg font-bold text-white tracking-tight">
                  {navItems.find((n) => n.id === activeSection)?.label}
                </h1>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-950/40 border border-blue-800/30 text-blue-400 text-[10px] font-mono">
                  <CheckCircle2 className="w-3 h-3 text-blue-400" />
                  PostHog
                </span>
              </div>
            </div>
          </div>

          {/* Right Controls: Range + Refresh */}
          <div className="flex items-center gap-2">
            {/* Range Pills */}
            <div className="inline-flex items-center p-1 rounded-[12px] bg-card-ring border border-line">
              {(['24h', '7d', '30d', '90d'] as TimeRange[]).map((r) => {
                const labelMap = {
                  '24h': '24h',
                  '7d': '7j',
                  '30d': '30j',
                  '90d': '90j',
                };
                const active = currentRange === r;
                return (
                  <button
                    key={r}
                    onClick={() => handleRangeChange(r)}
                    disabled={isRefreshing}
                    className={`px-2.5 sm:px-3 py-1 rounded-[8px] text-xs font-mono transition-all ${
                      active
                        ? 'bg-white text-black font-semibold shadow-sm'
                        : 'text-muted hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {labelMap[r]}
                  </button>
                );
              })}
            </div>

            {/* Refresh Button */}
            <button
              onClick={handleManualRefresh}
              disabled={isRefreshing}
              className="p-2 rounded-[12px] bg-card-ring hover:bg-bg-soft border border-line text-muted hover:text-white transition-all disabled:opacity-50"
              title={isEn ? 'Refresh data' : 'Actualiser les données'}
            >
              <RefreshCw
                className={`w-4 h-4 ${isRefreshing ? 'animate-spin text-blue-400' : ''}`}
              />
            </button>
          </div>
        </header>

        {/* Dashboard Body Content */}
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 space-y-6 max-w-7xl w-full">
          {/* PostHog API Permission Alert Banner */}
          {data.apiError && (
            <div className="rounded-[16px] bg-rose-950/30 border border-rose-800/50 p-4 sm:p-5 flex items-start gap-3.5">
              <div className="p-2 rounded-[10px] bg-rose-500/10 border border-rose-500/20 text-rose-400 shrink-0 mt-0.5">
                <Flame className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-xs sm:text-sm font-semibold text-rose-200">
                    {isEn ? 'PostHog API Permission Denied (403 Forbidden)' : 'Autorisation PostHog Refusée (403 Forbidden)'}
                  </h3>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-900/60 text-rose-300 border border-rose-700/50">
                    query:read requis
                  </span>
                </div>
                <p className="text-xs text-rose-300/80 mt-1.5 leading-relaxed">
                  {isEn
                    ? `Your POSTHOG_PERSONAL_API_KEY does not have the 'query:read' scope. PostHog responded: "${data.apiError}". Please generate a new key on PostHog with 'query:read' enabled and update your .env.`
                    : `Votre clé POSTHOG_PERSONAL_API_KEY n'a pas la permission 'query:read'. Réponse de PostHog : « ${data.apiError} ». C'est pour cela que des données de référence sont affichées.`}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <a
                    href="https://us.posthog.com/me/settings"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-rose-900/50 hover:bg-rose-800/60 text-rose-200 border border-rose-700/60 transition-colors"
                  >
                    <span>Générer une clé avec query:read sur PostHog</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          )}
          {/* =====================================================================
              SECTION 1: OVERVIEW (5 KPIS + EVOLUTION CHART + TOP HIGHLIGHTS)
          ===================================================================== */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              {/* 5 KPI Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
                {/* Pageviews */}
                <div className="card-thick">
                  <div className="card-thick-inner p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-muted mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider">
                        {isEn ? 'Pageviews' : 'Pages Vues'}
                      </span>
                      <Eye className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {data.overview.pageviews.value.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[11px] font-mono">
                        <span className="text-emerald-400 inline-flex items-center">
                          <ArrowUpRight className="w-3 h-3" />+{data.overview.pageviews.changePercent}%
                        </span>
                        <span className="text-muted/60">{isEn ? 'trend' : 'croissance'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Unique Visitors */}
                <div className="card-thick">
                  <div className="card-thick-inner p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-muted mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider">
                        {isEn ? 'Unique Visitors' : 'Visiteurs'}
                      </span>
                      <Users className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {data.overview.visitors.value.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[11px] font-mono">
                        <span className="text-emerald-400 inline-flex items-center">
                          <ArrowUpRight className="w-3 h-3" />+{data.overview.visitors.changePercent}%
                        </span>
                        <span className="text-muted/60">{isEn ? 'distinct' : 'uniques'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Visits / Sessions */}
                <div className="card-thick">
                  <div className="card-thick-inner p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-muted mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider">
                        {isEn ? 'Visits' : 'Sessions'}
                      </span>
                      <MousePointerClick className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {data.overview.visits.value.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[11px] font-mono">
                        <span className="text-emerald-400 inline-flex items-center">
                          <ArrowUpRight className="w-3 h-3" />+{data.overview.visits.changePercent}%
                        </span>
                        <span className="text-muted/60">sessions</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bounce Rate */}
                <div className="card-thick">
                  <div className="card-thick-inner p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-muted mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider">
                        {isEn ? 'Bounce Rate' : 'Taux Rebond'}
                      </span>
                      <Activity className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {data.overview.bounceRate.value}%
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[11px] font-mono">
                        <span className="text-emerald-400 inline-flex items-center">
                          <ArrowDownRight className="w-3 h-3" />{data.overview.bounceRate.changePercent}%
                        </span>
                        <span className="text-muted/60">{isEn ? 'healthy' : 'optimal'}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Duration */}
                <div className="card-thick col-span-2 sm:col-span-1">
                  <div className="card-thick-inner p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-muted mb-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider">
                        {isEn ? 'Visit Duration' : 'Temps Moyen'}
                      </span>
                      <Timer className="w-4 h-4 text-rose-400" />
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-bold font-heading text-white">
                        {data.overview.avgTime.formatted}
                      </div>
                      <div className="flex items-center gap-1 mt-1 text-[11px] font-mono text-muted/80">
                        <span>{isEn ? 'Engaged reading' : 'Session active'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Traffic Chart */}
              <div className="card-thick">
                <div className="card-thick-inner p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                    <div>
                      <h2 className="text-sm sm:text-base font-semibold text-white flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-blue-400" />
                        {isEn ? 'Trafic Progression (PostHog)' : 'Progression du Trafic (PostHog)'}
                      </h2>
                      <p className="text-xs text-muted font-mono mt-0.5">
                        {isEn ? 'Telemetry breakdown by interval' : 'Évolution des flux de visiteurs'}
                      </p>
                    </div>

                    {/* Chart Mode Toggle */}
                    <div className="inline-flex items-center p-1 rounded-[10px] bg-bg-soft border border-line text-xs font-mono self-start sm:self-auto">
                      <button
                        onClick={() => setChartMode('both')}
                        className={`px-2.5 py-1 rounded-[6px] transition-colors ${
                          chartMode === 'both'
                            ? 'bg-white/10 text-white font-medium'
                            : 'text-muted hover:text-white'
                        }`}
                      >
                        {isEn ? 'Both' : 'Tous'}
                      </button>
                      <button
                        onClick={() => setChartMode('pageviews')}
                        className={`px-2.5 py-1 rounded-[6px] transition-colors flex items-center gap-1.5 ${
                          chartMode === 'pageviews'
                            ? 'bg-blue-500/20 text-blue-300 font-medium'
                            : 'text-muted hover:text-white'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                        {isEn ? 'Views' : 'Vues'}
                      </button>
                      <button
                        onClick={() => setChartMode('visitors')}
                        className={`px-2.5 py-1 rounded-[6px] transition-colors flex items-center gap-1.5 ${
                          chartMode === 'visitors'
                            ? 'bg-purple-500/20 text-purple-300 font-medium'
                            : 'text-muted hover:text-white'
                        }`}
                      >
                        <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
                        {isEn ? 'Visitors' : 'Visiteurs'}
                      </button>
                    </div>
                  </div>

                  {/* SVG Chart */}
                  <div className="relative w-full h-[220px] select-none">
                    <svg
                      viewBox={`0 0 ${chartWidth} ${chartHeight}`}
                      className="w-full h-full overflow-visible"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id="pvGradientPosthog" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="visGradientPosthog" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Reference gridlines */}
                      {[0.25, 0.5, 0.75, 1].map((ratio) => {
                        const y = chartHeight - paddingY - ratio * (chartHeight - paddingY * 2);
                        return (
                          <line
                            key={ratio}
                            x1={paddingX}
                            y1={y}
                            x2={chartWidth - paddingX}
                            y2={y}
                            stroke="rgba(255,255,255,0.05)"
                            strokeDasharray="4 4"
                          />
                        );
                      })}

                      {/* Area */}
                      {(chartMode === 'both' || chartMode === 'pageviews') && (
                        <path d={pvAreaPath} fill="url(#pvGradientPosthog)" />
                      )}

                      {/* Polyline Views */}
                      {(chartMode === 'both' || chartMode === 'pageviews') && (
                        <path
                          d={pvPath}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}

                      {/* Polyline Visitors */}
                      {(chartMode === 'both' || chartMode === 'visitors') && (
                        <path
                          d={visPath}
                          fill="none"
                          stroke="#a855f7"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      )}

                      {/* Interactive hover points */}
                      {points.map((p, i) => {
                        const { x, y } = getCoordinates(p.pageviews, i);
                        const isHovered = hoveredPoint?.timestamp === p.timestamp;
                        return (
                          <g key={i} className="cursor-pointer">
                            <rect
                              x={x - 16}
                              y={0}
                              width={32}
                              height={chartHeight}
                              fill="transparent"
                              onMouseEnter={() => setHoveredPoint(p)}
                            />
                            {isHovered && (
                              <>
                                <line
                                  x1={x}
                                  y1={paddingY}
                                  x2={x}
                                  y2={chartHeight - paddingY}
                                  stroke="rgba(255, 255, 255, 0.3)"
                                  strokeWidth="1"
                                  strokeDasharray="3 3"
                                />
                                <circle cx={x} cy={y} r="5" fill="#3b82f6" stroke="#fff" strokeWidth="2" />
                              </>
                            )}
                          </g>
                        );
                      })}
                    </svg>

                    {hoveredPoint && (
                      <div
                        className="absolute top-2 right-2 bg-bg-elevated/95 backdrop-blur-md border border-line rounded-[10px] p-2.5 text-xs shadow-xl pointer-events-none font-mono"
                        style={{ zIndex: 10 }}
                      >
                        <div className="text-muted text-[10px] uppercase font-semibold mb-1">
                          {hoveredPoint.label}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-blue-400 font-bold">
                            {hoveredPoint.pageviews} {isEn ? 'views' : 'vues'}
                          </span>
                          <span className="text-purple-400 font-bold">
                            {hoveredPoint.visitors} {isEn ? 'visitors' : 'visiteurs'}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-center text-[11px] font-mono text-muted/60 pt-3 border-t border-line mt-2">
                    <span>{points[0]?.label || ''}</span>
                    <span>{points[Math.floor(points.length / 2)]?.label || ''}</span>
                    <span>{points[points.length - 1]?.label || ''}</span>
                  </div>
                </div>
              </div>

              {/* 2-Column Quick Highlights */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Top 3 Pages */}
                <div className="card-thick">
                  <div className="card-thick-inner p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Globe className="w-4 h-4 text-blue-400" />
                        {isEn ? 'Top Visited Pages' : 'Pages Populaires'}
                      </h3>
                      <button
                        onClick={() => setActiveSection('pages')}
                        className="text-[11px] font-mono text-blue-400 hover:underline"
                      >
                        {isEn ? 'View all →' : 'Voir tout →'}
                      </button>
                    </div>
                    <div className="space-y-3">
                      {data.topPages.slice(0, 4).map((page, idx) => (
                        <div key={idx}>
                          <div className="flex items-center justify-between text-xs mb-1 font-mono">
                            <span className="text-white truncate font-medium">{page.name}</span>
                            <span className="text-muted shrink-0">
                              {page.value} ({page.percentage}%)
                            </span>
                          </div>
                          <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                            <div
                              className="h-full bg-blue-500 rounded-full"
                              style={{ width: `${page.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Conversion Signals */}
                <div className="card-thick">
                  <div className="card-thick-inner p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        {isEn ? 'Direct Conversions' : 'Signaux de Contact'}
                      </h3>
                      <button
                        onClick={() => setActiveSection('conversions')}
                        className="text-[11px] font-mono text-purple-400 hover:underline"
                      >
                        {isEn ? 'View all →' : 'Détails →'}
                      </button>
                    </div>
                    <div className="space-y-2.5">
                      {data.events.slice(0, 3).map((evt, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-[10px] bg-bg-soft/70 border border-line"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span className="text-xs text-white font-medium">{evt.label}</span>
                          </div>
                          <span className="font-mono text-xs font-bold text-white">
                            {evt.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              SECTION 2: PAGES & TRAFIC
          ===================================================================== */}
          {activeSection === 'pages' && (
            <div className="card-thick">
              <div className="card-thick-inner p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-base font-semibold text-white">
                      {isEn ? 'Routes and Pages Breakdown' : 'Analyse Complète des Chemins'}
                    </h2>
                    <p className="text-xs text-muted font-mono mt-0.5">
                      {isEn
                        ? 'Total volume of pageview hits recorded by PostHog'
                        : 'Volume total des pages vues enregistrées par PostHog'}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-blue-400">
                    {data.topPages.length} {isEn ? 'tracked paths' : 'chemins suivis'}
                  </span>
                </div>

                <div className="space-y-4">
                  {data.topPages.map((page, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-[12px] bg-bg-soft/50 border border-line hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs mb-2">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="font-mono text-muted/60 text-xs w-5 font-bold">
                            #{idx + 1}
                          </span>
                          <span className="font-mono text-white font-semibold text-sm truncate">
                            {page.name}
                          </span>
                          {page.label && (
                            <span className="text-xs text-muted truncate hidden sm:inline">
                              · {page.label}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 shrink-0 font-mono">
                          <span className="text-white font-bold">{page.value} vues</span>
                          <span className="px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 text-[11px] font-semibold">
                            {page.percentage}%
                          </span>
                        </div>
                      </div>
                      <div className="h-2 w-full bg-white/[0.04] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-indigo-500 rounded-full"
                          style={{ width: `${page.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              SECTION 3: SOURCES & ACQUISITION
          ===================================================================== */}
          {activeSection === 'referrers' && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 card-thick">
                <div className="card-thick-inner p-6">
                  <h2 className="text-base font-semibold text-white mb-1">
                    {isEn ? 'Traffic Acquisition Channels' : 'Canaux d’Acquisition de Trafic'}
                  </h2>
                  <p className="text-xs text-muted font-mono mb-6">
                    {isEn ? 'Where your visitors come from' : 'D’où proviennent vos visiteurs'}
                  </p>

                  <div className="space-y-4">
                    {data.topReferrers.map((ref, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-[12px] bg-bg-soft/50 border border-line hover:border-white/10 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs mb-2">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-muted/60 w-5">#{idx + 1}</span>
                            <span className="font-semibold text-white">{ref.name}</span>
                          </div>
                          <div className="flex items-center gap-3 font-mono">
                            <span className="text-white font-bold">{ref.value} visiteurs</span>
                            <span className="px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 text-[11px]">
                              {ref.percentage}%
                            </span>
                          </div>
                        </div>
                        <div className="h-2 w-full bg-white/[0.04] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                            style={{ width: `${ref.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Context side card */}
              <div className="card-thick">
                <div className="card-thick-inner p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">
                      {isEn ? 'Acquisition Insights' : 'Analyse des Canaux'}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {isEn
                        ? 'LinkedIn and GitHub remain top-tier referral pipelines. Direct traffic corresponds to repeat visits and recruiters accessing via your resume link.'
                        : 'LinkedIn et GitHub génèrent un trafic qualifié de développeurs et de recruteurs. Le trafic direct reflète les consultations directes depuis votre CV.'}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line space-y-3 font-mono text-xs">
                    <div className="p-3 rounded-[10px] bg-purple-950/20 border border-purple-800/30">
                      <div className="text-purple-300 font-semibold mb-0.5">Top Canal Pro</div>
                      <div className="text-muted text-[11px]">LinkedIn (posts & réseau)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              SECTION 4: CONVERSIONS & LEADS
          ===================================================================== */}
          {activeSection === 'conversions' && (
            <div className="space-y-6">
              <div className="card-thick">
                <div className="card-thick-inner p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-base font-semibold text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-emerald-400" />
                        {isEn ? 'High Intent Conversion Events' : 'Actions Clés & Objectifs de Lead'}
                      </h2>
                      <p className="text-xs text-muted font-mono mt-0.5">
                        {isEn
                          ? 'Tracked interactions for CV downloads, contact forms and WhatsApp chats'
                          : 'Interactions critiques pour le recrutement et les prises de contact'}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.events.map((evt, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-[14px] bg-bg-soft/60 border border-line flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-[10px] bg-card-ring border border-line flex items-center justify-center font-bold text-white text-xs">
                            ⚡
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-white">{evt.label}</div>
                            <div className="text-[10px] font-mono text-muted">
                              event: {evt.event}
                            </div>
                          </div>
                        </div>

                        <div className="text-right font-mono">
                          <span className="text-lg font-bold text-white">{evt.count}</span>
                          <span className="text-[10px] text-muted block uppercase">déclenchements</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              SECTION 5: AUDIENCE, DEVICES & GÉOGRAPHIE
          ===================================================================== */}
          {activeSection === 'audience' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Devices */}
              <div className="card-thick">
                <div className="card-thick-inner p-5">
                  <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-blue-400" />
                    {isEn ? 'Devices' : 'Types d’Appareils'}
                  </h3>
                  <div className="space-y-3">
                    {data.devices.map((device, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-xs mb-1 font-mono">
                          <span className="text-white">{device.name}</span>
                          <span className="text-muted">{device.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-500 rounded-full"
                            style={{ width: `${device.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Browsers */}
              <div className="card-thick">
                <div className="card-thick-inner p-5">
                  <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-400" />
                    {isEn ? 'Browsers' : 'Navigateurs'}
                  </h3>
                  <div className="space-y-3">
                    {data.browsers.map((b, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-xs mb-1 font-mono">
                          <span className="text-white">{b.name}</span>
                          <span className="text-muted">{b.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-500 rounded-full"
                            style={{ width: `${b.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Countries */}
              <div className="card-thick md:col-span-2 lg:col-span-1">
                <div className="card-thick-inner p-5">
                  <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-emerald-400" />
                    {isEn ? 'Top Countries' : 'Origine Géographique'}
                  </h3>
                  <div className="space-y-3">
                    {data.topCountries.map((c, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between text-xs mb-1 font-mono">
                          <span className="text-white">{c.name}</span>
                          <span className="text-muted">{c.percentage}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500 rounded-full"
                            style={{ width: `${c.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =====================================================================
              SECTION 6: LIVE POSTHOG STREAM
          ===================================================================== */}
          {activeSection === 'logs' && (
            <div className="card-thick">
              <div className="card-thick-inner p-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-base font-semibold text-white flex items-center gap-2">
                      <Flame className="w-4 h-4 text-rose-400" />
                      {isEn ? 'Live PostHog Ingestion Stream' : 'Flux d’Événements en Temps Réel'}
                    </h2>
                    <p className="text-xs text-muted font-mono mt-0.5">
                      {isEn
                        ? 'Recent interactions dispatched to PostHog Cloud US'
                        : 'Dernières télémétries enregistrées sur PostHog Cloud US'}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 text-xs font-mono flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Connecté
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs">
                  {data.recentLogs.map((log) => (
                    <div
                      key={log.id}
                      className="p-3.5 rounded-[12px] bg-bg-soft/60 border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-2 py-0.5 rounded bg-blue-950/50 text-blue-300 text-[10px] font-semibold border border-blue-800/30">
                          {log.event}
                        </span>
                        <span className="text-white font-medium">{log.url}</span>
                        {log.country && (
                          <span className="text-muted/70 text-[11px] hidden sm:inline">
                            · {log.country}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-3 text-muted/60 text-[11px] self-end sm:self-auto">
                        {log.device && <span>{log.device}</span>}
                        <span>{log.timestamp}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
