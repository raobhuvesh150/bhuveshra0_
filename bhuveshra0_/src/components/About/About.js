import React from 'react'
import styles from './about.module.scss'
import DP from './DpEdit.png'

function About(props) {
    return (
        <div className='d-flex align-items-center' id={styles.container}>
            <div id={styles.designContainer} className=' position-relative m-auto bg-homeTheme d-block h-75 '>
                <div className='d-none d-sm-inline-block' id={styles.borderLeft}></div>
                <div className='d-none d-sm-inline-block' id={styles.borderRight}></div>
                <div className='d-none d-sm-inline-block' id={styles.borderTop}></div>
                <div className='d-none d-sm-inline-block' id={styles.borderBottom}></div>

                {/* My image  */}
                {/* <div className=" d-inline-block w-25 h-100 start-0 bg-aboutTheme2">
                    <img src={DP} style={{width:'100%' , margin:'5px'}} />
                </div> */}

                <div className='m-3'>
                    <h1 className='shadow-lg display-1' style={{ color: 'rgb(217, 122, 174)' }}>ABOUT ME </h1>

                    <div className='shadow-lg pb-5'>
                        <p className='shadow-lg fs-3 m-3 p-3'>Undergraduate student working as a FrontEnd developer in Gurugaon having good knowledge of React and Next and open to collaborate for projects. </p>
                        <p className='justify-content-start container d-flex w-100 fs-6  mt-5'>Name &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - &nbsp; &nbsp; &nbsp; Bhuvesh</p>
                        <p className='justify-content-start container d-flex w-100 fs-6  mt-2 '>Email &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; - &nbsp; &nbsp; &nbsp; raobhuvesh150@gmail.com</p>
                        <p className='justify-content-start container d-flex w-100 fs-6 mt-2'> Address   &nbsp; &nbsp; - &nbsp; &nbsp; &nbsp; Gurugaon</p>
                        <p className='justify-content-start container d-flex w-100 fs-6 mt-2'>Phone &nbsp; &nbsp; &nbsp; &nbsp; - &nbsp; &nbsp; &nbsp; 9588741195</p>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About