# Muhammad Haseeb — Portfolio

A React + Vite portfolio website, deployed automatically to GitHub Pages.

## Run locally

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever changes are pushed to `main` (or when manually started from the Actions tab).

For the first deployment, open the repository's **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. Once the workflow succeeds, the portfolio will be available at:

https://haseeebmalik2426-oss.github.io/Portfolio/

The Vite base path is configured for this repository name (`/Portfolio/`). If you rename the repository, update `base` in `vite.config.js` accordingly.
