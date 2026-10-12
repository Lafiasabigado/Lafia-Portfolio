export type TimeRange = '24h' | '7d' | '30d' | '90d';

export interface StatMetric {
  value: number;
  prev: number;
  changePercent: number;
}

export interface OverviewStats {
  pageviews: StatMetric;
  visitors: StatMetric;
  visits: StatMetric;
  bounceRate: {
    value: number;
    prev: number;
    changePercent: number;
  };
  avgTime: {
    seconds: number;
    formatted: string;
  };
}

export interface TimeSeriesPoint {
  label: string;
  timestamp: number;
  pageviews: number;
  visitors: number;
}

export interface MetricItem {
  name: string;
  label?: string;
  value: number;
  percentage: number;
}

export interface CustomEventItem {
  event: string;
  label: string;
  count: number;
  category: 'engagement' | 'contact' | 'social';
}

export interface RecentEventLog {
  id: string;
  event: string;
  timestamp: string;
  url?: string;
  country?: string;
  device?: string;
}

export interface DashboardData {
  range: TimeRange;
  isLivePostHog: boolean;
  projectId: string;
  posthogHost: string;
  activeVisitors: number;
  overview: OverviewStats;
  timeSeries: TimeSeriesPoint[];
  topPages: MetricItem[];
  topReferrers: MetricItem[];
  topCountries: MetricItem[];
  devices: MetricItem[];
  browsers: MetricItem[];
  events: CustomEventItem[];
  recentLogs: RecentEventLog[];
  updatedAt: string;
  apiError?: string;
}

const EVENT_META: Record<string, { labelFr: string; labelEn: string; category: CustomEventItem['category'] }> = {
  cv_download: { labelFr: 'Téléchargement de CV', labelEn: 'CV Downloads', category: 'engagement' },
  whatsapp_click: { labelFr: 'Clics WhatsApp', labelEn: 'WhatsApp Clicks', category: 'contact' },
  contact_form_submit: { labelFr: 'Messages envoyés', labelEn: 'Contact Submissions', category: 'contact' },
  contact_form_start: { labelFr: 'Formulaires commencés', labelEn: 'Contact Form Started', category: 'contact' },
  project_open: { labelFr: 'Projets consultés', labelEn: 'Projects Viewed', category: 'engagement' },
  github_click: { labelFr: 'Visites GitHub', labelEn: 'GitHub Clicks', category: 'social' },
  linkedin_click: { labelFr: 'Profil LinkedIn', labelEn: 'LinkedIn Clicks', category: 'social' },
  x_click: { labelFr: 'Profil X / Twitter', labelEn: 'X / Twitter Clicks', category: 'social' },
  hero_cta_click: { labelFr: 'Clics CTA Hero', labelEn: 'Hero CTA Clicks', category: 'engagement' },
  language_switch: { labelFr: 'Changement de langue', labelEn: 'Language Switch', category: 'engagement' },
};

function getIntervalClause(range: TimeRange): string {
  switch (range) {
    case '24h':
      return 'interval 24 hour';
    case '7d':
      return 'interval 7 day';
    case '30d':
      return 'interval 30 day';
    case '90d':
      return 'interval 90 day';
  }
}

function getPrevIntervalClause(range: TimeRange): { start: string; end: string } {
  switch (range) {
    case '24h':
      return { start: 'interval 48 hour', end: 'interval 24 hour' };
    case '7d':
      return { start: 'interval 14 day', end: 'interval 7 day' };
    case '30d':
      return { start: 'interval 60 day', end: 'interval 30 day' };
    case '90d':
      return { start: 'interval 180 day', end: 'interval 90 day' };
  }
}

function formatRelativeTime(dateStr: string, locale: 'fr' | 'en'): string {
  try {
    const diffMs = Date.now() - new Date(dateStr).getTime();
    const diffMins = Math.floor(diffMs / (60 * 1000));
    const diffHours = Math.floor(diffMs / (3600 * 1000));
    const diffDays = Math.floor(diffMs / (86400 * 1000));

    if (diffMins < 1) return locale === 'en' ? 'Just now' : 'À l’instant';
    if (diffMins < 60) return locale === 'en' ? `${diffMins}m ago` : `Il y a ${diffMins} min`;
    if (diffHours < 24) return locale === 'en' ? `${diffHours}h ago` : `Il y a ${diffHours} h`;
    return locale === 'en' ? `${diffDays}d ago` : `Il y a ${diffDays} j`;
  } catch {
    return dateStr;
  }
}

async function runHogQLQuery(
  query: string,
  projectId: string,
  apiKey: string,
  host: string
): Promise<{ results: any[] | null; error?: string }> {
  try {
    const res = await fetch(`${host.replace(/\/$/, '')}/api/projects/${projectId}/query/`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: {
          kind: 'HogQLQuery',
          query,
        },
      }),
      cache: 'no-store',
    });

    if (!res.ok) {
      const errText = await res.text();
      let msg = `PostHog API Error (${res.status} ${res.statusText})`;
      try {
        const errJson = JSON.parse(errText);
        if (errJson.detail) {
          msg = `${msg}: ${errJson.detail}`;
        }
      } catch {
        // fallback
      }
      return { results: null, error: msg };
    }

    const data = await res.json();
    return { results: data.results || [] };
  } catch (e: any) {
    return { results: null, error: e?.message || 'Network error' };
  }
}

/**
 * Builds clean real timeline dates (initialized to 0) to guarantee a stable chart
 */
function buildRealTimeSlots(range: TimeRange, locale: 'fr' | 'en'): TimeSeriesPoint[] {
  const isEn = locale === 'en';
  const now = Date.now();
  const points: TimeSeriesPoint[] = [];

  if (range === '24h') {
    for (let i = 23; i >= 0; i--) {
      const pointTime = now - i * 3600 * 1000;
      const hour = new Date(pointTime).getHours();
      points.push({
        label: `${hour.toString().padStart(2, '0')}:00`,
        timestamp: pointTime,
        pageviews: 0,
        visitors: 0,
      });
    }
  } else {
    const days = range === '7d' ? 7 : range === '30d' ? 30 : 90;
    const step = range === '90d' ? 3 : 1;
    for (let i = days - 1; i >= 0; i -= step) {
      const pointTime = now - i * 86400 * 1000;
      const d = new Date(pointTime);
      const label = d.toLocaleDateString(isEn ? 'en-US' : 'fr-FR', {
        month: 'short',
        day: 'numeric',
      });
      points.push({
        label,
        timestamp: pointTime,
        pageviews: 0,
        visitors: 0,
      });
    }
  }
  return points;
}

export async function getPostHogDashboardData(
  range: TimeRange = '7d',
  locale: 'fr' | 'en' = 'fr'
): Promise<DashboardData> {
  const apiKey = process.env.POSTHOG_PERSONAL_API_KEY;
  const projectId = process.env.POSTHOG_PROJECT_ID || '660589';
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

  const emptyOverview: OverviewStats = {
    pageviews: { value: 0, prev: 0, changePercent: 0 },
    visitors: { value: 0, prev: 0, changePercent: 0 },
    visits: { value: 0, prev: 0, changePercent: 0 },
    bounceRate: { value: 0, prev: 0, changePercent: 0 },
    avgTime: { seconds: 0, formatted: '0s' },
  };

  const emptyData: DashboardData = {
    range,
    isLivePostHog: Boolean(apiKey && projectId),
    projectId,
    posthogHost: host,
    activeVisitors: 0,
    overview: emptyOverview,
    timeSeries: buildRealTimeSlots(range, locale),
    topPages: [],
    topReferrers: [],
    topCountries: [],
    devices: [],
    browsers: [],
    events: [],
    recentLogs: [],
    updatedAt: new Date().toISOString(),
  };

  if (!apiKey || !projectId) {
    return {
      ...emptyData,
      apiError: 'POSTHOG_PERSONAL_API_KEY ou POSTHOG_PROJECT_ID manquant dans .env',
    };
  }

  const interval = getIntervalClause(range);
  const prevInterval = getPrevIntervalClause(range);

  try {
    // Parallel HogQL real queries
    const [
      statsRes,
      prevStatsRes,
      timeSeriesRes,
      pagesRes,
      referrersRes,
      devicesRes,
      browsersRes,
      countriesRes,
      customEventsRes,
      recentLogsRes,
      activeRes,
      bounceRateRes,
      avgDurationRes,
    ] = await Promise.allSettled([
      // 1. Current stats
      runHogQLQuery(
        `SELECT 
          countIf(event = '$pageview') as pageviews, 
          count(DISTINCT distinct_id) as visitors, 
          count(DISTINCT \`$session_id\`) as sessions
         FROM events 
         WHERE timestamp >= now() - ${interval}`,
        projectId,
        apiKey,
        host
      ),
      // 2. Previous period stats
      runHogQLQuery(
        `SELECT 
          countIf(event = '$pageview') as pageviews, 
          count(DISTINCT distinct_id) as visitors, 
          count(DISTINCT \`$session_id\`) as sessions
         FROM events 
         WHERE timestamp >= now() - ${prevInterval.start} 
           AND timestamp < now() - ${prevInterval.end}`,
        projectId,
        apiKey,
        host
      ),
      // 3. Time series
      range === '24h'
        ? runHogQLQuery(
            `SELECT 
              toHour(timestamp) as hr, 
              countIf(event = '$pageview') as pv, 
              count(DISTINCT distinct_id) as vis
             FROM events 
             WHERE timestamp >= now() - ${interval}
             GROUP BY hr 
             ORDER BY hr ASC`,
            projectId,
            apiKey,
            host
          )
        : runHogQLQuery(
            `SELECT 
              toDate(timestamp) as dt, 
              countIf(event = '$pageview') as pv, 
              count(DISTINCT distinct_id) as vis
             FROM events 
             WHERE timestamp >= now() - ${interval}
             GROUP BY dt 
             ORDER BY dt ASC`,
            projectId,
            apiKey,
            host
          ),
      // 4. Top Pages
      runHogQLQuery(
        `SELECT 
          coalesce(nullIf(properties.\`$pathname\`, ''), properties.\`$current_url\`, '/') as page, 
          count() as cnt 
         FROM events 
         WHERE event = '$pageview' AND timestamp >= now() - ${interval}
         GROUP BY page 
         ORDER BY cnt DESC 
         LIMIT 10`,
        projectId,
        apiKey,
        host
      ),
      // 5. Top Referrers
      runHogQLQuery(
        `SELECT 
          coalesce(nullIf(properties.\`$referring_domain\`, ''), 'Direct / Bookmark') as ref, 
          count() as cnt 
         FROM events 
         WHERE event = '$pageview' AND timestamp >= now() - ${interval}
         GROUP BY ref 
         ORDER BY cnt DESC 
         LIMIT 10`,
        projectId,
        apiKey,
        host
      ),
      // 6. Devices
      runHogQLQuery(
        `SELECT 
          coalesce(nullIf(properties.\`$device_type\`, ''), 'Desktop') as dev, 
          count() as cnt 
         FROM events 
         WHERE timestamp >= now() - ${interval}
         GROUP BY dev 
         ORDER BY cnt DESC 
         LIMIT 6`,
        projectId,
        apiKey,
        host
      ),
      // 7. Browsers
      runHogQLQuery(
        `SELECT 
          coalesce(nullIf(properties.\`$browser\`, ''), 'Inconnu') as brw, 
          count() as cnt 
         FROM events 
         WHERE timestamp >= now() - ${interval}
         GROUP BY brw 
         ORDER BY cnt DESC 
         LIMIT 6`,
        projectId,
        apiKey,
        host
      ),
      // 8. Countries
      runHogQLQuery(
        `SELECT 
          coalesce(nullIf(properties.\`$geoip_country_name\`, ''), 'Non localisé') as country, 
          count() as cnt 
         FROM events 
         WHERE timestamp >= now() - ${interval}
         GROUP BY country 
         ORDER BY cnt DESC 
         LIMIT 8`,
        projectId,
        apiKey,
        host
      ),
      // 9. Custom Events (excluding internal posthog noise)
      runHogQLQuery(
        `SELECT 
          event, 
          count() as cnt 
         FROM events 
         WHERE event NOT IN ('$pageview', '$pageleave', '$identify', '$set', '$create_alias', '$feature_flag_called') 
           AND timestamp >= now() - ${interval}
         GROUP BY event 
         ORDER BY cnt DESC 
         LIMIT 12`,
        projectId,
        apiKey,
        host
      ),
      // 10. Recent event logs
      runHogQLQuery(
        `SELECT 
          uuid, 
          event, 
          timestamp, 
          properties.\`$pathname\`, 
          properties.\`$geoip_country_name\`, 
          properties.\`$device_type\`
         FROM events 
         ORDER BY timestamp DESC 
         LIMIT 15`,
        projectId,
        apiKey,
        host
      ),
      // 11. Active visitors in last 30 minutes
      runHogQLQuery(
        `SELECT count(DISTINCT distinct_id) as active_now 
         FROM events 
         WHERE timestamp >= now() - interval 30 minute`,
        projectId,
        apiKey,
        host
      ),
      // 12. Bounce rate: sessions with only 1 pageview
      runHogQLQuery(
        `SELECT 
          countIf(pv_count = 1) as bounced,
          count() as total_sessions
         FROM (
           SELECT \`$session_id\`, countIf(event = '$pageview') as pv_count
           FROM events
           WHERE timestamp >= now() - ${interval} AND \`$session_id\` != ''
           GROUP BY \`$session_id\`
         )`,
        projectId,
        apiKey,
        host
      ),
      // 13. Average session duration estimate
      runHogQLQuery(
        `SELECT avg(duration) as avg_dur
         FROM (
           SELECT \`$session_id\`, 
             dateDiff('second', min(timestamp), max(timestamp)) as duration
           FROM events
           WHERE timestamp >= now() - ${interval} AND \`$session_id\` != ''
           GROUP BY \`$session_id\`
           HAVING duration > 0
         )`,
        projectId,
        apiKey,
        host
      ),
    ]);

    // Check for API errors
    let capturedError: string | undefined;
    if (statsRes.status === 'fulfilled' && statsRes.value.error) {
      capturedError = statsRes.value.error;
    }

    // Parse Current Stats
    let pageviews = 0;
    let visitors = 0;
    let visits = 0;
    if (statsRes.status === 'fulfilled' && statsRes.value.results && statsRes.value.results.length > 0) {
      const row = statsRes.value.results[0];
      pageviews = Number(row[0] || 0);
      visitors = Number(row[1] || 0);
      visits = Math.max(Number(row[2] || 0), visitors > 0 ? 1 : 0);
    }

    // Parse Previous Stats for growth trends
    let prevPageviews = 0;
    let prevVisitors = 0;
    let prevVisits = 0;
    if (prevStatsRes.status === 'fulfilled' && prevStatsRes.value.results && prevStatsRes.value.results.length > 0) {
      const row = prevStatsRes.value.results[0];
      prevPageviews = Number(row[0] || 0);
      prevVisitors = Number(row[1] || 0);
      prevVisits = Number(row[2] || 0);
    }

    const calcChange = (current: number, prev: number) => {
      if (prev === 0) return current > 0 ? 100 : 0;
      return Math.round(((current - prev) / prev) * 100);
    };

    // Time Series merging with real points
    const timeSlots = buildRealTimeSlots(range, locale);
    if (timeSeriesRes.status === 'fulfilled' && timeSeriesRes.value.results && timeSeriesRes.value.results.length > 0) {
      const rows = timeSeriesRes.value.results;
      rows.forEach((r) => {
        const pv = Number(r[1] || 0);
        const vis = Number(r[2] || 0);
        if (range === '24h') {
          const hr = Number(r[0]);
          const target = `${hr.toString().padStart(2, '0')}:00`;
          const slot = timeSlots.find((s) => s.label === target);
          if (slot) {
            slot.pageviews = pv;
            slot.visitors = vis;
          }
        } else {
          const dateStr = String(r[0]).split('T')[0];
          const d = new Date(dateStr);
          const target = d.toLocaleDateString(locale === 'en' ? 'en-US' : 'fr-FR', {
            month: 'short',
            day: 'numeric',
          });
          const slot = timeSlots.find((s) => s.label === target);
          if (slot) {
            slot.pageviews = pv;
            slot.visitors = vis;
          }
        }
      });
    }

    // Top Pages
    let topPages: MetricItem[] = [];
    if (pagesRes.status === 'fulfilled' && pagesRes.value.results && pagesRes.value.results.length > 0) {
      const rows = pagesRes.value.results;
      const total = rows.reduce((acc, r) => acc + Number(r[1] || 0), 0) || 1;
      topPages = rows.map((r) => ({
        name: String(r[0]),
        value: Number(r[1]),
        percentage: Math.round((Number(r[1]) / total) * 100),
      }));
    }

    // Top Referrers
    let topReferrers: MetricItem[] = [];
    if (referrersRes.status === 'fulfilled' && referrersRes.value.results && referrersRes.value.results.length > 0) {
      const rows = referrersRes.value.results;
      const total = rows.reduce((acc, r) => acc + Number(r[1] || 0), 0) || 1;
      topReferrers = rows.map((r) => ({
        name: String(r[0]),
        value: Number(r[1]),
        percentage: Math.round((Number(r[1]) / total) * 100),
      }));
    }

    // Devices
    let devices: MetricItem[] = [];
    if (devicesRes.status === 'fulfilled' && devicesRes.value.results && devicesRes.value.results.length > 0) {
      const rows = devicesRes.value.results;
      const total = rows.reduce((acc, r) => acc + Number(r[1] || 0), 0) || 1;
      devices = rows.map((r) => ({
        name: String(r[0]),
        value: Number(r[1]),
        percentage: Math.round((Number(r[1]) / total) * 100),
      }));
    }

    // Browsers
    let browsers: MetricItem[] = [];
    if (browsersRes.status === 'fulfilled' && browsersRes.value.results && browsersRes.value.results.length > 0) {
      const rows = browsersRes.value.results;
      const total = rows.reduce((acc, r) => acc + Number(r[1] || 0), 0) || 1;
      browsers = rows.map((r) => ({
        name: String(r[0]),
        value: Number(r[1]),
        percentage: Math.round((Number(r[1]) / total) * 100),
      }));
    }

    // Countries
    let topCountries: MetricItem[] = [];
    if (countriesRes.status === 'fulfilled' && countriesRes.value.results && countriesRes.value.results.length > 0) {
      const rows = countriesRes.value.results;
      const total = rows.reduce((acc, r) => acc + Number(r[1] || 0), 0) || 1;
      topCountries = rows.map((r) => ({
        name: String(r[0]),
        value: Number(r[1]),
        percentage: Math.round((Number(r[1]) / total) * 100),
      }));
    }

    // Custom Events
    let events: CustomEventItem[] = [];
    if (customEventsRes.status === 'fulfilled' && customEventsRes.value.results && customEventsRes.value.results.length > 0) {
      const rows = customEventsRes.value.results;
      events = rows.map((r) => {
        const eventName = String(r[0]);
        const meta = EVENT_META[eventName] || {
          labelFr: eventName,
          labelEn: eventName,
          category: 'engagement' as const,
        };
        return {
          event: eventName,
          label: locale === 'en' ? meta.labelEn : meta.labelFr,
          count: Number(r[1]),
          category: meta.category,
        };
      });
    }

    // Recent Logs
    let recentLogs: RecentEventLog[] = [];
    if (recentLogsRes.status === 'fulfilled' && recentLogsRes.value.results && recentLogsRes.value.results.length > 0) {
      const rows = recentLogsRes.value.results;
      recentLogs = rows.map((r) => ({
        id: String(r[0]),
        event: String(r[1]),
        timestamp: formatRelativeTime(String(r[2]), locale),
        url: r[3] ? String(r[3]) : undefined,
        country: r[4] ? String(r[4]) : undefined,
        device: r[5] ? String(r[5]) : undefined,
      }));
    }

    // Active visitors
    let activeVisitors = 0;
    if (activeRes.status === 'fulfilled' && activeRes.value.results && activeRes.value.results.length > 0) {
      activeVisitors = Number(activeRes.value.results[0][0] || 0);
    }

    return {
      range,
      isLivePostHog: !capturedError,
      apiError: capturedError,
      projectId,
      posthogHost: host,
      activeVisitors,
      overview: {
        pageviews: {
          value: pageviews,
          prev: prevPageviews,
          changePercent: calcChange(pageviews, prevPageviews),
        },
        visitors: {
          value: visitors,
          prev: prevVisitors,
          changePercent: calcChange(visitors, prevVisitors),
        },
        visits: {
          value: visits,
          prev: prevVisits,
          changePercent: calcChange(visits, prevVisits),
        },
        bounceRate: (() => {
          let bounceVal = 0;
          if (bounceRateRes.status === 'fulfilled' && bounceRateRes.value.results && bounceRateRes.value.results.length > 0) {
            const bounced = Number(bounceRateRes.value.results[0][0] || 0);
            const totalSessions = Number(bounceRateRes.value.results[0][1] || 0);
            bounceVal = totalSessions > 0 ? Math.round((bounced / totalSessions) * 100) : 0;
          } else if (visits > 0 && pageviews > 0) {
            // Fallback estimation
            bounceVal = Math.round(Math.max(0, 100 - (pageviews / visits) * 30));
          }
          return { value: bounceVal, prev: 0, changePercent: 0 };
        })(),
        avgTime: (() => {
          let avgSec = 0;
          if (avgDurationRes.status === 'fulfilled' && avgDurationRes.value.results && avgDurationRes.value.results.length > 0) {
            avgSec = Math.round(Number(avgDurationRes.value.results[0][0] || 0));
          }
          const mins = Math.floor(avgSec / 60);
          const secs = avgSec % 60;
          const formatted = avgSec > 0
            ? (mins > 0 ? `${mins}m ${secs}s` : `${avgSec}s`)
            : '0s';
          return { seconds: avgSec, formatted };
        })(),
      },
      timeSeries: timeSlots,
      topPages,
      topReferrers,
      topCountries,
      devices,
      browsers,
      events,
      recentLogs,
      updatedAt: new Date().toISOString(),
    };
  } catch (error: any) {
    console.error('PostHog fetch error:', error);
    return {
      ...emptyData,
      apiError: error?.message || 'Erreur lors de la récupération des données',
    };
  }
}
