# Frontend Testing Guidelines

This document provides guidelines for testing frontend applications to ensure they are reliable and maintainable.

## 1. Testing Pyramid

Structure your tests according to the testing pyramid:

- **Unit Tests (Most Numerous)**:
    - Test individual components or functions in isolation.
    - Use libraries like Vitest, Jest and React Testing Library.
    - Mock dependencies (e.g., API calls, external modules) to focus on the unit under test.
- **Integration Tests**:
    - Test the interaction between multiple components.
    - Verify that components work together as expected.
    - Can also use React Testing Library, focusing on user flows across a few components.
- **End-to-End (E2E) Tests (Fewest)**:
    - Test the entire application flow from the user's perspective.
    - Use tools like Cypress or Playwright to simulate user interactions in a real browser.
    - These tests are slower and more brittle, so reserve them for critical user paths.

## 2. Unit Testing Best Practices

- **Test Component Rendering**: Verify that components render correctly with different props and state.
- **Test User Interactions**: Simulate user events (e.g., clicks, input changes) and assert that the component behaves as expected. Use `user-event` from Testing Library for more realistic event simulation.
- **Querying Elements**: Use accessible queries from Testing Library (e.g., `getByRole`, `getByLabelText`) to find elements. This encourages accessible design and makes tests more resilient to implementation changes.
- **Avoid Testing Implementation Details**: Focus on testing the component's behavior from the user's perspective, not its internal implementation.

## 3. Integration Testing Best Practices

- **Focus on User Flows**: Test a sequence of user actions that span multiple components (e.g., filling out a form and submitting it).
- **Mocking**: Mock external services (e.g., APIs) to ensure tests are fast and reliable. Use libraries like `msw` (Mock Service Worker) to intercept network requests.

## 4. E2E Testing Best Practices

- **Critical Paths**: Focus E2E tests on the most critical user journeys (e.g., login, checkout, core features).
- **Stable Test Environment**: Run E2E tests in a dedicated, stable environment to minimize flakiness.
- **Descriptive Test Names**: Give your tests clear, descriptive names that explain the flow being tested.

## 5. General Advice

- **Co-locate Tests**: Place test files next to the source files they are testing (e.g., `MyComponent.tsx` and `MyComponent.test.tsx`).
- **CI/CD Integration**: Integrate your tests into your CI/CD pipeline to ensure that no new code is merged without passing all tests.
