import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => { setWindowWidth(window.innerWidth); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`${styles.navbar} ${styles.center}`}>
      <img src="https://openinapp.com/logo.svg" alt="" />
      <div className={`${styles.nav_right} ${styles.center}`}>
        {windowWidth > 1023 ?
          <div className={`${styles.center}`}>
            <img src="https://openinapp.com/plus-create.svg" alt="" />
            <p>Create Smartlink</p>
          </div> :
          <img src="https://openinapp.com/plus-create.svg" alt="" className={styles.plus} />
        }
        <div>Login</div>
      </div>
    </div>
  );
};

export default Navbar;
