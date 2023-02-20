import React from 'react';
import { calculatePercentages } from '../helpers';

describe('Main tests', () => {
  it('should check edit cells logic (pass if percentage calculated correctly)', () => {
    const expectedValue = 10;
    const percentages = 10;
    const n = 100;

    const result = calculatePercentages(n, percentages);

    expect(result).toBe(expectedValue);
  });

  it('should check edit cells logic (will not pass if targetValue is bigger than allowedValue)', () => {
    const targetValue = 115;
    const percentages = 10;
    const n = 100;

    const allowedValue = calculatePercentages(n, percentages);

    const isSaveBlocked =
      n + allowedValue <= +targetValue || n - allowedValue >= +targetValue;

    expect(isSaveBlocked).toBe(true);
  });

  it('should check edit cells logic (will pass if targetValue is less or equal to allowedValue)', () => {
    const targetValue = 109;
    const percentages = 10;
    const n = 100;

    const allowedValue = calculatePercentages(n, percentages);

    const isSaveBlocked =
      n + allowedValue <= +targetValue || n - allowedValue >= +targetValue;

    expect(isSaveBlocked).toBe(false);
  });
});
