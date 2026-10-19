# Minerva Website

## Browser skins and owner navigation — 2026-10-19

`/account/skins` opens the browser skin editor. The published account assets are
in `account/`; source/backend changes are in the private launcher branch
`codex/web-skins-owner-panel-20261019`. The editor supports a per-account local
PNG library, 3D model/layer preview, nickname-based Minerva assignments, revision
checks and Premium HD limits. Official Microsoft appearance is managed through
the launcher or the official Minecraft profile. Teams/Maps are owner-panel
subpages; ordinary accounts neither display them nor load their sidebar data.

## Homepage refresh — 2026-10-19

The approved motion design is now the main homepage (`index.html`, `home.css`,
`home.js`). The vector brand mark is embedded in the page; animation uses the
existing script route and respects reduced-motion preferences. Content reflects
public Minerva 0.4.34: Prism/MultiMC import, cloning, shared folders, current
component/profile-switch support and Minerva HD-skin requirements. Four new
paired guides cover Prism migration, shared folders, cloning and appearance.

The version, installer URL, hash, size and date come from `/releases/latest.json`.
The homepage shows the latest four curated changelog entries. Its content does
not advertise the unpublished multi-launch stage or the disabled team-map pilot.

Local validation and static-publication helpers are in the sibling launcher
checkout: `tools/check-home-motion.mjs`, `tools/publish-home-motion.mjs`, and
`tools/deploy-home-motion.py`. Preview accounts/releases remain local fixtures;
`alternatives/aurora/` contains design tooling and screenshots, not public assets.

The older sections below describe earlier website iterations.

## Local website/help/support work — 2026-10-15

Local changes only; publication is not authorized. The current implementation
uses index.html/home.css/home.js, help-content.mjs/help.js/help.css and generated
help pages. Privacy/terms still use script.js, styles.css and reference.css.
Source-reviewed bilingual guides target Minerva 0.4.28. Version-keyed changelog
notes cover 0.4.27 and 0.4.28; unknown releases retain labelled original notes.

From the sibling Minerva Speed launcher checkout:

```powershell
rtk proxy node "../Minerva Website/build-help.mjs"
rtk proxy pnpm --filter @minerva/account build
rtk proxy node tools/preview-help-support.mjs
```

Preview: http://127.0.0.1:5296/ . This uses isolated local fixture accounts and
metrics, not production data. Shared support UI source lives in
`packages/web-support` in the launcher repo; build-help synchronizes its public
assets. Do not upload the fixture server. See that repo's
`docs/website-help-support-admin-local-2026-10-15.md` and separate publication
plan for checks, owner permissions, retention and live gates.

The current background is a native 1536x912 capture of installed 0.4.28. Replace
it with a user-provided lossless screenshot for a higher-resolution final asset;
do not claim the existing JPEG is 4K or PNG. Old instructions below are historical.

Production is now https://minervalauncher.com/ . GitHub Pages is a legacy copy.
The homepage uses `index.html`, `home.css` and `home.js`, with same-origin
`/releases/latest.json` metadata. Download links appear only for a valid
published release. Legal pages retain `script.js` and the older stylesheets.

Deployment and statistics instructions live in the launcher repository at
`docs/release/vps-delivery.md`. Preview with
`node tools/preview-release-portal.mjs "C:\Users\Le Danila\Documents\Minerva Website"`
from that repository; open http://127.0.0.1:5213/ .
`tools/check-homepage.mjs` checks desktop and 390/320px mobile RU/EN states.
Do not publish either repository without the owner's explicit authorization.

## Historical GitHub Pages Setup

The following describes the superseded site, not current production:

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
