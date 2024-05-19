import { Message } from '../Message/Message.view'
import styles from './MessagesList.styles.module.scss'

export function MessagesList() {
  return (
    <div className={styles.container}>
      <strong>Mensagens enviadas</strong>

      <div className={styles.messagesContainer}>
        <Message />
        <Message />
        <Message />
      </div>
    </div>
  )
}