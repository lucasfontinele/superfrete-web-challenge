import styles from './App.styles.module.scss'
import LogoImg from '../../assets/images/Logo'
import { Button } from '../../components/Button/Button.view'
import { Input } from '../../components/Input/Input.view'
import { MessagesList } from './components/MessagesList/MessagesList.view'

function App() {
  return (
    <div className={styles.wrapper}>
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

          <Button disabled>Enviar</Button>
        </form>
      </div>

      <MessagesList />
    </div>
  )
}

export default App
