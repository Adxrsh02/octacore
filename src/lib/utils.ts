import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function formatPhoneNumber(phone: string): string {
  // e.g. converts +919069819090 to +91 90698 19090
  return phone.replace(/(\+91)(\d{5})(\d{5})/, "$1 $2 $3");
}
