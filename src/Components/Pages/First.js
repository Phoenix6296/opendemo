import styles from '../../App.module.css'
// import { useEffect } from 'react'
const First = () => {
  // useEffect(() => {
  //   const appDiv = document.querySelectorAll(`.${styles.sticky}`);
  //   console.log(appDiv);
  // }, []);
  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.container}>
          <p>First</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni necessitatibus officiis commodi ab at adipisci voluptate ad iure assumenda dolores aut vel ipsam labore, itaque, enim eaque deleniti vero distinctio cumque dolorum sapiente, totam voluptatem quod? Sint quasi repudiandae rem?</p>
        </div>
      </div>
    </section>
  )
}

export default First