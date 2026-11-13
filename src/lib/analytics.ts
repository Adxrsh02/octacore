"use client";

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js" | "consent",
      action: string,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

export const CONSENT_STORAGE_KEY = "octacore_cookie_consent";

export type ConsentStatus = "accepted" | "declined" | "pending";

export function getCookieConsent(): ConsentStatus {
  if (typeof window === "undefined") return "pending";
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (value === "accepted" || value === "declined") return value;
  } catch {
    // ignore
  }
  return "pending";
}

export function setCookieConsent(status: "accepted" | "declined"): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, status);
    if (status === "accepted" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    } else if (status === "declined" && window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  } catch {
    // ignore
  }
}

export function trackEvent(eventName: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;

  // Check consent before dispatching tracking events
  if (getCookieConsent() !== "accepted") {
    return;
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  } else if (process.env.NODE_ENV === "development") {
    // In development without GA4, log for verification
    console.log(`[Analytics Event] ${eventName}:`, params);
  }
}

export function trackCallClick(branch: string, phone: string): void {
  trackEvent("call_click", {
    branch,
    phone,
    event_category: "engagement",
    event_label: `Call ${branch}`,
  });
}

export function trackWhatsAppClick(branch: string, number: string): void {
  trackEvent("whatsapp_click", {
    branch,
    whatsapp_number: number,
    event_category: "conversion",
    event_label: `WhatsApp ${branch}`,
  });
}

export function trackDirectionsClick(branch: string): void {
  trackEvent("directions_click", {
    branch,
    event_category: "engagement",
    event_label: `Directions to ${branch}`,
  });
}

export function trackFormSubmit(branch: string, fitnessGoal: string): void {
  trackEvent("generate_lead", {
    branch,
    fitness_goal: fitnessGoal,
    event_category: "conversion",
    event_label: `Lead submitted for ${branch}`,
    currency: "INR",
    value: 1,
  });
}
