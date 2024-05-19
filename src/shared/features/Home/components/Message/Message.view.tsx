import styles from './Message.styles.module.scss'

export function Message() {
  return (
    <div className={styles.container}>
      <p>Oi 😁 esta é a sua mensagem enviada anteriormente.</p>
      <span>23/02/2024 - 12h30 </span>
    </div>
  )
}