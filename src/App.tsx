import styles from './App.styles.module.scss'
import LogoImg from './shared/assets/images/Logo'

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <LogoImg />
      </div>

      <p>Poppins teste</p>
    </div>
  )
}

export default App
