import { useEffect } from 'react'
import styles from '../../App.module.css'
import classes from './First.module.css'

const Fifth = () => {
  const videoURL = "https://storage.googleapis.com/openinapp-prod-assets/BG%20videos%20Webm/Already%20Loved%20by.webm"

  useEffect(() => {
    const video = document.getElementById("video")
    video.load()
  }, [])

  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={`${classes.firstPage} ${classes.center} ${styles.container}`}>
          <video id="video" autoPlay loop muted src={videoURL} className={classes.video}></video>
          <div className={classes.text}>
            {window.innerWidth > 1023 ? <h1>Loved by</h1> : <h1>❤️</h1>}
            <h1>290K+
              <br />
              Creators
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Fifth
