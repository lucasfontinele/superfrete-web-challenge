import { formatDate } from './Message.domain'
import styles from './Message.styles.module.scss'
import { MessageProps } from './Message.types'

export function Message({ content, date }: MessageProps) {
  return (
    <div className={styles.container}>
      <p>{content}</p>
      <span>{formatDate(date)}</span>
    </div>
  )
}