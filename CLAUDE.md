# Portfolio site

A designer portfolio (product / UX / UI). Static site: plain HTML, CSS and JS, no build step, no dependencies.

- Repo: https://github.com/SairaYashika/Portfolio.git
- Deploys: pushing to `main` should auto-deploy (Netlify / Cloudflare Pages / Vercel connected to the repo, publish directory `/`).
- The site's owner reads and writes Korean; write site copy in English, talk to the owner in Korean unless they write in English.

## Structure

```
index.html              Landing: hero + 2-column project grid (hover overlay)
about.html              About: intro, one "Soyuns" photo gallery (landscape row, then tall-frame portrait row), footer with local time
projects/*.html         One case study per project (medly-solar, pocket-saju, connai, qvest; each links to the next)
images/                 Real project images (compress before adding)
styles.css              All styles, shared by every page
script.js               Footer year, footer local time (About), scroll reveal
```

The nav has only `Work` and `About`. `Archive` and `Contact` were removed on purpose; don't add them back. There is no contact button; visitors reach you through the footer icons (email, LinkedIn, ...) and the email in the About footer.

## Conventions

- **Paths are relative** (`../styles.css`, `projects/...`) so the site works both at a domain root and under `/Portfolio/` on GitHub Pages. Never use root-absolute paths like `/styles.css`.
- **Every page repeats the same header** (brand + Work / About). When you add or rename a page, update the nav on all pages and set `aria-current="page"` on the active link.
- **Design tokens** live in `:root` at the top of `styles.css` (colours, fonts, gutter, gap, radius). Change them there, not inline.
- **Fonts:** Newsreader (serif, headings) and Inter (UI/body), plus Comfortaa (500) only for the `Soyun` brand name, the `Work` / `About` nav and the landing headline and the About gallery title (`Soyuns`), loaded from Google Fonts in each page's `<head>`. Keep that `<link>` identical across pages.
- **Look:** white background, black text, muted grey secondary text, lots of whitespace, large image tiles with 8px radius. No dark mode. Keep it minimal and editorial; avoid adding decoration.
- **Landing tiles:** each `.tile` has a `--tint` colour used by the hover overlay (company name + discipline). Touch devices (`hover: none`) show the name in a `.caption` under the tile instead. Keep both in sync when editing a project's name or tags.
- **About page** overrides `--gutter` through `body.about-page`, so header, body and footer align. New About-specific styles go in the "About page" section of `styles.css`.
- **Accessibility:** keep `alt`/`aria-label` on images and placeholder art, visible focus styles, and the `prefers-reduced-motion` handling for `.reveal`.
- Keep it dependency-free: no frameworks, bundlers or npm packages unless the owner asks.

## Placeholders

Most content is still placeholder. Placeholders are written in `[square brackets]` (e.g. `[Company A]`, `[X%]`) or as obvious generic text (`[Your role]`, `[Team]`). The artwork in tiles, galleries and case studies is inline SVG / CSS shapes standing in for real images.

- Case-study copy for Medly-SOLAR, QVest and CONNAÎ was adapted from the owner's old portfolio (https://soyunoh.webflow.io/). Pocket Saju has no source yet and is still placeholder. Keep the case-study layout as it is; only change the content.
- Replace placeholders only with content the owner provides. Don't invent real facts, names, metrics or company details.
- Don't use real companies' logos, names or imagery as placeholders.
- When real images arrive, put them in `images/`, compress them, and swap the placeholder element (`.art` SVG in tiles, `.cs-cover` / `.cs-figure` in case studies; About photos are already real `.card.photo` images) for an `<img>` with `alt` text, `width`/`height` and `loading="lazy"` (not on the first visible image).

Known values still to replace: social links (`href="#"`), the footer city on About (`#local-time`, currently `Asia/Seoul` / `Seoul`), all case-study facts and copy.

## Working on it

- Preview locally with `python3 -m http.server 4173` from this folder, then open `http://localhost:4173`. Opening files with `file://` also works, but scroll-reveal and some checks behave more reliably over http.
- Check at phone width (about 375px) and desktop width (1440px). There should be no horizontal scroll.
- Check every link you touched, including the `Next project` chain in case studies.
- The owner has said: after every change, commit and push right away without asking. Pushing publishes the site (Netlify redeploys on push), so still keep changes small and check them locally first.
- Commit messages: short, imperative, describe the visible change (e.g. `About: add gallery photos`).
