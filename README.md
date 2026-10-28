# Packetwise — CCNA Study Lab

An interactive Angular study workspace for **CCNA 200-301 v1.1**, organized by Cisco’s exam blueprint. Study the concepts, follow platform-labeled command examples, test your understanding, and track your progress in your browser.

**[Open the website](https://ianlin-smci.github.io/ccna-study-lab/)** · **[Learning Path](https://ianlin-smci.github.io/ccna-study-lab/#/path)** · **[Markdown Learning Path](LEARNING_PATH.md)** · **[Textbook alignment review](public/textbook-alignment-review.md)**

## What is included

<!-- BEGIN GENERATED CURRICULUM STATS -->

| Study material | Current content |
| --- | --- |
| Exam blueprint | 6 domains · 53 objectives · 58 lettered subtopics |
| Commands | 136 platform-labeled command modules |
| Practice | 206 original questions · 60-question, 120-minute mock exams |
| Textbook support | 106 explanation sections · 53 worked review checks |
| Glossary | 197 abbreviation entries with optional definition hints |
| Guided CLI | 5 scripted lab exercises |

<!-- END GENERATED CURRICULUM STATS -->

- Continuous domain reading, with objective and subtopic highlights that follow scrolling.
- A separate searchable abbreviation glossary. Dotted terms open definitions on hover, keyboard focus or tap; the fixed sidebar switch controls hints across the site.
- Practice questions, flashcards and timed mock exams with the blueprint’s domain weighting.
- A subnet calculator/drill, longest-prefix explorer, packet walkthrough and guided CLI exercises.
- A multi-switch VLAN walkthrough with a policy model for selected inter-VLAN connectivity.
- Notes, bookmarks, completion tracking, study planning and progress export/restore.
- Static-site, Angular-source and single-file offline downloads.

The application uses Angular 22 standalone components, signals, zoneless change detection and hash-based routing. It runs entirely in the browser and needs no backend or runtime credentials.

## Run locally

Use **Node.js 24.15.0 or newer within the 24.x line**, with npm. The other supported Node ranges are listed in [package.json](package.json). GitHub Actions uses Node 24.

```sh
git clone https://github.com/ianlin-smci/ccna-study-lab.git
cd ccna-study-lab
npm ci
npm start
```

Open <http://localhost:4200>. Stop the development server with `Ctrl+C`.

## Project commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Angular development server. |
| `npm run check` | Check application TypeScript types. |
| `npm test` | Validate curriculum structure, references, questions and network calculations. |
| `npm run docs:sync` | Refresh the Markdown Learning Path, question catalog and README counts. |
| `npm run docs:check` | Verify that the committed documentation matches the curriculum; writes no files. |
| `npm run build:pages` | Build the production static site into `build/` with relative asset paths. |
| `npm run package` | Add offline HTML, documentation and downloadable ZIPs to an existing build. |

A complete local verification and release build is:

```sh
npm run docs:sync
npm run docs:check
npm run check
npm test
npm run build:pages
npm run package
```

Preview the packaged site with any static HTTP server. For example, with Python 3:

```sh
python -m http.server 8000 --directory build
```

Open <http://localhost:8000>.

## Markdown shadow copy

[LEARNING_PATH.md](LEARNING_PATH.md) is generated from the same curriculum data as the website. It includes all six domains, numbered objectives, lettered subtopics, skill targets, core explanations, textbook supplements, worked checks, platform-labeled command blocks, troubleshooting tips, source links and lesson knowledge checks.

The interactive VLAN model is represented by its address plan, policy rules and expected tests. Personal notes, bookmarks and completion state belong to the browser and are not included in this curriculum snapshot. Practice-bank questions, flashcards and the glossary remain separate website features; each lesson’s own knowledge check is included.

After editing curriculum content, run:

```sh
npm run docs:sync
```

Commit the updated source, `LEARNING_PATH.md` and any changed README counts together. The Pages workflow runs `docs:check` before building, so stale snapshots fail CI. Make lasting teaching changes in the source data: direct edits to generated content are replaced by the next sync. Keep personal study annotations in a separate file.

The generator is [scripts/sync-docs.mjs](scripts/sync-docs.mjs). It produces deterministic output with a curriculum digest, so repeated runs with unchanged content create no diff. It uses Node’s TypeScript stripping and does not need a documentation framework.

Published copies are also available as [README.md](https://ianlin-smci.github.io/ccna-study-lab/README.md) and [LEARNING_PATH.md](https://ianlin-smci.github.io/ccna-study-lab/LEARNING_PATH.md), and both are included in the packaged downloads.

## Content structure and editing

AI contributors should read [AGENTS.md](AGENTS.md). [CLAUDE.md](CLAUDE.md) imports the same guide for Claude. These cover source ownership, curriculum rules, generated documentation, UI behavior, validation and deployment.

The [question-bank review](public/question-bank-review.md) documents the complete 628-record audit of the Reddit-linked resource, topic mappings, quality findings and the expansion of this site's original pool. Download the [source classification](public/question-source-audit.csv) or the [current question catalog](public/question-bank-catalog.csv). These are also linked under **Study resources**. The source classification is a dated review snapshot; the current catalog is regenerated by `docs:sync`.

Each active question has a unique learning-goal `concept` and an objective reference. Numerical or wording variants of the same task are consolidated. [question-aliases.ts](src/app/question-aliases.ts) preserves review links from retired IDs; raw historical answers and exported backups remain intact, while current flashcard counts and missed-question review use the retained questions.

| File or directory | Responsibility |
| --- | --- |
| [src/app/blueprint.data.ts](src/app/blueprint.data.ts) | v1.1 hierarchy, objective skill verbs and lettered subtopic explanations. |
| [src/app/data.ts](src/app/data.ts) | Domains, lesson overviews, questions, command guides, sources and guided labs. |
| [src/app/textbook.data.ts](src/app/textbook.data.ts) | Second Edition chapter references, original depth notes and worked review checks. |
| [src/app/glossary.data.ts](src/app/glossary.data.ts) | Abbreviations, full names, explanations and matching aliases. |
| [src/app/lesson.component.ts](src/app/lesson.component.ts) | Continuous domain reader, deep links and scrolling highlights. |
| [src/app/lesson-article.component.ts](src/app/lesson-article.component.ts) | Each objective’s questions, notes and completion controls. |
| [src/app/progress.service.ts](src/app/progress.service.ts) | Browser-local study records and export/restore. |
| [src/app/quiz.service.ts](src/app/quiz.service.ts) | Practice/mock sessions, scoring and timing. |
| [src/app/question-aliases.ts](src/app/question-aliases.ts) | Retired-question aliases and non-destructive flashcard-rating consolidation. |
| [src/styles.css](src/styles.css) | Shared and responsive styles. |
| [tests/fixtures/ccna-v1.1-identifiers.json](tests/fixtures/ccna-v1.1-identifiers.json) | Published domain weights and identifier inventory, with its source URL. |
| [public/](public/) | Static assets and the textbook review report. |
| [scripts/package.mjs](scripts/package.mjs) | Portable offline and ZIP packaging. |
| [.github/workflows/pages.yml](.github/workflows/pages.yml) | Validation, production build, packaging and Pages deployment. |

Use the same objective ID and title in the blueprint and lesson records. Keep existing IDs stable to preserve saved progress and links. Inline scope terms are kept under their parent objective; the hierarchy does not invent lettered identifiers absent from Cisco’s outline. After content changes, sync the documentation and run the checks above.

For new displayed text containing abbreviations, use `<pw-term-text [text]="value"/>`. Inside an existing link, button, label or summary, set `[interactive]="true"` to avoid nested buttons. Keep input values and editors as native text. Copy controls use the original command source. The definition pop-up uses plain text to avoid recursive hints.

## Navigation

Hash routes work on GitHub Pages without server rewrite rules:

- `/#/path` — the complete blueprint-based Learning Path.
- `/#/path/2` — one domain.
- `/#/lesson/2.1` — an objective within its continuous domain page.
- `/#/lesson/2.1/2.1.c` — a lettered subtopic; `/#/lesson/2.1.c` is also supported.
- `/#/lesson/2.1/commands` — the objective’s command guide.
- `/#/glossary` — abbreviation reference.
- `/#/textbook` — Second Edition topic crosswalk and review findings.
- `/#/progress` — study records and backup tools.

Earlier links such as `#lesson/2.1` are normalized on startup. Browser history restores the reading position, and scrolling updates the visible highlights without adding a history entry for every section.

## Deploy to GitHub Pages

The repository’s Pages source is **GitHub Actions**. Pushing to `main` runs the included workflow:

1. Install locked npm dependencies.
2. Check documentation synchronization and run tests.
3. Build Angular and package the downloads.
4. Upload and deploy the `build/` Pages artifact.

For a manual redeployment, open [Actions](https://github.com/ianlin-smci/ccna-study-lab/actions), select **Deploy Angular site to GitHub Pages**, and use **Run workflow**. Re-running an existing run republishes the code associated with that run.

The public site is <https://ianlin-smci.github.io/ccna-study-lab/>. Static hosting does not require application secrets or server-side configuration.

## Offline and source downloads

Run `build:pages` before `package`. Packaging creates:

| Artifact | Use |
| --- | --- |
| `build/packetwise-offline.html` | Open the self-contained study app directly in a browser. |
| `build/ccna-study-site.zip` | Extract and serve the static files, or use the included offline HTML. |
| `build/packetwise-angular-source.zip` | Angular source and documentation, excluding dependencies, build output and Git metadata. |
| `build/README.md`, `build/LEARNING_PATH.md` | Standalone project documentation and curriculum snapshot. |

The offline HTML embeds the application code and styles. Links to separate downloads and external references still need the corresponding files or network access. Browser storage for a local file can differ between browsers; export progress before moving between copies or website addresses.

## Progress and privacy

Study progress is saved under `packetwise-v1` in local storage. The hints preference uses `packetwise-preferences-v1`, independently of study progress. Replacing the app at the same origin retains these records, subject to browser storage settings.

To move between domains, a previous private site, another browser or an offline copy, export a JSON backup under **My progress** and restore it at the destination. Pages hosted under the same hostname share an origin, even if their URL paths differ. Clearing browser data can remove study records.

The app does not upload these records to an account service, and personal browser data is not included in repository documentation or release ZIPs.

## Curriculum and textbook references

The Learning Path targets [Cisco’s CCNA 200-301 v1.1 objectives](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf). Numbering and skill targets follow that inventory; study labels and teaching explanations are independently worded. Confirm the exam version for your testing date before using this curriculum.

The [textbook alignment page](https://ianlin-smci.github.io/ccna-study-lab/#/textbook) maps lessons to **CCNA 200-301 Official Cert Guide, Second Edition, Volumes 1 and 2**. It uses the publisher’s public contents, selected public samples and errata, plus Cisco references. The complete paid books were not supplied for page-by-page comparison; chapter references establish suggested reading relationships, not equal coverage or exam readiness. Full findings and source links are in [the review report](public/textbook-alignment-review.md).

The project is an independently authored study companion. Its questions are original and are not Cisco exam questions or Pearson’s question bank.

## Lab and platform limits

Command examples identify their intended switch, router, controller or management workstation. IOS XE support varies with hardware, image and license; interfaces and available syntax must be adapted to the lab. Older concept examples are labeled separately from current platform guides. The current reference set was checked against IOS XE 26.x documentation in October 2026.

Examples were reviewed against documentation and were not executed on physical Cisco equipment. Guided CLI labs and the VLAN reachability explorer are educational models. Use the textbook exercises and a suitable Cisco simulator or supported equipment for hands-on configuration and troubleshooting practice.
