import React, { useEffect, useState, useRef } from 'react'
import styles from './navbar.module.scss'
import Home from './dockIcon/home.svg'
import About from './dockIcon/about.svg' 
import Contact from './dockIcon/contact.svg' 
import Projects from './dockIcon/project.svg' 
import Resume from './dockIcon/resume.svg' 
import Skills from './dockIcon/skills.svg' 


function Navbar() {





    return (
        <div className='d-flex justify-content-center mt-5'>
            <nav className={styles.navigation} id={styles.navigation}>

                <img style={{width:'50px' , height:'50px'}} onMouseMove={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "65px"; document.getElementById(`${e.currentTarget.id}`).style.height = "65px";
                }} onMouseLeave={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "40px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "40px";
                }} id='btndock' type="" src={Home}>
                </ img>

                <img style={{width:'50px' , height:'50px'}} onMouseMove={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "65px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "65px";
                }} onMouseLeave={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "40px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "40px";
                }} id='btndock1' type="button" src={About}>
                </ img>


                <img style={{width:'50px' , height:'50px'}} onMouseMove={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "65px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "65px";
                }} onMouseLeave={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "50px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "50px";
                }} id='btndock2' type="button" src={Resume}>
                </ img>


                <img style={{width:'50px' , height:'50px'}} onMouseMove={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "65px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "65px";
                }} onMouseLeave={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "40px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "40px";
                }} id='btndock3' type="button" src={Skills}>
                </ img>

                <img style={{width:'50px' , height:'50px'}} onMouseMove={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "65px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "65px";
                }} onMouseLeave={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "40px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "40px";
                }} id='btndock4' type="button" src={Projects}>
                </ img>
                <img style={{width:'50px' , height:'50px'}} onMouseMove={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "65px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "65px";
                }} onMouseLeave={(e) => {
                    document.getElementById(`${e.currentTarget.id}`).style.width = "40px";
                    document.getElementById(`${e.currentTarget.id}`).style.height = "40px";
                }} id='btndock5' type="button" src={Contact}>
                </ img>
            </nav>

        </div>
    )
}

export default Navbar





