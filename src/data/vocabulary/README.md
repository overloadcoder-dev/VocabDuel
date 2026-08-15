# Vocabulary classification

Vocabulary is split by the app's five learning levels. Level files vary in size; the combined catalogue currently contains 2,220 unique terms after repeated IDs are resolved with the earliest level taking precedence. Add a term to the file matching its learning burden rather than judging it only by word length.

| App level | Typical CEFR | Approximate IELTS target | Editorial meaning |
| --- | --- | --- | --- |
| 1 | A1-A2 | Foundation / below Band 4 | Frequent, concrete, everyday words |
| 2 | A2-B1 | Band 4.0-5.0 | Familiar words for everyday, travel, study, and routine work |
| 3 | B1-B2 | Band 5.5-6.5 | Broader or abstract vocabulary common in general and academic topics |
| 4 | B2-C1 | Band 7.0-8.0 | Less-common words needing accurate register, nuance, or collocation |
| 5 | C1-C2 | Band 8.5-9.0 | Highly nuanced, specialised, idiomatic, or uncommon vocabulary |

The IELTS ranges are orientation labels, not official vocabulary bands. IELTS assesses vocabulary range, accuracy, appropriacy, precision, collocation, and flexible use in context; knowing one word cannot guarantee a band score.

## Assigning a term

Consider all of these together:

1. **Frequency:** How often does a learner meet the word in everyday or academic English?
2. **Concreteness:** Is the meaning visible and direct, or abstract and context-dependent?
3. **Range:** Does the word have several meanings or grammatical uses?
4. **Collocation:** Does natural use depend on knowing particular word combinations?
5. **Register:** Is it neutral and general, or formal, academic, idiomatic, or specialised?
6. **Precision:** Could a common word replace it without losing important nuance?

Use a stable unique `id`, lowercase `normalizedTerm`, at least one bilingual example, and only categories declared in `VOCABULARY_CATEGORIES`. Keep definitions and examples original or appropriately licensed and human-reviewed.

`levels.ts` contains the same guidance as typed data so the application can display it. `../vocabulary.ts` provides the full editorial/test aggregate, while `../load-vocabulary.ts` dynamically loads the levels required by each browser feature.
