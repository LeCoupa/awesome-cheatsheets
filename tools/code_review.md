# Code Review

> Will this code become someone else's problem within three months?

## Core Rules

- Walk the five axes in priority order: **Correctness → Security → Readability → Performance → Tests**.
- Each axis is graded **pass / fail / N-A**.
- **Concrete-fix rule**: Every failure must include an exact line reference and a concrete fix.
- **Max 10 comments**: >10 issues means reject and ask for resubmission, not a 50-item grade sheet.
- **No style policing**: Formatting, quotes, and spacing belong to linters.

## Scope

| Diff size | Action |
| --- | --- |
| ≤ ~400 lines | Review normally |
| > ~400 lines | Request a split first; review quality collapses on large diffs |

## The Five Axes

### 1. Correctness (Blocks merge)
- Edge cases handled: null, empty, zero, negative, boundary/oversized input.
- Concurrency and timing assumptions hold; no race conditions.
- Errors and exceptions handled explicitly, never swallowed.

### 2. Security (Blocks merge)
- No user input concatenated into SQL, shell commands, or HTML.
- No hard-coded secrets, tokens, or credentials.
- Logs and error messages do not leak sensitive data or PII.

### 3. Readability
- Descriptive names; functions have a single responsibility.
- Magic numbers are extracted into named constants.
- Flag only incomprehensible logic, not personal style preferences.

### 4. Performance
- No repeated queries, allocations, or recomputations inside loops.
- No N+1 query patterns across boundaries.
- No data-free speculation ("this might be slow" is invalid feedback).

### 5. Test Coverage
- New logic and modified paths have automated tests.
- Edge cases and failure modes have dedicated test cases.
- All-green suites that miss critical paths get sent back.

## Writing Comments

### Fixed Format

```text
[severity][axis] file:line problem → suggested fix
```

**Examples:**
```text
[Must fix][Correctness] order.py:87 empty order list raises IndexError → guard before taking [0]
[Should fix][Readability] order.py:92 magic number 86400 → name it SECONDS_PER_DAY
```

### Triage

| Label | Axes | Blocks merge? |
| --- | --- | --- |
| Must fix | Correctness, Security | Yes |
| Should fix | Readability, Performance, Tests | No (say so explicitly) |

## Anti-patterns

| Anti-pattern | Failure mode |
| --- | --- |
| Drive-by LGTM | Approving before reading the whole diff |
| Style policing | Nits on quotes while logic defects slip through |
| Vague feedback | "This looks off" without line number or fix |
| Speculative perf | Blocking code on unmeasured performance worries |
| 50-item grading | Teaching in review instead of sending back to rewrite |

## Quick Checklist

```markdown
- [ ] Scope: diff ≤ ~400 lines (split if larger)
- [ ] Correctness: edge cases handled, exceptions caught, no races
- [ ] Security: input sanitized, no secrets, no sensitive logs
- [ ] Readability: clear names, single responsibility, no magic numbers
- [ ] Performance: no loop queries/N+1, no unverified perf speculation
- [ ] Tests: new paths covered, edge cases tested
- [ ] Fixes: every comment has file:line and a concrete fix (max 10)
```
