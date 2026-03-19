const EXTERNAL_OR_SPECIAL = /^(?:[a-z]+:|\/\/|#)/i;

export function withBasePath(url?: string): string | undefined {
  if (!url) return url;
  if (EXTERNAL_OR_SPECIAL.test(url)) return url;

  const base = import.meta.env.BASE_URL || '/';
  if (base === '/' || !url.startsWith('/')) return url;

  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (url === '/') return `${normalizedBase}/`;
  if (url.startsWith(`${normalizedBase}/`) || url === normalizedBase) return url;

  return `${normalizedBase}${url}`;
}

