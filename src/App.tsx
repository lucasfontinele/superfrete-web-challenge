import styles from './App.styles.module.scss'
import LogoImg from './shared/assets/images/Logo'
import { Input } from './shared/components/Input/Input.view'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <LogoImg />
      </div>

      <form className={styles.formContainer}>
        <Input
          label="Digite um texto abaixo"
          name="message"
          placeholder="Insira sua mensagem*"
        />
      </form>
    </div>
  )
}

export default App
