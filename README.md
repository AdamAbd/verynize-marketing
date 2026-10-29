# Better Design Marketing

TanStack Start + React landing page for Better Design. English product copy targets designers and developers working with local AI agents.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for the client and SSR production bundles and `npm run preview` to inspect the build locally. No hosting adapter or production deployment is configured.

## Validation

```sh
npm run build
npm run typecheck
npx playwright install chromium
npm test
```

Tests cover SSR content, perspective switching, FAQ expansion, mobile navigation, clipboard copying, and layout overflow.

## Content sources

Copy is based on `../better-design-product/README.md` and `../better-design-product/docs/implementation-status.md` (2026-10-28). The product workspace is an original CSS illustration, explicitly labeled as illustrative. It is not a screenshot or evidence of a successful agent task.

The primary CTA opens source-checkout instructions. No public download, paid plan prices, signup, hosted collaboration, or production service is implied. Review the FAQ alongside the implementation status before changing claims. Product source is not bundled into the website. Fonts are bundled locally with their license.

## Pricing commitment

The product owner confirmed that the Better Design app will always be free. Any future paid offerings are limited to optional cloud and AI services. Self-hosting remains free of Better Design license or subscription fees; third-party infrastructure and AI usage may incur provider charges. Preserve this commitment in the hero, free-app section, and FAQ. This policy does not imply that hosted services are already available.

## Repository

This is a Git submodule of `better-design`. Its temporary origin is the sibling bare repository `../better-design-marketing.git` relative to the parent repository. Commit here first, push to the local origin, then commit the updated submodule pointer in the parent.
