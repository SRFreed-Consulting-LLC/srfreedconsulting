# srfreedconsulting

Shane Freed's portfolio site, live at https://srfreedconsulting.com.

Angular 20 with hash routing, hosted on Firebase Hosting in the
`srfreedconsulting` project. The pages are thin; the content lives in
`src/app/data/` (`work.ts`, `case-studies.ts`, `background.ts`).

A sister site, [SMEAC Spec Builder](https://smeac.srfreedconsulting.com),
lives in its own repo and deploys to a second hosting target in the same
Firebase project.

## Running it

```sh
npm install
npm start          # http://localhost:4200
npm run build      # production bundle to dist/
npm run deploy     # firebase deploy --only hosting (needs firebase login)
```

There is no test suite, on purpose. A clean build and a look at the site are
the check.

## Deploying

`master` is the deployed branch. A push to `master` builds and deploys through
`.github/workflows/`; pull requests get a preview channel. Deploying by hand
with `npm run deploy` from a checkout does the same thing without the
pipeline.

See `CLAUDE.md` for how this repo relates to the other projects it describes.
