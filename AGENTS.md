# AI contributor guide

This guide applies to the entire Packetwise CCNA Study Lab repository. Read it before changing code or curriculum. Start with [README.md](README.md) for setup, commands, routes and deployment details. Claude loads this guide through [CLAUDE.md](CLAUDE.md).

## Project and scope

- This is a browser-only Angular 22 study site for **CCNA 200-301 v1.1**, with a Learning Path that follows Cisco's numbered objectives and explicitly lettered subtopics.
- The textbook crosswalk targets **CCNA 200-301 Official Cert Guide, Second Edition, Volumes 1 and 2**. It is supplemental reading guidance, not a claim of page-by-page textbook equivalence.
- Preserve the Angular standalone-component, signals and zoneless architecture. There is no backend, account service or runtime secret configuration.
- Use Node 24.15.0 or newer within the 24.x line and install locked dependencies with `npm ci`. Check `package.json` for other supported Node ranges.
- Live site: <https://ianlin-smci.github.io/ccna-study-lab/>. Repository: <https://github.com/ianlin-smci/ccna-study-lab>.

## Source map

| Location | Responsibility |
| --- | --- |
| `src/main.ts` | Bootstrap, providers and hash routes. |
| `src/app/app.component.*`, `src/styles.css` | Site shell, navigation, sidebar and responsive presentation. |
| `src/app/blueprint.data.ts` | Official objective hierarchy, skill verbs and subtopic explanations. |
| `src/app/data.ts`, `src/app/models.ts` | Domains, lesson records, questions, command guides, sources, labs and types. |
| `src/app/textbook.data.ts`, `public/textbook-alignment-review.md` | Book crosswalk, original depth notes, worked checks and review limitations. |
| `src/app/lesson.component.*`, `src/app/lesson-article.component.*` | Continuous domain reader, deep links, scrolling highlights and lesson controls. |
| `src/app/glossary*` | Abbreviation data, matching, hint rendering, preferences and pop-up. |
| `src/app/progress.service.ts`, `src/app/quiz.service.ts` | Local study records and quiz sessions. |
| `src/app/question-aliases.ts` | Retired-question ID aliases and current flashcard-rating consolidation. |
| `public/question-bank-review.md`, `public/question-source-audit.csv` | Dated external-source review and topic-only classification; external question text is excluded. |
| `public/question-bank-catalog.csv` | Generated catalog of the current original practice pool. |
| `src/app/network-utils.ts`, `src/app/labs.component.*` | Network calculations and educational lab models. |
| `tests/`, `tests/fixtures/ccna-v1.1-identifiers.json` | Content/logic tests and the sourced blueprint inventory. |
| `scripts/sync-docs.mjs` | Generates the curriculum shadow copy and README statistics. |
| `scripts/package.mjs`, `.github/workflows/pages.yml` | Offline/source ZIP packaging and GitHub Pages deployment. |
| `public/network-hero.png` | Network illustration; packaging embeds it in the offline HTML. |

Some data files contain very large single-line arrays. Inspect specific exported records or parse the data rather than dumping entire files. Keep edits focused; do not reformat the complete curriculum to make a small change.

## Curriculum rules

1. Keep objective IDs, lettered IDs, order, domain weights and skill targets aligned with the linked [Cisco v1.1 blueprint](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf). Use the fixture to check the inventory. Do not invent lettered IDs for inline scope terms or silently move to another exam version.
2. Keep lesson IDs and titles consistent between the blueprint and lesson records. Preserve existing lesson/question identifiers, routes and references because saved progress and links depend on them. If a requested change needs a migration, implement and document it.
3. Write original explanations, examples and questions. Use official Cisco references for technical claims and publisher sources for chapter references. Do not reproduce paid textbook chapters or exam/question-bank material.
4. Describe textbook alignment accurately: the existing review uses public contents, selected samples and errata, plus Cisco references. A chapter mapping does not establish complete coverage or exam readiness. Do not claim to have inspected a book or source that was not available.
5. Distinguish Cisco IOS/IOS XE CLI, controller UI and management-workstation commands. Label platform, software assumptions, configuration context, purpose and expected verification. Keep older concept examples visibly separate from current platform guides.
6. Verify any claim about the latest IOS XE release against current official documentation; compatibility depends on hardware, image and license. Never claim commands were executed on equipment when they were only reviewed against documentation or a simulator.
7. Make network examples internally consistent. Distinguish switching within a VLAN from routing between VLANs. For selective inter-VLAN access, explain addressing, gateways, trunks, routing, filtering and expected allowed/denied tests. Keep worked answers consistent with the topology and command text.
8. Keep guided CLI exercises and the VLAN explorer described as educational models. They are not full Cisco device emulators.
9. Give every active question a unique `concept` learning-goal key and the correct objective reference. Review meaning as well as wording: changing only numbers, addresses or names does not justify another question. If retiring a duplicate, maintain a direct alias to its retained question in `question-aliases.ts`; preserve raw saved records and exports. The active review view merges legacy ratings without counting duplicates or unknown cards.

## Generated documentation

`LEARNING_PATH.md` is a generated shadow copy, not a second editable curriculum. Change the source data and then run:

```sh
npm run docs:sync
npm run docs:check
```

Commit affected source records and the regenerated documentation together. Do not hand-edit `LEARNING_PATH.md`, `public/question-bank-catalog.csv` or the README block between `BEGIN GENERATED CURRICULUM STATS` and `END GENERATED CURRICULUM STATS`; the next sync replaces them. Other README sections are maintained manually. If the data schema or snapshot format changes, update `scripts/sync-docs.mjs` as well. Keep output deterministic and preserve command text. The external source audit is a frozen review snapshot, not a live import or dependency of the question bank.

## UI and data behavior to preserve

- Routes use hashes so deep links work on static hosting. Preserve objective, subtopic, short subtopic alias and command-section links; see the README's route examples.
- The domain reader is continuous. Both objective and subtopic highlights must follow the visible content while scrolling; avoid adding a browser-history entry for every scroll position.
- Term hints use dotted indicators and support hover, keyboard focus and tap. The site-level switch belongs in the fixed sidebar controls and its preference persists independently of study progress.
- Use `GlossaryTextComponent` (`<pw-term-text [text]="value"/>`) for new displayed text that should have hints. Inside a link, button, label or summary, set `[interactive]="true"` to avoid nested buttons. Keep editors/input values and definition pop-up text plain. Copy controls must copy original command text.
- Preserve responsive layouts, readable lesson navigation and keyboard operation. Pay special attention to narrow side panels, long abbreviations, focus behavior, pop-up placement and horizontal overflow.
- Study records use local storage key `packetwise-v1`; hint preferences use `packetwise-preferences-v1`. Preserve export/restore compatibility. Do not clear storage, rename keys or upload browser records as part of an unrelated change.
- Keep personal notes, progress backups, credentials, dependency directories and build output out of source commits and public downloads. The packaging script includes repository files; inspect new files before publishing them.

## Verification

Choose checks for the actual change. Do not claim a check passed unless it ran successfully.

| Change | Appropriate checks |
| --- | --- |
| Hand-maintained documentation only | Check links and accuracy; run `npm run docs:check`. |
| Curriculum, references or generated documentation | Run `docs:sync`, `docs:check` and `npm test`. |
| TypeScript or templates | Run `npm run check`, `npm test` and `npm run build:pages`. |
| Navigation, hints or layout | Add browser verification of the affected desktop, narrow-window and keyboard interactions. |
| Packaging or release artifacts | Run `build:pages` before `package`; inspect affected output files and ZIP contents. |

The complete local release sequence is:

```sh
npm run docs:sync
npm run docs:check
npm run check
npm test
npm run build:pages
npm run package
```

The existing tests use Node's test runner and native TypeScript stripping. Add meaningful regression coverage for changed logic where useful. Do not change fixtures or remove assertions just to make a failing test pass. Browser checks are separate; `npm test` does not validate rendered layouts or physical Cisco commands.

## Packaging and deployment

- `build/` is generated and ignored. Do not hand-edit it or commit `node_modules/`.
- `build:pages` uses a relative base URL. Packaging currently needs a single eager-loaded application bundle for the self-contained offline HTML; account for that constraint before introducing lazy chunks.
- `npm run package` adds the offline HTML, static/source ZIPs and published README/Learning Path copies. The source ZIP includes these agent guides automatically.
- GitHub Pages deploys through `.github/workflows/pages.yml` on pushes to `main` or a manual workflow dispatch. It checks documentation, runs tests, builds, packages and deploys `build/`.
- Follow the user's requested delivery scope. Inspect the working tree, preserve unrelated edits and avoid force-pushing shared history. When publishing is requested, check the Actions result and the affected live artifact before reporting deployment complete. Creating documentation alone is not a standing instruction for future agents to publish unrelated work.
- In the handoff, state what changed, what was verified and any material limitation. Distinguish files created, code pushed and deployment confirmed.

## Maintaining this guide

Update this file when architecture, scripts, content ownership or deployment behavior changes. Keep shared instructions here; keep `CLAUDE.md` as the import entry point so the two guides do not drift.
