import { useEffect } from 'react'
import styles from '../../App.module.css'
import classes from './First.module.css'

const Sixth = () => {
  const videoURL = "https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/Ready%20to%20get%20onboard.webm"

  useEffect(() => {
    const video = document.getElementById("video")
    video.load()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={`${classes.firstPage} ${classes.center} ${styles.container}`}>
          <div className={classes.text}>
            <h1>Ready to get</h1>
            <h1>Started?</h1>
            <button className={classes.text_button}>Lets Go!</button>
          </div>
          <video id="video" autoPlay loop muted src={videoURL} className={classes.video}></video>
        </div>
      </div>
    </section>
  )
}

export default Sixth
