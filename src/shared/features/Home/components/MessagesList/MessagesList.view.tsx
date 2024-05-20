import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Message } from '../Message/Message.view'
import styles from './MessagesList.styles.module.scss'
import { db } from '../../../../services/Firebase';
import { MessageResponse } from '../../../../services/collections/messages/messages.types';

export function MessagesList() {
  const [messages, setMessages] = useState<MessageResponse>([])
  const isEmptyList = messages.length === 0

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'messages'));
      const response = querySnapshot.docs.map(doc => doc.data()) as MessageResponse

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