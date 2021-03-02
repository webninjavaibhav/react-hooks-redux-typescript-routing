/**
 * Get Year based on release_date
 * @param release_date
 */
export const getYear = (release_date: string) => (release_date ? release_date.split('-')[0] : '');
