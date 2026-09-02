# VocabDuel

VocabDuel is a mobile-first British English vocabulary-learning game with Bahasa Melayu, English-only, and Simplified Chinese experiences. It combines guided word study, five solo question types, placement and weak-word practice, private 1v1 matches, and 2-4 player Multi Duel rooms.

Learning and solo play are delivered as a static Vite site and work without an account. Multiplayer loads Firebase Anonymous Authentication and Realtime Database only when needed.

> [!IMPORTANT]
> Before production deployment, set the real `VITE_SITE_URL`. The Privacy and Terms pages also need the operator's real contact and jurisdiction details and appropriate legal review.

## Features

- Bahasa Melayu (`/my/`), British English (`/en/`), and Simplified Chinese (`/zh/`) routes
- Five curated vocabulary levels with localised definitions and examples
- Deterministic question generation, scoring, placement, and progress tracking
- Browser speech synthesis where supported
- Private 1v1 matches and configurable 2-4 player rooms
- Static, crawlable route metadata and generated word-detail pages
- Responsive, keyboard-friendly UI with reduced-motion support

## Technology

- TypeScript, Vite, and Tailwind CSS
- Vitest for frontend and Firebase Rules tests
- Node's test runner for Cloud Functions
- Firebase Authentication, Realtime Database, App Check, Hosting, and scheduled Functions
- GitHub Actions and GitHub Pages deployment support

## Requirements and setup

- Node.js 22 or a compatible current LTS release
- npm
- Java 21 or newer for Firebase emulator tests
- A Firebase project for multiplayer and production deployment

```sh
npm install
cp .env.example .env.local
npm run dev
```

In PowerShell, use `Copy-Item .env.example .env.local`.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm test` | Run frontend tests |
| `npm run functions:test` | Test scheduled room cleanup |
| `npm run firebase:rules:test` | Test Realtime Database Rules in the emulator |
| `npm run typecheck` | Run TypeScript checks |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run release:verify` | Check built routes, metadata, and placeholders |
| `npm run vocabulary:backfill-malay` | Run the maintained Malay-example backfill utility |

Do not open files from `dist/` directly; use `npm run preview` so routes and assets resolve correctly.

## Environment

Create `.env.local` from `.env.example`. Do not commit it.

```dotenv
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_DATABASE_URL=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_APPCHECK_SITE_KEY=
VITE_USE_FIREBASE_EMULATOR=false
VITE_SITE_URL=https://your-production-origin.example
VITE_BASE_PATH=/
```

Firebase web API keys identify a project; they are not database authorisation. Security depends on Authentication, Database Rules, App Check, quotas, and monitoring. Never place service-account credentials or other secrets in a `VITE_` variable.

Without valid Firebase configuration, multiplayer reports that it is unavailable while local learning remains usable. For a GitHub Pages project site, use an origin such as `https://OWNER.github.io/REPOSITORY` and a base path such as `/REPOSITORY/`.

## Project structure

```text
.
|- about/, learn/, play/, ...   Static HTML route entry points
|- firebase/                    Realtime Database Rules
|- functions/                   Scheduled expired-room cleanup
|- public/                      Icons, manifest, robots, sitemap, and images
|- scripts/                     Release verification and data utilities
|- src/
|  |- components/               Shared UI behaviour
|  |- config/                   Locale, route, SEO, and site configuration
|  |- data/                     Vocabulary loading, search, and editorial rules
|  |- games/                    Questions, scoring, sessions, and placement
|  |- multi-duel/               Multi-player room client and state machine
|  |- multiplayer/              1v1 room client and state machine
|  |- pages/                    Page controllers
|  |- speech/                   Web Speech API wrapper
|  |- storage/                  Local progress persistence
|  `- types/                    Shared TypeScript contracts
|- vite.config.ts               Multi-page and generated-route build setup
`- firebase.json                Hosting, emulators, Rules, and Functions config
```

Vite builds each public route as a static HTML entry. Locale configuration and SEO metadata are centralised under `src/config/`; game rules remain separate from page rendering.

## Vocabulary and editorial standard

Vocabulary lives in `src/data/vocabulary/`, split into one module per learning level. `src/data/vocabulary.ts` exposes the combined catalogue, while browser features dynamically load only the levels they need.

Each `VocabularyItem` uses a stable ID and normalised British English term, part of speech, optional IPA, English and Chinese explanations, examples in British English, Bahasa Melayu, and Simplified Chinese, optional collocations/synonyms/antonyms, an internal Level 1-5, optional CEFR tag, and declared categories.

| Level | Typical CEFR | Approximate IELTS target | Editorial meaning |
| --- | --- | --- | --- |
| 1 | A1-A2 | Foundation / below Band 4 | Frequent, concrete, everyday words |
| 2 | A2-B1 | Band 4.0-5.0 | Familiar vocabulary for everyday life, travel, study, and routine work |
| 3 | B1-B2 | Band 5.5-6.5 | Broader or abstract vocabulary used in general and academic topics |
| 4 | B2-C1 | Band 7.0-8.0 | Less-common vocabulary requiring accurate register, nuance, or collocation |
| 5 | C1-C2 | Band 8.5-9.0 | Highly nuanced, specialised, idiomatic, or uncommon vocabulary |

IELTS ranges are learner orientation labels, not official word-to-band assignments. When assigning a term, consider frequency, concreteness, range, collocation, register, and nuance. Use a unique `id`, lowercase `normalizedTerm`, valid categories, and original or appropriately licensed, human-reviewed content.

The August 2026 expansion used the MIT-licensed [ECDICT](https://github.com/skywind3000/ECDICT) dataset for bilingual gloss and corpus-rank checks. English definitions and examples still require editorial review.

To add vocabulary:

1. Add the entry to the appropriate level module under `src/data/vocabulary/`.
2. Follow the `VocabularyItem` contract and declared categories.
3. Provide reviewed examples in British English, Bahasa Melayu, and Simplified Chinese.
4. Assign only defensible levels, categories, and optional CEFR labels.
5. Run `npm run typecheck` and `npm test`; confirm question generation has enough suitable distractors.

The typed level rubric used by the application is in `src/data/vocabulary/levels.ts`.

## Firebase

1. Register a Firebase Web app.
2. Enable Anonymous sign-in and configure authorised domains.
3. Create a Realtime Database in an appropriate region and set its full URL.
4. Review and emulator-test `firebase/database.rules.json`.
5. Select the intended CLI project and deploy the rules:

   ```sh
   npx firebase-tools login
   npx firebase-tools use --add
   npx firebase-tools deploy --only database
   ```

Never use open test-mode rules in production.

For local emulators, set `VITE_USE_FIREBASE_EMULATOR=true` and run `npm run firebase:emulators` and `npm run dev` in separate terminals. Configured ports are Auth `9099`, Database `9000`, Functions `5001`, and Emulator UI `4000`. Use a non-production project ID.

Room codes are locators, not passwords. Rules enforce membership, host-controlled state changes, player-owned answers, bounded values, capacity, and expiry. The `rooms` tree supports 1v1 play; `multiRooms` supports two to four players.

Rooms expire two hours after creation. Scheduled cleanup jobs in `functions/index.js` run every 15 minutes. Deployment requires a Firebase Blaze project with Cloud Scheduler:

```sh
npm install --prefix functions
npm run functions:test
npx firebase-tools deploy --only functions:cleanupExpiredRooms,functions:cleanupExpiredMultiRooms,database
```

App Check is optional locally. Before enforcement, configure reCAPTCHA Enterprise, register intended origins, set `VITE_FIREBASE_APPCHECK_SITE_KEY`, and verify valid traffic. App Check supplements rather than replaces Authentication and Rules.

## Deployment

### Firebase Hosting

`firebase.json` serves `dist/`, configures clean URLs, and uses the generated `404.html` for unknown routes.

```sh
npm run build
npm run release:verify
npx firebase-tools deploy --only hosting
```

### GitHub Pages

`.github/workflows/deploy.yml` tests, type-checks, builds, verifies, and publishes the frontend from `main`. Add these repository Actions variables:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_DATABASE_URL`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`
- `VITE_FIREBASE_APPCHECK_SITE_KEY` (optional until configured)
- `VITE_SITE_URL` and `VITE_BASE_PATH` (optional overrides)

Choose **GitHub Actions** as the Pages source. The workflow does not deploy Database Rules or Functions; deploy those separately from a trusted environment.

## Release checklist

- Run frontend, Functions, and Rules tests, typechecking, build, and release verification.
- Confirm the build contains no `vocabduel.example` placeholder.
- Verify representative content and multiplayer routes using the preview server.
- Confirm canonical routes return `200` and unknown routes return a real `404`.
- Check titles, descriptions, canonical URLs, `hreflang`, headings, links, `robots.txt`, and `sitemap.xml`.
- Test keyboard navigation, focus, 320 px reflow, reduced motion, reconnects, expiry, and simultaneous answers.
- Test current Chromium and Firefox, Safari where available, Chrome Android, and Safari iPhone.
- Check social previews; some networks require a 1200x630 PNG instead of `public/social-card.svg`.

## Limitations

- Speech voices, quality, and availability vary by browser and operating system.
- Local progress can be lost when browser storage is cleared or another profile/device is used.
- Anonymous Firebase identities are temporary.
- Multiplayer is for casual learning. Client-visible content and browser-trusted logic are unsuitable for prizes, gambling, ranked seasons, or authoritative leaderboards.
- Competitive play would require server-authoritative question delivery, timing, scoring, and validation.
- The Privacy and Terms pages are product disclosures and launch checklists, not legal advice.

## Licence and content rights

No repository-wide software licence is currently declared. Unless the owner adds one, the source remains all rights reserved by default. Third-party vocabulary acknowledgements do not license the application as a whole.
