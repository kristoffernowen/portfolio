/**
 * Represents a single entry in the search index.
 */
export interface SearchEntry {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

/**
 * Builds a flat searchable text string from a SearchEntry for
 * quick client-side filtering.
 */
export function buildSearchText(entry: SearchEntry): string {
  return [entry.title, entry.description, ...entry.tags].join(' ').toLowerCase();
}

/**
 * Filters search entries by a query string.
 *
 * @param entries - The list of entries to search.
 * @param query   - The search term.
 * @returns Filtered entries that match the query.
 */
export function searchEntries(entries: SearchEntry[], query: string): SearchEntry[] {
  const q = query.toLowerCase().trim();
  if (!q) return entries;
  return entries.filter((entry) => buildSearchText(entry).includes(q));
}
