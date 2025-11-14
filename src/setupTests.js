/**
 * Jest DOM Testing Setup
 * 
 * This file is automatically loaded by Jest before running tests.
 * It sets up custom jest matchers from jest-dom for asserting on DOM nodes.
 * 
 * Learn more: https://github.com/testing-library/jest-dom
 */

import '@testing-library/jest-dom';

/**
 * Custom matchers available:
 * 
 * - toBeDisabled()
 * - toBeEnabled()
 * - toBeEmpty()
 * - toBeEmptyDOMElement()
 * - toBeInTheDocument()
 * - toBeInvalid()
 * - toBeRequired()
 * - toBeValid()
 * - toBeVisible()
 * - toContainElement()
 * - toContainHTML()
 * - toHaveAccessibleDescription()
 * - toHaveAccessibleName()
 * - toHaveAttribute()
 * - toHaveClass()
 * - toHaveFocus()
 * - toHaveFormValues()
 * - toHaveStyle()
 * - toHaveTextContent()
 * - toHaveValue()
 * - toHaveDisplayValue()
 * - toBeChecked()
 * - toBePartiallyChecked()
 * - toHaveErrorMessage()
 */

// Mock window.matchMedia for responsive testing
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  disconnect() {}
  observe() {}
  takeRecords() {
    return [];
  }
  unobserve() {}
};

// Suppress console errors in tests (optional)
const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render')
    ) {
      return;
    }
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});
