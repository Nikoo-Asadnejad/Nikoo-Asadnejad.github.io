# Portfolio Website Specification

## Phase 1 - Static portfolio

Build a host-ready Next.js App Router site in `frontend/` with TypeScript, Tailwind CSS, static data, and no API or backend dependency. `npm run build` must generate a portable `out/` directory.

### Routes

- `/` - portrait-led introduction, professional summary, technology icons, featured projects, social links, CV download, and contact call to action.
- `/projects/` - six GitHub projects with accurate descriptions, technologies, featured state, and repository links.
- `/resume/` - complete experience, grouped skills, education, certifications, and CV download.
- `/contact/` - public contact details and a validated form that prepares a message in the visitor's email application.

### Content source

The supplied CV and cover letter are authoritative for the summary, experience, education, certifications, project descriptions, and contact information. The GitHub profile supplies the current pinned project set. The supplied portrait is the only profile image used.

### Design and accessibility

Use the supplied navy portfolio references as direction: deep navy backgrounds, lighter blue surfaces, cyan and magenta accents, rounded panels, restrained motion, responsive layouts, semantic HTML, keyboard focus states, reduced-motion support, and readable body text of at least 16px. Do not invent metrics, skill percentages, testimonials, awards, client counts, project totals, or demo links.

### Hosting

Keep Phase 1 fully static. Include static export configuration, Nginx configuration, a multi-stage Docker image, and README instructions for serving `out/` directly or with the container. Do not deploy automatically.

### Verification

Run ESLint, TypeScript checking, a production build, route checks against the exported site, asset and link checks, and a Docker build when a Docker daemon is available. Keep `backend/` untouched.

## Later phases

Phase 2 will introduce the Go API, PostgreSQL-backed content, articles, and work-together inquiries. Phase 3 will add the authenticated administration panel. Neither is part of the Phase 1 implementation.
