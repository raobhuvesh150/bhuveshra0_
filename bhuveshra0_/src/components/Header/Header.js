import React from 'react'
import styles from './header.module.scss'

function Header() {
    return (
        <>
            {/* <div className="container">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="row">
                    <div className="col">
                        <h1 className='m-3' id={styles.button}>Bhuvi_ra0</h1>
                    </div>

                    <div className="col d-none d-lg-flex" id='navbarTogglerDemo01'>
                        <h4 className='m-4' >Home</h4>
                        <h4 className='m-4' >About</h4>
                        <h4 className='m-4' >Resume</h4>
                        <h4 className='m-4' >Skills</h4>
                        <h4 className='m-4' >Project</h4>
                        <h4 className='m-4' >Contact</h4>
                    </div>
                </div>
            </div> */}



                <nav className="p-3 navbar navbar-expand-lg navbar-light bg-light">
                    <h1 href="/" id={styles.button}>Bhuvi_rao</h1>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <h5 id={styles.buttons} href="#">Home</h5>
                            </li>
                            <li className="nav-item active">
                                <h5 id={styles.buttons} href="#">About</h5>
                            </li>
                            <li className="nav-item active">
                                <h5 id={styles.buttons} href="#">Resume</h5>
                            </li>
                            <li className="nav-item active">
                                <h5 id={styles.buttons} href="#">Skills</h5>
                            </li>
                            <li className="nav-item active">
                                <h5 id={styles.buttons} href="#">Projects</h5>
                            </li>
                            <li className="nav-item active">
                                <h5 id={styles.buttons} href="#">Contact</h5>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}

export default Header