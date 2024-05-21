import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { Message } from './Message.view';
import { formatDate } from './Message.domain';

vi.mock('./Message.domain', () => ({
  formatDate: vi.fn((timestamp) => `Formatted Date: ${timestamp}`),
}));

const mockedContent = 'Test message';
const mockedTimestamp = 1629885732;

describe('Message Component', () => {
  it('renders the content and formatted date correctly', () => {
    render(<Message content={mockedContent} date={mockedTimestamp} />);

    expect(screen.getByText(mockedContent)).toBeInTheDocument();

    const expectedFormattedDate = formatDate(mockedTimestamp * 1000);
    expect(screen.getByText(expectedFormattedDate)).toBeInTheDocument();
  });
});
