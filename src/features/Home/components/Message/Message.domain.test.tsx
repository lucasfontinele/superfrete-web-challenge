import { describe, it, expect } from 'vitest';
import { formatDate } from './Message.domain';

describe('formatDate', () => {
  it('formats a Date object correctly', () => {
    const date = new Date('2024-02-23T12:30:00');
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('23/02/2024 - 12h30');
  });

  it('formats a timestamp (number) correctly', () => {
    const timestamp = 1708727400000;
    const formattedDate = formatDate(timestamp);
    expect(formattedDate).toBe('23/02/2024 - 19h30');
  });

  it('pads single digit day, month, hour, and minute correctly', () => {
    const date = new Date('2024-02-03T04:05:00');
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe('03/02/2024 - 04h05');
  });
});
