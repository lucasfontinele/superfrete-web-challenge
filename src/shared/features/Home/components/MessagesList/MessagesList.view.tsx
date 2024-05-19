import styles from './MessagesList.styles.module.scss'

export function MessagesList() {
  return (
    <div className={styles.container}>
      <strong>Mensagens enviadas</strong>

      <div className={styles.messagesContainer}>

      </div>
    </div>
  )
}