import React from 'react'
import styles from '../Home/home.module.scss'


function body() {
  return (
    <>

      <div className={styles.containerbird}>


        <div className={`${styles.birdcontainer} ${styles.birdcontainerone}`}>
          <div className={`${styles.bird} ${styles.birdone}`}></div>
        </div>

        <div className={`${styles.birdcontainer} ${styles.birdcontainertwo}`}>
          <div className={`${styles.bird} ${styles.birdtwo}`}></div>
        </div>

        <div className={`${styles.birdcontainer} ${styles.birdcontainerthree}`}>
          <div className={`${styles.bird} ${styles.birdthree}`}></div>
        </div>

        <div className={`${styles.birdcontainer} ${styles.birdcontainerfour}`}>
          <div className={`${styles.bird} ${styles.birdfour}`}></div>
        </div>

      </div>

      <div id={styles.container} className="p-2 p-md-5">

        <div className="container m-auto">
          <h4 className='display-5' id={styles.letterGap}>HELLO !</h4>
          <h3 className='d-inline-block display-6' id={styles.letterGap}>I  AM &nbsp;</h3>
          <h3 className='d-inline-block display-4  m-auto text-start ' id={styles.nametag}>BHUVESH RAO </h3>
          <h1 className="display-1" id={styles.letterGapFE}>FRONTEND DEVELOPER</h1>

          <div className='d-flex justify-content-center justify-content-md-start align-items-center' id={styles.btnholder}>
            <a className='' id={styles.btnAnchor} href="/bhuveshra0_" target="_blank">
              <span className={styles.btnSpan}> </span>
              <span className={styles.btnSpan}> </span>
              <span className={styles.btnSpan}> </span>
              <span className={styles.btnSpan}> </span>
              About
            </a>
          </div>
        </div>
      </div >
    </>
  )
}

export default body