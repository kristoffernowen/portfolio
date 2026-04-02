/**
 * Highlights occurrences of a query string within text by wrapping
 * matches in a <mark> element.
 *
 * @param text  - The text to search within.
 * @param query - The search term to highlight.
 * @returns HTML string with matches wrapped in <mark>.
 */
export function highlight(text: string, query: string): string {
  if (!query.trim()) return text;

  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}
