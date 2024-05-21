import { COMPONENTS } from '../../constants/TestIds.constants'
import styles from './Input.styles.module.scss'
import { InputProps } from './Input.types'

export function Input({ label, name, ...props }: InputProps) {
  return (
    <div data-testid={COMPONENTS.INPUT_CONTAINER} className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input className={styles.inputContainer} name={name} {...props} />
    </div>
  )
}
