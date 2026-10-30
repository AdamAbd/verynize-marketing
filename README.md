# Verynize Marketing

TanStack Start + React landing page for Verynize. English product copy targets designers and developers working with local AI agents.

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

Tests cover SSR content, perspective switching, FAQ expansion, mobile navigation, clipboard copying, roadmap navigation/filtering, and layout overflow. These checks validate the marketing site, not the product runtime.

## Content sources

Copy is based on product **0.8.0** at commit `404c83bc9476665b6c88f9cd7405d6cbd8101276`, including `../verynize-product/README.md`, the acceptance notes updated 2026-10-29, and current code/test evidence. See [the product evidence ledger](docs/product-evidence.md) for supported claims, source conflicts, and validation limits. The product workspace is an original CSS illustration, explicitly labeled as illustrative. It is not a screenshot or evidence of a successful agent task.

The primary CTA opens source-checkout instructions. No public download, paid plan prices, signup, hosted collaboration, or production service is implied. Review the FAQ alongside the implementation status before changing claims. Product source is not bundled into the website. Fonts are bundled locally with their license.

## Pricing commitment

The product owner confirmed that the Verynize app will always be free. Any future paid offerings are limited to optional cloud and AI services. Self-hosting remains free of Verynize license or subscription fees; third-party infrastructure and AI usage may incur provider charges. Preserve this commitment in the hero, free-app section, and FAQ. This policy does not imply that hosted services are already available.

## Repository

This is the marketing Git submodule of the Verynize workspace. Its configured origin is `https://github.com/AdamAbd/verynize-marketing.git`. Commit changes here before updating the submodule pointer in the parent repository. Publishing the Git repository and deploying the website are separate actions.

## Roadmap

`/roadmap` starts from the feature coverage in [Wonder’s roadmap](https://wonder.design/roadmap), read on 2026-10-29 with Agent Reach/Jina Reader, and tracks Verynize’s own capabilities. The implementation and copy are original. Statuses come from our product acceptance notes dated 2026-10-29 and the product evidence ledger, not the vendor’s shipped labels.

The current inventory has 33 directions: 13 Available locally, 11 Partial, and 9 Exploring.

Edit `src/data/roadmap.ts` to maintain the feature inventory. Available locally means exercised within stated limits; Partial means bounded implementation or pending validation; Exploring is a parity direction with no delivery commitment. Do not promote an item without new product evidence. Preserve the always-free app and self-hosting commitment.

## License

Original Verynize code and documentation are licensed under the [MIT License](LICENSE). Third-party materials retain their own rights and licenses; see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
