import styles from './Button.styles.module.scss'
import { ButtonProps } from './Button.types'

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.container} {...props}>
      {children}
    </button>
  )
}
