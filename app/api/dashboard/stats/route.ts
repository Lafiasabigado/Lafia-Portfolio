import { NextRequest, NextResponse } from 'next/server';
import { getSession } from '@/lib/auth/session';
import { getPostHogDashboardData, type TimeRange } from '@/lib/analytics/posthog-api';

export async function GET(request: NextRequest) {
  // Strict authorization check
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const rangeParam = searchParams.get('range') as TimeRange | null;
  const localeParam = (searchParams.get('locale') as 'fr' | 'en' | null) || 'fr';

  const validRanges: TimeRange[] = ['24h', '7d', '30d', '90d'];
  const range: TimeRange = validRanges.includes(rangeParam as TimeRange)
    ? (rangeParam as TimeRange)
    : '7d';

  try {
    const data = await getPostHogDashboardData(range, localeParam);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to load dashboard data:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve analytics data' },
      { status: 500 }
    );
  }
}
