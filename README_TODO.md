# To-Do App — Run & Deploy

This repository contains a simple To‑Do app built with Next.js (single page) that supports create, update, delete, mark complete, tabs (To Do / Completed / All), search, and localStorage persistence.

## Run locally (PowerShell)

Open PowerShell at the project root and run:

```powershell
npm install
npm run dev
```

Then open http://localhost:3000 in your browser.

## Deploy to Vercel

Option A — Use the Vercel web dashboard:

1. Push your repository to GitHub (or GitLab/Bitbucket).
2. Go to https://vercel.com/new and import the repo.
3. Follow the prompts and deploy.

Option B — Use the Vercel CLI (PowerShell):

```powershell
npm i -g vercel
vercel login   # open browser to sign in
vercel         # follow prompts; use --prod for production
```

No environment variables are required for this app.

---

If you'd like, I can:
- Update the repository `README.md` instead of adding this file.
- Create a `vercel.json` or add a GitHub Action for automatic deployments.
- Actually run the `vercel` command for you if you give me Git/GitHub access.
