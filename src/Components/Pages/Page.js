import styles from '../../App.module.css'
import classes from './Page.module.css'

const First = (props) => {
  return (
    <section className={styles.section}>
      <div className={styles.sticky}>
        <div className={`${classes.firstPage} ${classes.center} ${styles.container}`}>
          {props.videoURL1 && <video id="video" autoPlay loop muted src={props.videoURL1} className={classes.video}></video>}
          <div className={classes.text}>
            <h1>{props.title1}</h1>
            <h1>{props.title2}</h1>
            {props.isButton && <button className={classes.text_button}>Lets Go!</button>}
          </div>
          {props.videoURL2 && <video id="video" autoPlay loop muted src={props.videoURL2} className={classes.video}></video>}
        </div>
      </div>
    </section>
  )
}

export default First
