import { COMPONENTS } from '../../constants/TestIds.constants'
import styles from './Button.styles.module.scss'
import { ButtonProps } from './Button.types'

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button data-testid={COMPONENTS.BUTTON_CONTAINER} className={styles.container} {...props}>
      {children}
    </button>
  )
}
