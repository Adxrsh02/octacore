import * as React from "react";

export interface JsonLdProps<T extends Record<string, unknown>> {
  data: T | T[];
}

/**
 * Safe JSON-LD script renderer that escapes '<' to '\u003c'
 * to prevent XSS / script termination vulnerabilities.
 */
export function JsonLd<T extends Record<string, unknown>>({ data }: JsonLdProps<T>) {
  const jsonString = JSON.stringify(data).replace(/</g, "\\u003c");

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonString }} />;
}

export default JsonLd;
