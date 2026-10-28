# Packetwise — Angular CCNA learning workspace

An Angular 22 standalone, zoneless application for CCNA 200-301 **v1.1**. All content and interactions run in the browser; no backend, account database, or runtime secrets are required.

- 53 lessons and 135 platform-labeled IOS XE command modules
- 118 original questions, timed 60-question mock exams, and flashcards
- IPv4 subnet calculator/drills, longest-prefix lookup, a packet walkthrough, and five guided CLI labs
- Complete multi-switch VLAN walkthrough with selected inter-VLAN permissions and an interactive policy model
- Browser-local progress, notes, bookmarks, study dates, and JSON export/restore

## Develop and build

Use Node 24.15+ (or another version accepted by package.json).

```sh
npm ci
npm start
npm run build:pages
npm run package
```

Serve `build/` as static files. For a local production preview:

```sh
python -m http.server 8000 --directory build
```

The package step creates an offline HTML, a static ZIP, and a source ZIP inside `build/`. The source ZIP excludes dependencies, build output, and Git metadata.

## GitHub Pages

The included `.github/workflows/pages.yml` installs locked dependencies, builds the site with the repository's Pages base path, packages the downloads and deploys a Pages artifact. In repository Settings → Pages, choose **GitHub Actions** as the publishing source. Push to `main` or run the workflow manually. Content will be publicly accessible at the configured Pages URL.

Hash-based Angular routes (`/#/lesson/2.1`) work at both a user-site root and a repository subpath without server rewrite rules. Previous `#lesson/2.1` links are normalized on startup.

Lessons in one domain form a continuous reading page. The “In this domain” highlight follows the lesson at the top of the reading viewport, including when scrolling upward or expanding command blocks. Numbered links and existing lesson/command URLs still jump to their target; browser history restores the reading position. Each lesson keeps its own answers, notes, bookmarks, and completion controls.

## Progress migration

The browser-storage key remains `packetwise-v1`. Replacing the app at the same origin retains progress. Moving from a ChatGPT Site to a GitHub Pages hostname is a change of origin: export a JSON backup on the old site and restore it under My progress on the new site. Progress is never included in the repository or uploaded by the app. GitHub Pages sites sharing one hostname also share browser storage for that origin.

## Curriculum and command assumptions

The current curriculum is v1.1 for exams before February 3, 2027. Confirm Cisco's objectives for your scheduled exam. Command references were checked against Cisco's IOS XE 26.x documentation on October 27, 2026; the latest supported build, available features, interface names and licenses depend on hardware. Examples were not executed on physical Cisco equipment. CLI labs and the VLAN policy explorer are educational models, not full network emulators.

## Project structure

`src/app` contains typed data/models, standalone route components, reusable command/UI components, a progress service and a quiz service. Templates use Angular bindings, control flow, and forms; the old imperative page renderer is not used. `scripts/package.mjs` packages portable downloads. There is no SSR or server runtime.

## Abbreviation glossary and hints

The standalone `/#/glossary` table contains the abbreviation, full name, and explanation for each term in `src/app/glossary.data.ts`. Search covers all three fields and any aliases. This reference is separate from the Learning Path.

The sidebar's fixed **Term hints** switch applies across the application and persists under `packetwise-preferences-v1` independently of study progress. Hints start enabled. Reading-text matches support hover, keyboard focus, and tap; Escape or an outside tap dismisses the definition. The matcher recognizes complete terms, selected plurals, and punctuation-bearing aliases, while keeping ambiguous short initials case-sensitive.

Use `<pw-term-text [text]="value"/>` for new displayed content that may contain terms. Inside existing links, buttons, labels, or summaries, set `[interactive]="true"` so hints do not introduce nested buttons or replace the control's action. Keep native form values and editor contents unchanged. Command rendering preserves its original characters, and copy buttons use the unmodified command source. The pop-up itself uses plain text to avoid recursively opening definitions.

`scripts/migrate-glossary-text.mjs` is an idempotent helper for converting additional reading-text templates. It leaves existing term components, native controls, and the pop-up template alone.
