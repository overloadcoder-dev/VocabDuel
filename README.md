# VocabDuel

VocabDuel is a static, mobile-first English vocabulary learning game for Chinese-speaking learners. A shared, typed vocabulary dataset powers detailed word study, five solo question types, configurable challenge sessions, local weak-word practice, and casual private 1v1 matches.

The production site is static. Firebase Anonymous Authentication and Realtime Database are loaded only for multiplayer; normal learning and solo games do not require an account or Firebase.

> **Pre-deployment checklist:** source metadata uses `https://vocabduel.example` as a build-time token. The GitHub Pages workflow replaces it with `VITE_SITE_URL` or the repository-derived Pages origin; other production builds must set `VITE_SITE_URL`. The Privacy and Terms pages still require the real operator/contact/jurisdiction facts and appropriate legal review.

## Architecture

- Static multi-page HTML provides crawlable content at `/`, `/learn/`, `/play/`, `/multiplayer/`, `/placement/`, `/levels/`, `/how-to-play/`, `/about/`, `/privacy/`, and `/terms/`.
- `src/data/vocabulary/` contains one curated term module per learning level. Browser routes dynamically load only the levels they need; `src/data/vocabulary.ts` remains the full editorial/test aggregate, and `src/types/` defines vocabulary, game, and progress contracts.
- `src/config/site.ts` centralizes the product name, provisional origin, description, and canonical route map; static HTML keeps route-specific metadata crawlable without JavaScript.
- `src/games/` contains deterministic question generation, scoring, and session behavior separately from page rendering.
- `src/storage/` stores non-sensitive solo progress in localStorage.
- `src/speech/` wraps the browser Web Speech API.
- `src/multiplayer/` isolates Firebase loading, room operations, presence, synchronized time, and state transitions.
- Vite builds every route as a static HTML entry. Tailwind is compiled locally.

## Requirements and installation

Use a current Node.js LTS release and npm.

```sh
npm install
cp .env.example .env.local
npm run dev
```

On PowerShell, copy the environment file with `Copy-Item .env.example .env.local`.

Useful commands:

```sh
npm run typecheck
npm test
npm run build
npm run preview
```

`npm run build` writes the static production output to `dist/`. Verify representative routes from `npm run preview`, including a content page and multiplayer, rather than opening built HTML directly from the filesystem.

## Environment configuration

Create `.env.local`; do not commit it. Supply the public Firebase web-app configuration from Firebase Console:

```dotenv
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_DATABASE_URL=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_APP_ID=
VITE_SITE_URL=https://your-production-origin.example
VITE_BASE_PATH=/
VITE_USE_FIREBASE_EMULATOR=false
```

Firebase web API keys identify a Firebase project; they are not database authorization. Security depends on Authentication, Realtime Database Rules, App Check, quotas, and monitoring. Never put service-account credentials or other secrets in a `VITE_` variable.

If Firebase variables are missing or Firebase is unavailable, multiplayer reports an unavailable state while local learning remains usable.

For a GitHub Pages project site, use an origin such as `https://OWNER.github.io/REPOSITORY` and a base path such as `/REPOSITORY/`. The deployment workflow derives both automatically unless the `VITE_SITE_URL` and `VITE_BASE_PATH` repository variables override them.

## Firebase setup

1. Create or select a Firebase project and register a Web app.
2. In **Authentication → Sign-in method**, enable **Anonymous** authentication. Configure authorized domains for production and previews.
3. Create a Realtime Database in the region appropriate for the audience. Copy its complete URL (including the regional hostname) to `VITE_FIREBASE_DATABASE_URL`.
4. Review `firebase/database.rules.json`, select the intended Firebase CLI project, then deploy rules:

   ```sh
   npx firebase-tools login
   npx firebase-tools use --add
   npx firebase-tools deploy --only database
   ```

5. Never switch a production database to open test mode. Test rules against the emulator before every material model change.

### Realtime Database model

```text
rooms/{roomCode}/
  metadata/{code, hostUid, state, seed, createdAt, expiresAt}
  config/{level, category, gameType, questionCount, roundTimeMs}
  players/{uid}/{uid, displayName, ready, connected, joinedAt, lastSeenAt}
  match/{startAt, rematchNumber}
  answers/{roundId}/{uid}/{selectedAnswer, submittedAt}
  rematchVotes/{uid}
```

Room codes are locators, not passwords. Rules allow authenticated visitors to read a waiting room addressed by its code so they can join; after play starts, reads are member-only. The host controls configuration, match timing, and state changes. Each player can update only their own player record and create only their own bounded answer or rematch vote. Payload keys, strings, enums, counts, timing ranges, and room capacity are validated. Unknown top-level data is rejected.

The initial client uses server timestamp resolution and `/.info/serverTimeOffset` to render timers locally. It writes state transitions rather than countdown ticks. Presence uses `onDisconnect`; listeners must be detached when leaving a room.

### Emulator workflow

Set `VITE_USE_FIREBASE_EMULATOR=true` in `.env.local`, then run in separate terminals:

```sh
npm run firebase:emulators
npm run dev
```

Configured local ports are Auth `9099`, Database `9000`, Functions `5001`, and Emulator UI `4000`. Always use a non-production Firebase project ID for emulator work. Run `npm run firebase:rules:test` after installing Java 21 or newer; emulator smoke testing alone is not a complete security test.

### App Check and operational hardening

Before public launch, enable Firebase App Check for the web app with an appropriate provider (such as reCAPTCHA Enterprise), register the production and intentional preview origins, verify valid traffic, and then enable enforcement for Realtime Database. Use the documented debug-token flow only for local development, never a production token in source control.

Also configure Firebase budget alerts and usage monitoring. App Check reduces unauthorized clients but does not replace Authentication or Security Rules.

Rooms expire two hours after creation. Rules deny reads and non-delete writes after expiry, and `functions/index.js` defines the trusted `cleanupExpiredRooms` job that deletes expired records every 15 minutes in bounded batches. The job is idempotent because scheduled invocations can overlap; under normal operation, room records are retained for roughly two hours plus the scheduler interval.

The cleanup function requires a Firebase project on the Blaze plan with Cloud Scheduler available. Before the first production deployment, confirm that the Function and Realtime Database regions are appropriately colocated, then deploy from a trusted Firebase CLI session:

```sh
npm install --prefix functions
npm run functions:test
npx firebase-tools deploy --only functions:cleanupExpiredRooms,database
```

Monitor Function logs for batch-cap warnings. The Pages workflow installs and tests the Functions package so it cannot silently rot, but intentionally does not deploy backend resources or Database Rules.

## Vocabulary data

Each item follows the typed `VocabularyItem` contract: stable ID and normalized term, part of speech, optional IPA, short and detailed Chinese explanations, an English definition, bilingual examples, optional collocations/synonyms/antonyms, an internal Level 1–5, optional accurately curated CEFR tag, and data-driven categories.

To add words:

1. Add entries to the relevant module under `src/data/vocabulary/`.
2. Use a stable unique ID and a lowercase normalized form suitable for answer comparison.
3. Write original or properly licensed, human-reviewed definitions and examples. Do not fabricate content to increase the count.
4. Assign only accurate levels, categories, and optional CEFR labels.
5. Run typechecking and tests. Check that distractor generation still has enough same-level candidates.

The typed classification rubric lives in `src/data/vocabulary/levels.ts` and its editorial explanation in `src/data/vocabulary/README.md`. IELTS ranges are approximate learner targets rather than official word-to-band assignments.

If an individual level grows very large, it can be split further by category and dynamically loaded without changing the item contract.

## Deployment and SEO

Deploy `dist/` to a static host. Configure clean directory URLs and make sure `/route/` resolves to `/route/index.html`. Configure the host to return a real `404` for unknown paths rather than rewriting every request to the homepage. Use HTTPS and apply appropriate security headers.

For Firebase Hosting, the included `firebase.json` serves `dist/`, enables clean trailing-slash URLs, and lets the generated `404.html` handle unknown routes. After selecting the correct Firebase project:

```bash
npm run build
npx firebase-tools deploy --only hosting
```

### GitHub Pages deployment

The included `.github/workflows/deploy.yml` publishes the frontend to GitHub Pages while Firebase continues to provide Authentication and Realtime Database.

In the GitHub repository, open **Settings → Secrets and variables → Actions → Variables** and add these repository variables from the Firebase Web app configuration:

- `VITE_FIREBASE_API_KEY`
- `VITE_FIREBASE_AUTH_DOMAIN`
- `VITE_FIREBASE_DATABASE_URL`
- `VITE_FIREBASE_PROJECT_ID`
- `VITE_FIREBASE_APP_ID`

These values are bundled into browser code and are project identifiers, not service-account secrets. Never add a service-account JSON key to a `VITE_` variable. Optionally set `VITE_SITE_URL` and `VITE_BASE_PATH` when using a custom domain or a nonstandard Pages path.

Then open **Settings → Pages**, choose **GitHub Actions** as the source, and push to `main`. The workflow validates configuration, runs tests and TypeScript, builds with the repository subpath, and publishes `dist/`.

The Pages workflow does not deploy Realtime Database Rules. Deploy `firebase/database.rules.json` from a trusted local Firebase CLI session as described above. If rules deployment is later automated, use short-lived GitHub OIDC/Google Workload Identity credentials rather than a legacy `FIREBASE_TOKEN`.

Before release:

- Set the canonical `VITE_SITE_URL` and `VITE_BASE_PATH`, rebuild, and confirm `dist/` contains no `vocabduel.example`. The Pages workflow derives these values automatically unless repository variables override them.
- Confirm each canonical route returns `200` and has one H1, its own title/description/canonical, visible content, and internal links.
- Fetch the deployed `/robots.txt` and `/sitemap.xml`; parse the sitemap and verify every listed canonical URL.
- Check the social preview image on the target networks. Some networks do not accept SVG preview images; export `public/social-card.svg` to a 1200×630 PNG and update metadata if required.
- Protect staging with authentication or intentional `noindex`; do not accidentally ship staging robots directives to production.

## Browser and product limitations

- Speech synthesis voices, accents, pronunciation quality, and voice loading differ across browsers and operating systems. Audio starts only after user interaction and remains unavailable where the Web Speech API is unsupported.
- localStorage is browser- and profile-specific. Clearing site data, private browsing, or moving devices can remove progress.
- Anonymous Firebase identities are temporary and are not user accounts. Clearing site storage may create a new identity.
- The multiplayer client is suitable for casual learning, not authoritative competition. A technically capable player can inspect vocabulary and manipulate browser-trusted game logic. Do not use client scores for prizes, ranked seasons, gambling, or global authoritative leaderboards.
- Security Rules constrain access and obvious invalid mutations, but they cannot prove that a submitted answer was honestly produced or calculate a trusted score. A future ranked mode needs server-authoritative question delivery, timing, scoring, and match validation (for example, trusted Cloud Functions).
- Privacy and legal requirements vary by operator and region. The included pages are accurate product disclosures and launch checklists, not substitute legal advice.

## Manual release coverage

In addition to automated tests, check current Chromium and Firefox desktop, Safari where available, Chrome Android, and Safari iPhone. Pay particular attention to keyboard-only operation, visible focus, 320 px reflow, speech availability/failure, simultaneous answers, reconnect and expiry behavior, reduced motion, and production HTML metadata.
