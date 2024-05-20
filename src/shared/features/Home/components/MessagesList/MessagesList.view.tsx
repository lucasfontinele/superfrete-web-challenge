import { useEffect, useState } from 'react';
import { Message } from '../Message/Message.view'
import styles from './MessagesList.styles.module.scss'
import { MessageResponse } from '../../../../services/collections/messages/messages.types';
import { getMessages } from '../../../../services/collections/messages/messages';

export function MessagesList() {
  const [messages, setMessages] = useState<MessageResponse>([])
  const isEmptyList = messages.length === 0

  useEffect(() => {
    const fetchData = async () => {
      const response = await getMessages()
      setMessages(response)
    };

    fetchData();
  }, []);


  return (
    <div className={styles.container}>
      <strong>Mensagens enviadas</strong>

      <div className={styles.messagesContainer}>
        {isEmptyList && <span>Envie uma mensagem</span>}
        {messages.map(message => (
          <Message
            content={message.content}
            date={message.createdAt}
          />
        ))}
      </div>
    </div>
  )
}