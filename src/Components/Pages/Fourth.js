import { useEffect } from 'react'
import styles from '../../App.module.css'
import classes from './First.module.css'

const Fourth = () => {
  const videoURL = "https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/And%20get%20better%20brand%20deals.webm"

  useEffect(() => {
    const video = document.getElementById("video")
    video.load()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={`${classes.firstPage} ${classes.center} ${styles.container}`}>
          <div className={classes.text}>
            <h1>Get Better</h1>
            <h1>Brand Deals</h1>
          </div>
          <video id="video" autoPlay loop muted src={videoURL} className={classes.video}></video>
        </div>
      </div>
    </section>
  )
}

export default Fourth
