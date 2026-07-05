<p align="center">
  <a href="https://kumatype-shindan.xyz/en">
    <img src="assets/logo/favicon.ico" alt="Kuma Type Shindan bear logo" width="72" height="72">
  </a>
</p>

# Kuma Type Shindan Data

[日本語](README.md) | English | [简体中文](README.zh-CN.md)

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

## Data And Tool Catalog

| Resource | Purpose | Key Detail | Link |
| --- | --- | --- | --- |
| Questions | Quiz model review | 20 public questions with axis and positive-pole metadata | [questions.json](data/questions.json) |
| Kuma types | Result content review | 16 type records with names, slugs, descriptions, traits, groups, and compatibility links | [kuma-types.json](data/kuma-types.json) |
| Asset manifest | Public asset audit | Image and font source metadata carried over from the site project | [asset-manifest.json](data/asset-manifest.json) |
| Scoring helper | Result reproduction | Public JavaScript helper for result and compatibility calculations | [scoring.mjs](src/scoring.mjs) |
| Scoring docs | Human-readable rules | Axis scoring, tie behavior, compatibility scoring, and labels | [scoring documentation](docs/scoring.md) |
| Boundary docs | Public/private split | What this repository intentionally includes and excludes | [public boundary](docs/public-boundary.md) |
| Public checks | Regression safety | Node tests for scoring and repository boundary expectations | [tests](tests) |

## Use Cases

- Inspect which question maps to which `EI`, `SN`, `TF`, or `JP` axis.
- Reproduce the result-code calculation outside the live website.
- Review all 16 Kuma type records and public compatibility relationships.
- Check why a neutral answer set resolves to `INFP`.
- Report public data, documentation, or asset-reference corrections without posting private account or security details.

## Getting Started In 3 Steps

1. Review the data files in [data](data), especially [questions.json](data/questions.json) and [kuma-types.json](data/kuma-types.json).
2. Read [docs/scoring.md](docs/scoring.md) or import [src/scoring.mjs](src/scoring.mjs) to reproduce the result behavior.
3. Run the public checks before proposing data or scoring changes:

```bash
npm test
```

## Visual Preview

![Kuma Type Shindan desktop quiz home](assets/screenshots/home-desktop.png)

Additional public screenshots are available for the [16 type list](assets/screenshots/types-mobile.png), [compatibility tool](assets/screenshots/compatibility-mobile.png), and [result page](assets/screenshots/result-mobile.png).

## Official Links

| Destination | Link |
| --- | --- |
| Official English quiz website | [KUMA Love Type Quiz](https://kumatype-shindan.xyz/en) |
| Japanese main website | [Kuma Type Shindan](https://kumatype-shindan.xyz) |
| English 16 type hub | [Kuma 16 type result list](https://kumatype-shindan.xyz/en/types) |
| English compatibility tool | [Kuma compatibility score tool](https://kumatype-shindan.xyz/en/compatibility) |
| Primary GitHub repository | [Kuma Type Shindan Data on GitHub](https://github.com/kumatype-shindan/kuma-type-data) |
| Public support guide | [SUPPORT.md](SUPPORT.md) |
| Security reporting guide | [SECURITY.md](SECURITY.md) |

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
