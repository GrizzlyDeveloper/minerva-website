# Minerva motion alternative — local review, 2026-10-19

Review URL: http://127.0.0.1:5400/alternatives/aurora/

An isolated alternative to the current homepage. The existing `index.html`,
`home.css`, and `home.js` were not edited by this design task. No commit, push,
publication, production API change or deployment was performed.

The banner uses the existing SVG brand mark instead of a screenshot. Motion
includes a floating mark, restrained pointer depth, card illumination, section
reveals and a reading-progress line. System reduced-motion preferences disable
animation and reveal hiding. All current homepage content, RU/EN release handling,
legal links, help and support are retained. The explanatory graphics are diagrams,
not screenshots or live launcher interfaces.

## Preview

From `C:\Users\Le Danila\Documents\Minerva Speed launcher`, keep the isolated
backend running in one terminal:

```powershell
Set-Location -LiteralPath 'C:\Users\Le Danila\Documents\Minerva Speed launcher'
rtk proxy node tools/preview-help-support.mjs 5399
```

In another terminal run the candidate's loopback-only static server:

```powershell
Set-Location -LiteralPath 'C:\Users\Le Danila\Documents\Minerva Website'
rtk proxy node alternatives/aurora/preview.mjs
```

The backend uses disposable local accounts, statistics and **fixture release
0.4.28**, not current production data. There is no real installer in this preview.
API/account requests go only to the local fixture on port 5399.

## Checks

`qa/results.json` records browser checks at 1440, 820, 390 and 320 px: RU/EN,
language persistence, overflow, resource loading, page errors, anchor navigation,
reduced motion, FAQ and the support dialog. Screenshots are in `qa/`.
`qa.mjs` uses the locally installed Chromium and bundled Playwright runtime.

`build-preview.py` can regenerate the alternative markup from the current main
homepage. Review the regenerated markup before later publication. Publication
requires the owner's separate approval; this folder is not a deployment bundle.
