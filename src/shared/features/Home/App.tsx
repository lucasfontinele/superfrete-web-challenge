import styles from './App.styles.module.scss'
import LogoImg from '../../assets/images/Logo'
import { Button } from '../../components/Button/Button.view'
import { Input } from '../../components/Input/Input.view'

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

        <Button>Enviar</Button>
      </form>
    </div>
  )
}

export default App
