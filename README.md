# Loki Portfolio (React)

This is a React portfolio site (Create React App) adapted from the provided template.

## Quick start (VS Code)

1. Install **Node.js LTS** (includes npm).
2. Open this folder in **VS Code**.
3. Open the VS Code terminal and run:

```bash
npm install
npm start
```

The site will run at http://localhost:3000

## Customize (the only files you *must* edit)

- `src/Components/Portfolio.jsx` — hero section (name + headline + summary)
- `src/Components/About.jsx` — about + contact links
- `src/Components/Experience.jsx` — replace with your experience
- `src/Components/Education.jsx` — replace with your education
- `src/Components/Certificates.jsx` — replace with your certificates
- `src/Components/Project.jsx` — replace project cards + GitHub links
- `src/assets/` — replace images/logos (keep filenames OR update imports)

## Deploy to GitHub Pages

1. Create a repo named `portfolio` (or any name) under your GitHub account.
2. In `package.json`, set:

- `homepage`: `https://YOUR_GITHUB_USERNAME.github.io/portfolio`

3. Push your code to GitHub.
4. Deploy:

```bash
npm run deploy
```

Then in GitHub: **Repo → Settings → Pages**
- Source: `gh-pages` branch

## Notes
- This project uses **hash routing** (you’ll see `#/` in the URL on GitHub Pages). That is normal for SPA deployments on Pages.
