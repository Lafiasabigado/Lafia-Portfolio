'use client';

import { useCallback, useRef } from 'react';

/**
 * Centralized analytics events tracked in Umami
 */
export const ANALYTICS_EVENTS = {
  CV_DOWNLOAD: 'cv_download',
  WHATSAPP_CLICK: 'whatsapp_click',
  GITHUB_CLICK: 'github_click',
  LINKEDIN_CLICK: 'linkedin_click',
  X_CLICK: 'x_click',
  HERO_CTA_CLICK: 'hero_cta_click',
  PROJECT_OPEN: 'project_open',
  LANGUAGE_SWITCH: 'language_switch',
  CONTACT_FORM_START: 'contact_form_start',
  CONTACT_FORM_SUBMIT: 'contact_form_submit',
  CONTACT_FORM_ERROR: 'contact_form_error',
} as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[keyof typeof ANALYTICS_EVENTS];

export type EventLocation = 'navbar' | 'hero' | 'contact' | 'footer' | 'floating' | 'about';

declare global {
  interface Window {
    umami?: {
      track: (
        event: string | Record<string, any>,
        data?: Record<string, any>
      ) => void;
    };
  }
}

/**
 * Safe helper to trigger Umami custom events from client-side code.
 * Never throws an error if Umami is blocked, disabled by user, or absent.
 */
export function track(event: AnalyticsEvent | string, data?: Record<string, any>): void {
  if (typeof window === 'undefined') return;
  try {
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track(event, data);
    }
  } catch {
    // Silently ignore tracking failures
  }
}

/**
 * Hook for contact form tracking:
 * - Triggers contact_form_start on first field focus (once per page load)
 * - Helpers to track successful submission or errors
 */
export function useContactFormAnalytics() {
  const hasStartedRef = useRef(false);

  const handleFormFocus = useCallback(() => {
    if (!hasStartedRef.current) {
      hasStartedRef.current = true;
      track(ANALYTICS_EVENTS.CONTACT_FORM_START, { location: 'contact' });
    }
  }, []);

  const handleFormSubmitSuccess = useCallback(() => {
    track(ANALYTICS_EVENTS.CONTACT_FORM_SUBMIT, { location: 'contact' });
  }, []);

  const handleFormSubmitError = useCallback((errorMsg?: string) => {
    track(ANALYTICS_EVENTS.CONTACT_FORM_ERROR, {
      location: 'contact',
      ...(errorMsg ? { error: errorMsg } : {}),
    });
  }, []);

  return {
    handleFormFocus,
    handleFormSubmitSuccess,
    handleFormSubmitError,
  };
}
