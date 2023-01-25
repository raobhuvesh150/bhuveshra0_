import React, { useEffect, useState, useRef } from "react";
import styles from "./navbar.module.scss";
import Home from "./dockIcon/home.svg";
import About from "./dockIcon/about.svg";
import Contact from "./dockIcon/contact.svg";
import Projects from "./dockIcon/project.svg";
import Resume from "./dockIcon/resume.svg";
import Skills from "./dockIcon/skills.svg";

function Navbar(props) {
  return (
    <div className="d-flex justify-content-center">
      <nav className={styles.navigation} id={styles.navigation}>
        <img
          onClick={() => props.HandelClick(0)}
          style={{ width: "50px", height: "50px" }}
          onMouseMove={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "65px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "65px";
          }}
          onMouseLeave={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "50px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "50px";
          }}
          id="btndock"
          type=""
          src={Home}
        ></img>

        <img
          onClick={() => props.HandelClick(800)}
          style={{ width: "50px", height: "50px" }}
          onMouseMove={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "65px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "65px";
          }}
          onMouseLeave={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "50px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "50px";
          }}
          id="btndock1"
          type="button"
          src={About}
        ></img>

        <img
          onClick={() => props.HandelClick(1200)}
          style={{ width: "50px", height: "50px" }}
          onMouseMove={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "65px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "65px";
          }}
          onMouseLeave={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "50px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "50px";
          }}
          id="btndock2"
          type="button"
          src={Resume}
        ></img>

        <img
          onClick={() => props.HandelClick(1500)}
          style={{ width: "50px", height: "50px" }}
          onMouseMove={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "65px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "65px";
          }}
          onMouseLeave={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "50px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "50px";
          }}
          id="btndock3"
          type="button"
          src={Skills}
        ></img>

        <img
          onClick={() => props.HandelClick(2000)}
          style={{ width: "50px", height: "50px" }}
          onMouseMove={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "65px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "65px";
          }}
          onMouseLeave={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "50px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "50px";
          }}
          id="btndock4"
          type="button"
          src={Projects}
        ></img>
        <img
          onClick={() => props.HandelClick(2500)}
          style={{ width: "50px", height: "50px" }}
          onMouseMove={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "65px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "65px";
          }}
          onMouseLeave={(e) => {
            document.getElementById(`${e.currentTarget.id}`).style.width =
              "50px";
            document.getElementById(`${e.currentTarget.id}`).style.height =
              "50px";
          }}
          id="btndock5"
          type="button"
          src={Contact}
        ></img>
      </nav>
    </div>
  );
}

export default Navbar;
