import React from "react";
import styles from "./education.module.css";
import cmulogo from "../assets/cmulogo.png";
import Jntualogo from "../assets/jntua.png";

export default function Education() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.mainheading}>Education</h1>
        {/* Education Section */}
        <div className={styles.educationContainer}>
          <img src={cmulogo} alt="CMU" className={styles.educationLogo} />
          <div className={styles.educationContent}>
            <h1 className={styles.educationHeading}>
              Central Michigan University (January 2024 - December 2025)
            </h1>
            <p className={styles.educationDescription}>
              Earned my Master’s in Information Systems with a CGPA of
              3.70 from CMU. Developed expertise in SAP, Business Data Analytics, full-stack development,
              cloud computing, and scalable software solutions. Worked as a
              Graduate Teaching Assistant, teaching Intro to Programming
              Languages and Game Programming, where I mentored students and
              enhanced my instructional skills. Additionally, contributed to
              innovative projects like Auto BIM Route AI, focusing on automated
              route planning and optimization.
            </p>
          </div>
        </div>

        <div className={styles.educationContainer}>
          <img src={Jntualogo} alt="JNTUA" className={styles.educationLogo} />
          <div className={styles.educationContent}>
            <h1 className={styles.educationHeading}>
              Sri Venkateswara College of Engineering (June 2016 - April
              2020)
            </h1>
            <h5 className={styles.educationSubheading}>
              Affiliated to Jawaharlal Nehru Technological University, Anantapur
            </h5>
            <p className={styles.educationDescription}>
              Completed my Bachelor's in Electronics & Communication Engineering with a CGPA of
              8.11, gaining a strong foundation in Embedded systems, software development, data
              structures, and algorithms. Engaged in various projects,
              coursework, and collaborative learning environments that honed my
              problem-solving and programming skills. This degree laid the
              groundwork for my passion for software engineering and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
