# CLAUDE.md

Guidance for Claude Code when working in this repository.

## What this is

Shane Freed's portfolio site, **srfreedconsulting.com**. Angular 20, hash
routing, hosted on Firebase in the `srfreedconsulting` project, source on
GitHub at `sfreed/srfreedconsulting`. It is a
data-driven site: the pages are thin, and nearly everything a reader sees comes
from three files under `src/app/data/`.

The site is actively read by people evaluating Shane for engagements, so
**accuracy and framing matter more than polish**. The pitch it supports is
methodology and AI adoption across teams, not just modernization. Every claim
on it should be true of the real code it describes.

## Where this sits among Shane's other projects

This repo is the **downstream, descriptive** end of everything else Shane
builds. It does not share code with the other projects; it describes them. That
means it can go stale without anything breaking, and the main job here is
keeping it true to the projects it presents.

### The Impact estate (`C:\web\repo\`)

Three live Angular 20 + Firebase applications for Impact Discipleship
Ministries, plus a shared library and Cloud Functions. This is the largest body
of work on the site and the source of three case studies, the `/impact`
overview, and most of the agentic-delivery results.

| App on this site | Repo (note the spaces) | GitHub |
|---|---|---|
| Impact Platform & Storefront (`/work/impact-platform`) | `impactdisciples - web` | `SRFreed-Consulting-LLC/impactdisciplesweb` |
| Impact Operations Platform (`/work/impact-admin`) | `impactdisciples - admin` | `SRFreed-Consulting-LLC/impactdisciplesadmin` |
| Impact Library (`/work/impact-library`) | `impact-discipleship-library-new` | `SRFreed-Consulting-LLC/impact-discipleship-library` |
| shared library (submodule `src/common`) | `impact-discipleship-library-common` | rides inside each app |

Facts that constrain what this site may say:

- There are **three** apps, not four. The standalone Library Manager was
  folded into the admin app on 2026-08-16. The site already says three.
- The shared submodule is `impact-discipleship-library-common`. There is one
  of them. The architecture diagram on `/impact` still names
  `impactdisciplescommon` and `impactdisciplespwacommon`, which is wrong. See
  Open items.
- Cloud Functions for the whole estate live in the admin repo's `functions/`.
  The `functions/` directory in **this** repo is an empty Firebase scaffold and
  is not the import pipeline the site describes.
- Import Book (the Anthropic-backed PDF import) lives in the admin repo. The
  guardrail the site describes is architectural: the function never writes
  library content, a person confirms the plan first.
- Each Impact repo has its own `CLAUDE.md`, and `C:\web\repo\` holds dated
  `HANDOFF-*.md` files. Read the newest handoff before writing anything new
  about the estate. Those repos are the source of truth, not this site.

### SMEAC Spec Builder (`C:\web\projects\smeac-spec-builder\`)

The newest project, September 2026. A tool that walks someone through writing
an agent-ready spec as a Marine Corps five-paragraph order (Situation, Mission,
Execution, Admin & Logistics, Command & Signal), by voice or by typing, and
emits markdown to paste into Claude Code or Cursor. Angular 22, Angular
Material, signals, zoneless, Firebase Auth and Firestore. GitHub
`sfreed/smeac-spec-builder`. Live at https://smeac.srfreedconsulting.com.

It is a **sister site of this one in the same Firebase project**:

- Both deploy to project `srfreedconsulting`. This repo owns the default
  hosting site and the default Firestore database. SMEAC deploys to the
  hosting target `smeac-spec-builder` and uses the named Firestore database
  `smeac`. Do not touch the other's resources from either repo.
- Both use the same GitHub Actions secret,
  `FIREBASE_SERVICE_ACCOUNT_SRFREEDCONSULTING`.
- Its own `CLAUDE.md` and `SPEC.md` describe how to work in it. Its `SPEC.md`
  is written in the format the tool produces, and is a good example of what
  the site's "Spec first" principle looks like in practice.

**SMEAC is not yet on this site and Shane wants it added.** Where it belongs:

- A `WorkItem` in `work.ts` (`kind: 'product'`, self-directed, with a
  `liveUrl`) and a matching `CaseStudy` in `case-studies.ts` under the same
  slug, so the card gets its study.
- A mention on `/agentic`. It is the concrete tool behind the "Spec first"
  principle, and it is a second example of AI-adjacent work shipped as a
  product for other people, alongside Import Book.
- Frame it the way SMEAC's own README does: a good agentic spec and a good
  operations order solve the same problem, somebody has to act correctly on
  your behalf when you are not there to be asked. Commander's intent is the
  part that matters. Shane is a Marine and the framing is deliberate.

### Client engagements (no repos here)

Federal Reserve Bank of Cleveland, Chick-fil-A, JBH Trucking, Alliance Group,
Deloitte, JPMorgan Chase, Chewy. These exist on the site as data only. Their
code is not on this machine and nothing about them can be verified locally, so
change those entries only on Shane's word.

### Historical (`C:\web\old repos\`)

Older checkouts, including the pre-merge Library Manager and the pre-rebuild
Impact repos. Reference only. Nothing on the site should be sourced from them.

## Layout

```
src/app/data/work.ts             WORK index entries, AVAILABILITY, WorkService
src/app/data/case-studies.ts     long-form CaseStudy per slug (sections, gallery, device shots)
src/app/data/background.ts       career timeline, leadership items, credentials
src/app/pages/home/              landing
src/app/pages/work/              filterable index of WORK
src/app/pages/case-study/        one component renders every study by :slug
src/app/pages/impact-system/     the three-app overview and architecture diagram
src/app/pages/agentic/           adoption, before/after results, shipped AI, principles
src/app/pages/background/        timeline, leadership, credentials, contact anchor
src/app/app-routing.module.ts    routes; old page paths redirect rather than 404
src/app/app-navigation.ts        the nav items
src/assets/work/<slug>/          screenshots per study (webp)
```

Rules the code already enforces, which you should keep:

- `hasCaseStudy` is derived from whether `CASE_STUDIES[slug]` exists. Do not
  set it by hand; write the study and the card follows.
- Availability is derived from `AVAILABILITY.engagementEnds`, so the label
  cannot go stale. Change the date, not the strings.
- Old routes (`/experience`, `/skills`, `/certifications`, `/projects`)
  redirect to the pages that absorbed them. Keep any new redirects here too.

## Commands

```
npm install
npm start            # ng serve, http://localhost:4200
npm run build        # production build to dist/
npm run deploy       # firebase deploy --only hosting
```

There is no test suite. Shane removed it on 2026-09-03 on purpose: this is a
portfolio, and his review is the check. Do not add specs or Karma back.

Type-check with `npx tsc --noEmit -p tsconfig.app.json` (not the bare
`tsconfig.json`).

Use `npm run deploy`, not a bare `firebase deploy`. This repo's `firebase.json`
also declares Firestore rules and a functions codebase, and an unqualified
deploy would push the empty scaffold and the rules along with hosting.

## Branches and deployment

- `master` is the deployed branch. A push to `master` builds and deploys to
  Firebase Hosting through `.github/workflows/`; pull requests get a preview
  channel.
- Work happens on branches. `angular-20-migration` holds the whole summer 2026
  rebuild (Angular 16 to 20, DevExtreme and Bootstrap removed, the ten-screen
  portfolio). It is pushed, and the live site is deployed from it by hand with
  `npm run deploy`. `origin/master` still carries five older style commits
  (the GABBY-Initial PR) that this branch never took, so merging is not a
  fast-forward; that merge is Shane's call.
- The `.firebase/hosting.*.cache` file changes on every manual deploy. Leave
  it out of commits.
- **Never merge to `master` without asking, even under a general "ship it".**
  That is Shane's standing rule across every repo.

## How Shane works, which applies here

- **Walk him through each change before making it.** Present the approach or
  the diff per item and wait, even after a general go-ahead.
- Make file changes with the Read, Edit and Write tools. Do not write files
  through shell heredocs or `sed`. Bash is for running node, npm, git and
  firebase.
- No Python on this machine. Use node for scripts.
- Do not `rm -rf` directories in Git Bash without checking for junctions
  first; it followed one and wiped a `node_modules` once.
- After a deploy or a deploying push, report it and end with the live URL.
  Do not sit and watch the GitHub Actions run.
- Make the change and deploy for Shane to look at. No screenshot, adjust,
  redeploy loops on visual work.
- **This is a portfolio, not a system. Shane's approval is the gate.** A
  build to catch a broken template is enough before a preview; do not run
  the test suite, write specs, or otherwise "prove" a content change. Put a
  preview link in front of him and stop. Live deploys wait for his yes.

## Open items

Carried from `HANDOFF.md` (2026-08-24) and still true on 2026-09-03:

1. **SMEAC Spec Builder is on the site as of 2026-09-04** (Work entry, case
   study, `/agentic` item). The gallery is the public help and sign-in
   screens; the editor needs a signed-in account to capture.
2. **Fix the library names on `/impact`.** The diagram in
   `impact-system.component.html` names two shared libraries that do not exist
   under those names; there is one, `impact-discipleship-library-common`.
3. **The Import Book before/after line is missing its "after" number.** Before
   was 6 to 7 weeks to get a book into the app, plus weeks to translate it.
   Do not write the line until Shane supplies the after.
4. **Reconcile `angular-20-migration` with `master`.** The branch is pushed
   and live as of 2026-09-04; master still has the old style commits. Ask
   Shane whether to merge over them or reset master to this branch.
5. **`HANDOFF.md` is untracked.** Most of it has landed; decide whether to
   commit it as history or delete it once the items above are done.
