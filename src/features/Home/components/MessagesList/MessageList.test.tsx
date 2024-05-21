import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { MessagesList } from './MessagesList.view';
import { getMessages } from '../../../../shared/services/collections/messages/messages';
import { onSnapshot } from 'firebase/firestore';

// Mock the external dependencies
vi.mock('../../../../shared/services/collections/messages/messages', () => ({
  getMessages: vi.fn(),
}));

vi.mock('firebase/firestore', () => {
  const originalModule = vi.importActual('firebase/firestore');
  return {
    ...originalModule,
    collection: vi.fn(),
    onSnapshot: vi.fn(),
    getFirestore: vi.fn(),
  };
});

const mockedMessages = [
  { id: '1', content: 'Hello World', createdAt: { seconds: 1629885732 } },
  { id: '2', content: 'Second Message', createdAt: { seconds: 1629885733 } },
];

const createMockDoc = (msg) => ({
  id: msg.id,
  data: () => msg,
});

describe('MessagesList Component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (getMessages as vi.Mock).mockResolvedValue(mockedMessages);
    (onSnapshot as vi.Mock).mockImplementation((_, callback) => {
      callback({
        docs: mockedMessages.map(createMockDoc),
      });
      return vi.fn();
    });
  });

  it('renders the initial empty state correctly', async () => {
    (getMessages as vi.Mock).mockResolvedValue([]);

    render(<MessagesList />);

    expect(screen.getByText('Mensagens enviadas')).toBeInTheDocument();
    expect(await screen.findByText('Envie uma mensagem')).toBeInTheDocument();
  });

  it('fetches and displays messages', async () => {
    render(<MessagesList />);

    await waitFor(() => {
      expect(screen.queryByText('Envie uma mensagem')).not.toBeInTheDocument();
    });

    mockedMessages.forEach((msg) => {
      expect(screen.getByText(msg.content)).toBeInTheDocument();
    });
  });

  it('updates the message list in real-time', async () => {
    render(<MessagesList />);

    await waitFor(() => {
      mockedMessages.forEach((msg) => {
        expect(screen.getByText(msg.content)).toBeInTheDocument();
      });
    });

    const newMessage = { id: '3', content: 'Real-time Message', createdAt: { seconds: 1629885734 } };
    (onSnapshot as vi.Mock).mock.calls[0][1]({
      docs: [...mockedMessages.map(createMockDoc), createMockDoc(newMessage)],
    });

    await waitFor(() => {
      expect(screen.getByText('Real-time Message')).toBeInTheDocument();
    });
  });
});
