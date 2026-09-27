# Minerva Website

Public information, privacy, and terms pages for Minerva, an independent Minecraft: Java Edition launcher developed by Grizzly Dev.

The launcher source is maintained separately in a private repository. This repository contains only static public website assets.

## Deployment

GitHub Actions deploys the `main` branch to GitHub Pages.

Site: https://grizzlydeveloper.github.io/minerva-website/

Current public beta: [0.4.22](https://github.com/GrizzlyDeveloper/Minerva-Releases/releases/tag/v0.4.22).

## Local preview

Run `python -m http.server 4173 --bind 127.0.0.1` from this directory and open
http://127.0.0.1:4173/. No build or package installation is required.

Russian copy lives in the HTML; matching English keys live in `script.js`.
`styles.css` preserves the existing site foundation. `reference.css` adapts the
supplied Uxera reference's centered typography, translucent panels and atmospheric
purple background without importing its scripts, branding or product claims.
The new feature panels are illustrations, explicitly labeled as such. Their
buttons select the catalog, shortcuts or experimental Warm Return overview;
without JavaScript all three remain readable.

## Release checks

- Keep all release links and RU/EN version labels synchronized.
- Verify local links, anchors, translations and JavaScript syntax.
- Inspect 1440px desktop and 390px/320px mobile widths, all feature panels,
  language switching and mobile navigation.
- Warm Return is opt-in and experimental for supported Fabric 1.21.11 only.
  The process remains in memory. CurseForge modpacks are not supported.
- Keep the unsigned Windows publisher warning next to download links.
- After pushing, confirm the Pages workflow succeeds and the public page serves
  the new version; a successful push alone does not confirm publication.
