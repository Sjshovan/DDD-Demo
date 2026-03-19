# Divine Drive Detail Demo Site

Static Astro website for **Divine Drive Detail** with GitHub Pages deployment, referral-ready tracking hooks, configurable checkout/scheduling endpoints, and optional Google Analytics.

## Features

- Landing page with slogan, rotating Bible verses, mission pillars, services, plans, testimonials, partner nonprofits, and locations.
- Products page powered by local data (`src/data/products.ts`) with category filters.
- Scheduling page with API-ready form + fallback email flow.
- Login placeholder route (`/login`) for future subdomain/backend.
- Central config route (`/config`) backed by `src/config/site.ts`.
- Dark/light mode toggle.
- GitHub Actions workflow for Pages deployment.

## Local Development

```bash
npm install
npm run dev
```

## Configuration

Edit these files:


- `src/config/site.ts`
  - Brand, nav links, contact, service area
  - `analyticsConfig.googleAnalyticsMeasurementId`
  - Referral settings (`queryParam`, storage key, attribution days, tracking endpoint)
  - Checkout URL template + webhook endpoint
  - Scheduling endpoint + fallback email + calendar embed
- `src/data/*.ts`
  - Services, bundles, products, testimonials, locations, verses, nonprofit partners

## Affiliate / Referral Readiness

Built-in behavior:

- Captures `?ref=CODE` from URL
- Stores referral code in local storage for configurable attribution window
- Attaches referral code to configured links and hidden form fields
- Optional referral visit event endpoint

For production-grade payouts/fraud controls, connect a backend or affiliate SaaS.

## Google Analytics

Set your GA4 measurement ID in `src/config/site.ts`:

```ts
export const analyticsConfig = {
  googleAnalyticsMeasurementId: "G-XXXXXXXXXX",
};
```

## GitHub Pages Deployment

Workflow file: `.github/workflows/deploy.yml`

1. Push to `main`
2. In GitHub repo settings, set **Pages source** to **GitHub Actions**
3. Update these values as needed:
   - `SITE_URL` (for your domain or GitHub Pages URL)
   - `BASE_PATH` (`/repo-name` for project pages, `/` for `username.github.io` repos)

## Notes

- This site is static by design. Do not expose private API keys in frontend code.
- Keep only public IDs and public endpoints in this repo.
