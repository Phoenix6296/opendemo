import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <div className={`${styles.navbar} ${styles.center}`}>
      <img src="https://openinapp.com/logo.svg" alt="" />
      <div className={`${styles.nav_right} ${styles.center}`}>
        <div className={`${styles.center}`}>
          <img src="https://openinapp.com/plus-create.svg" alt="" />
          <p>Create Smartlink</p>
        </div>
        <div>Login</div>
      </div>
    </div>
  )
}

export default Navbar