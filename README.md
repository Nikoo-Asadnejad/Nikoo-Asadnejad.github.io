# Nikoo Asadnejad Portfolio

Personal portfolio website for Nikoo Asadnejad, a Senior Software Engineer specializing in C#, .NET, distributed systems, software architecture, and cloud-native engineering.

The current release is a fully static, responsive Next.js website containing professional experience, education, certifications, technical skills, selected GitHub projects, contact information, and a downloadable CV.

## Current status

Phase 1 is complete and host-ready:

- Home page with professional summary, portrait, animated technology showcase, and featured projects
- Projects page with repository links and technology summaries
- Resume page with experience, skills, education, and certifications
- Contact page with browser validation and a prepared email action
- Static export suitable for GitHub Pages, Nginx, or any static hosting provider
- Responsive navigation, keyboard focus states, accessible markup, and reduced-motion support

The site does not currently require an API, database, or backend service.

## Technology stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- React Icons
- Static export
- Nginx and Docker for optional container hosting

Future phases will introduce a Go backend, PostgreSQL, articles, collaboration inquiries, and an administration panel.

## Repository structure

```text
.
├── frontend/   # Next.js portfolio application
├── backend/    # Reserved for the Phase 2 Go API
└── spec/       # Project plan and phase specifications
```

## Requirements

- Node.js 20.9 or newer
- npm

## Local development

From the repository root:

```bash
cd frontend
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation and production build

```bash
cd frontend
npm run lint
npm run typecheck
npm run build
```

The production-ready static site is generated in `frontend/out/`.

To preview the exported site locally:

```bash
cd frontend
npm run start
```

## Environment configuration

The website works without environment variables. To generate canonical links for a production domain, create `frontend/.env.local` from `frontend/.env.example` and set:

```env
NEXT_PUBLIC_SITE_URL=https://nikoo-asadnejad.github.io
```

## GitHub Pages deployment

The repository includes `.github/workflows/deploy-pages.yml`. Every push to `master` builds the frontend, uploads `frontend/out/`, and deploys it through GitHub Pages.

Before the first deployment:

1. Open the repository on GitHub.
2. Go to **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push the `master` branch.

The published website will be available at [https://nikoo-asadnejad.github.io/](https://nikoo-asadnejad.github.io/).

## Container hosting

The frontend also includes a multi-stage Docker image that builds the static export and serves it through Nginx:

```bash
cd frontend
docker build -t nikoo-portfolio .
docker run --rm -p 8080:80 nikoo-portfolio
```

Open [http://localhost:8080](http://localhost:8080).

## Roadmap

### Phase 2 - Dynamic content

- Go API
- PostgreSQL persistence
- Dynamic profile, experience, education, skills, projects, and contact data
- Articles
- Work-together inquiries

### Phase 3 - Administration

- Authentication and authorization
- Content administration dashboard
- Management interfaces for portfolio entities

The complete implementation plan is available in [`spec/portfolio-website-plan.md`](spec/portfolio-website-plan.md).
