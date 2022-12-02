import React from 'react'
import styles from './about.module.scss'


function About() {
    return (
        <div className='d-flex align-items-center' id={styles.container}>
            <div id={styles.designContainer} className=' position-relative m-auto bg-aboutTheme2 d-block h-75 '>
                <div className='d-none d-sm-inline-block' id={styles.borderLeft}></div>
                <div className='d-none d-sm-inline-block' id={styles.borderRight}></div>
                <div className='d-none d-sm-inline-block' id={styles.borderTop}></div>
                <div className='d-none d-sm-inline-block' id={styles.borderBottom}></div>
                <div className="container d-inline-block w-25 h-100 start-0 bg-light"  ></div>
            </div>

        </div>
    )
}

export default About