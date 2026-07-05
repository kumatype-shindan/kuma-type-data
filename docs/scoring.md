# Scoring Rules

This repository publishes the data and rules needed to reproduce the Kuma Type Shindan result calculation.

## Question Format

Each question has:

- `id`: question order from 1 to 20.
- `axis`: one of `EI`, `SN`, `TF`, or `JP`.
- `positive`: the pole that receives points when the answer is positive.
- `text`: public question text.

Answers are numeric values from `-2` to `2`.

## Result Code Calculation

1. Start every pole score at zero: `E`, `I`, `S`, `N`, `T`, `F`, `J`, and `P`.
2. For each answer:
   - positive values add to the question's `positive` pole;
   - negative values add the absolute value to the opposite pole;
   - zero adds no points.
3. Build a four-letter code:
   - `E` if `E > I`, otherwise `I`;
   - `S` if `S > N`, otherwise `N`;
   - `T` if `T > F`, otherwise `F`;
   - `J` if `J > P`, otherwise `P`.

Because ties use the second pole, a fully neutral answer set resolves to `INFP`.

## Compatibility Calculation

Compatibility uses each type's primary compatibility list plus a group-affinity matrix.

The public helper starts from a base score of `62`, then adds:

- `22` for a mutual primary compatibility match;
- `16` for a one-way direct compatibility match;
- `8` if both types are in the same group;
- otherwise the configured group-affinity value.

The score is capped at `96`.

Score labels:

- `88` and above: `最高に噛み合う相性`
- `78` to `87`: `かなり心地いい相性`
- below `78`: `ゆっくり育つ相性`
