<p align="center">
  <a href="https://kumatype-shindan.xyz/en">
    <img src="assets/logo/favicon.ico" alt="Kuma Type Shindan bear logo" width="72" height="72">
  </a>
</p>

<h1>
  Kuma Type Shindan Data
  <a href="README.zh-CN.md"><img align="right" alt="简体中文" src="https://img.shields.io/badge/%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-README-ff8fab?style=flat-square"></a>
  <a href="README.en.md"><img align="right" alt="English" src="https://img.shields.io/badge/English-current-f48fb1?style=flat-square"></a>
  <a href="README.md"><img align="right" alt="日本語" src="https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-README-ff8fab?style=flat-square"></a>
</h1>

This is an English translation. If it differs from the Japanese README, the Japanese version is authoritative.

Kuma Type Shindan Data is the public data, image asset, and scoring-rule package for [KUMA Love Type Quiz](https://kumatype-shindan.xyz/en), the English surface of the independent Kuma Type Shindan quiz and reference site. This repository lets developers, quiz writers, localization reviewers, and users inspect how the site represents the 20-question Kuma love type quiz, the 16 bear-type records, result lists, compatibility scores, and public reference assets.

This is not the full Next.js website source. It does not include deployment configuration, environment files, analytics setup, payment code, internal UI components, or private operational material.

## Why This Repository Exists

Kuma Type Shindan is a browser quiz and public reference site, but the quiz data and scoring behavior should be easy to inspect without exposing the private production application. This public package provides:

- Transparent question, type, compatibility, and scoring data.
- Public image and screenshot references for documentation review.
- A small scoring helper that reproduces the published result behavior.
- Tests that keep the public package shape and private-source boundary stable.
- A safe issue route for data corrections, documentation fixes, and public asset feedback.

## Official Site Features

- [KUMA Love Type Quiz](https://kumatype-shindan.xyz/en): Answer 20 questions in about 1-2 minutes and get one of 16 bear romance types.
- [Kuma 16 type result list](https://kumatype-shindan.xyz/en/types): Review each type name, MBTI-style code, romance tendency, and compatibility reading.
- [Kuma compatibility score tool](https://kumatype-shindan.xyz/en/compatibility): Choose two Kuma types and compare their compatibility score and interpretation.
- [Love Character 64](https://kumatype-shindan.xyz/en/lovecharacter64): A newer 64-result romance character quiz based on distance, affection style, realism, freedom, and future orientation in relationships.
- [Love Character 64 results](https://kumatype-shindan.xyz/en/lovecharacter64/results): Browse all 64 result images, type codes, and short romance summaries.
- [3D KUMA](https://kumatype-shindan.xyz/en/3d-bears): Compare the 16 types as plush-style and clay-figure-style 3D images.

## Changelog

- 2026-07: Added Love Character 64 with a 64-result romance character quiz and result gallery.
- 2026-07: Added Love Character 64 result pages and share-image support.
- 2026-07: Made the Japanese README authoritative and added English and Simplified Chinese translations.
- 2026-07: Replaced the README homepage preview with a clean first-screen screenshot without the language modal.

## Data And Tool Catalog

| Resource | Purpose | Key Detail | Path |
| --- | --- | --- | --- |
| Questions | Quiz model review | 20 public questions with axis and positive-pole metadata | `data/questions.json` |
| Kuma types | Result content review | 16 type records with names, slugs, descriptions, traits, groups, and compatibility links | `data/kuma-types.json` |
| Asset manifest | Public asset audit | Image and font source metadata carried over from the site project | `data/asset-manifest.json` |
| Scoring helper | Result reproduction | Public JavaScript helper for result and compatibility calculations | `src/scoring.mjs` |
| Scoring docs | Human-readable rules | Axis scoring, tie behavior, compatibility scoring, and labels | `docs/scoring.md` |
| Boundary docs | Public/private split | What this repository intentionally includes and excludes | `docs/public-boundary.md` |
| Public checks | Regression safety | Node tests for scoring and repository boundary expectations | `tests/` |

## Use Cases

- Inspect which question maps to which `EI`, `SN`, `TF`, or `JP` axis.
- Reproduce the result-code calculation outside the live website.
- Review all 16 Kuma type records and public compatibility relationships.
- Check why a neutral answer set resolves to `INFP`.
- Report public data, documentation, or asset-reference corrections without posting private account or security details.

## Getting Started In 3 Steps

1. Review the data files in `data/`, especially `data/questions.json` and `data/kuma-types.json`.
2. Read `docs/scoring.md` or import `src/scoring.mjs` to reproduce the result behavior.
3. Run the public checks before proposing data or scoring changes:

```bash
npm test
```

## Visual Preview

![Kuma Type Shindan desktop quiz home](assets/screenshots/home-desktop.png)

Additional public screenshots are available for the [16 type list](assets/screenshots/types-mobile.png), [compatibility tool](assets/screenshots/compatibility-mobile.png), and [result page](assets/screenshots/result-mobile.png).

## Official Mirrors

GitHub is the canonical public repository. Mirrors exist for platform-specific discovery and public-safe feedback routes.

| Platform | Link | Purpose |
| --- | --- | --- |
| GitHub | [kumatype-shindan/kuma-type-data](https://github.com/kumatype-shindan/kuma-type-data) | Canonical public data package |
| GitLab | [nano-products/kuma-type-data on GitLab](https://gitlab.com/nano-products/kuma-type-data) | GitLab mirror and issue context |
| Codeberg | [nano-products/kuma-type-data on Codeberg](https://codeberg.org/nano-products/kuma-type-data) | Forgejo/Codeberg discovery mirror |
| Gitee | [kuma-type-data on Gitee](https://gitee.com/nano-products/kuma-type-data) | Chinese platform mirror |
| GitCode | [kuma-type-data on GitCode](https://gitcode.com/weixin_52314137/kuma-type-data) | Chinese developer discovery mirror |
| Bitbucket | [kuma-type-data on Bitbucket](https://bitbucket.org/nano-products/kuma-type-data) | Bitbucket mirror |
| SourceHut | [kuma-type-data on SourceHut](https://git.sr.ht/~chrisv/kuma-type-data) | Clone-first mirror |
| Launchpad | [kuma-type-data on Launchpad](https://code.launchpad.net/~nano-products/+git/kuma-type-data) | Branch-oriented mirror |
| Disroot Git | [kuma-type-data on Disroot](https://git.disroot.org/nano-products/kuma-type-data) | Low-noise mirror |

## Scoring Capabilities

Answers are expected as numbers from `-2` to `2`. Each question belongs to one axis: `EI`, `SN`, `TF`, or `JP`. Positive answers add points to the question's positive pole. Negative answers add points to the opposite pole. The final result code is built from the winning pole on each axis.

When an axis is tied, the published implementation chooses the second pole because comparisons use `>` rather than `>=`. A fully neutral answer set therefore resolves to `INFP`.

```js
import questions from "./data/questions.json" with { type: "json" };
import { calculateKumaResultCode } from "./src/scoring.mjs";

const resultCode = calculateKumaResultCode([2, 1, 0, -1, -2], questions);
```

## Boundary

Included:

- 20 questions and axis metadata.
- 16 Kuma type records.
- Compatibility pair scoring rules.
- Public image assets and selected preview screenshots.
- Tests proving the data shape and public boundary.

Excluded:

- `.env` files and deployment secrets.
- Website application source such as Next.js routes and UI components.
- Google Analytics, payment, checkout, database, or provider configuration.
- Debug captures and local runtime artifacts.

## Support And Security

Use GitHub issues for public-safe corrections to question data, type records, compatibility behavior, public asset references, or documentation.

Do not post private account data, payment details, analytics exports, security vulnerabilities, private logs, or private website source in public issues. For private support or security-sensitive reports, email [Kuma Type Shindan support](mailto:support@kumatype-shindan.xyz).

## Independence Notice

Kuma Type Shindan is an independent quiz and reference site for people searching for KUMA x 16 LOVE TYPES, Kuma love type quiz questions, 16 Kuma type records, result lists, and compatibility score explanations. It is not operated by the official KUMA site, NOIZU, or the rights holders.
