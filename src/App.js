import styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import FirstPage from './Components/Pages/First'
import SecondPage from './Components/Pages/Second'
import ThirdPage from './Components/Pages/Third'
import FourthPage from './Components/Pages/Fourth'
import FifthPage from './Components/Pages/Fifth'
import SixthPage from './Components/Pages/Sixth'

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <div className={`${styles.pages_container} ${styles.center}`}>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
      </div>
    </div>
  )
}

export default App