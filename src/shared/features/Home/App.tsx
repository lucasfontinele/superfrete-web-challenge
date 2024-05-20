import { FormEvent, useCallback, useState } from 'react'
import styles from './App.styles.module.scss'
import LogoImg from '../../assets/images/Logo'
import { Button } from '../../components/Button/Button.view'
import { Input } from '../../components/Input/Input.view'
import { MessagesList } from './components/MessagesList/MessagesList.view'
import { createMessage } from '../../services/collections/messages/messages'

function App() {
  const [message, setMessage] = useState('')
  const [fetchingMessage, setFetchingMessage] = useState(false)
  const isDisabledSubmit = !message || fetchingMessage

  const handleClearMessage = useCallback(() => {
    setMessage('')
  }, [setMessage])

  const handleSubmit = useCallback(async (e: FormEvent) => {
    setFetchingMessage(true)
    e.preventDefault()
    handleClearMessage()

    await createMessage({
      content: message,
      createdAt: new Date(),
    })

    setFetchingMessage(false)
  }, [message, setFetchingMessage])

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <LogoImg />
        </div>

        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <Input
            label="Digite um texto abaixo"
            name="message"
            placeholder="Insira sua mensagem*"
            onChange={e => setMessage(e.target.value)}
            value={message}
          />

          <Button disabled={isDisabledSubmit}>Enviar</Button>
        </form>
      </div>

      <MessagesList />
    </div>
  )
}

export default App
