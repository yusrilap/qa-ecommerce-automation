## Test Structure

- **Smoke Tests**
  - Critical business flows
  - Executed on every CI run

- **Regression Tests**
  - Validation & negative scenarios
  - Executed before release

## Run Tests

```bash
# Smoke only
npx playwright test --grep @smoke

# Regression only
npx playwright test --grep @regression

# All tests
npx playwright test

