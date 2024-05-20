import { useEffect, useState } from 'react';
import { Message } from '../Message/Message.view'
import styles from './MessagesList.styles.module.scss'
import { MessageResponse } from '../../../../services/collections/messages/messages.types';
import { getMessages } from '../../../../services/collections/messages/messages';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../services/Firebase';

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

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as MessageResponse;
      setMessages(messages);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);


  return (
    <div className={styles.container}>
      <strong>Mensagens enviadas</strong>

      <div className={styles.messagesContainer}>
        {isEmptyList && <span>Envie uma mensagem</span>}
        {messages.map(message => (
          <Message
            key={message.id}
            content={message.content}
            date={message.createdAt.seconds}
          />
        ))}
      </div>
    </div>
  )
}