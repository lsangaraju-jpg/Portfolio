import React from "react";
import styles from "./experience.module.css";
import progressLogo from "../assets/progress.png";
import cmulogo from "../assets/cmu.png";
import TataLogo from "../assets/tcs.png";

export default function Experience() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.mainheading}>Experience</h1>

        <div className={styles.experienceContainer}>
          <img src={cmulogo} alt="Central Michigan University" className={styles.experienceLogo} />
          <div className={styles.experienceContent}>
            <h1 className={styles.experienceHeading}>
              Central Michigan University (January 2025 - December 2025)
            </h1>
            <h4 className={styles.subheading}>Graduate Teaching Assistant</h4>
            <p className={styles.experienceDescription}>
            Served as a Graduate Teaching Assistant, supporting and leading coursework in
  programming languages and software development. Designed and evaluated
  assignments and projects, delivered lectures and technical workshops, and
  mentored students through peer reviews and hands-on problem-solving sessions.
  Focused on strengthening core programming concepts, code quality, and
  collaborative development practices.
            </p>
          </div>
        </div>

        <div className={styles.experienceContainer}>
          <img src={TataLogo} alt="Tata Consultancy Services" className={styles.experienceLogo} />
          <div className={styles.experienceContent}>
            <h1 className={styles.experienceHeading}>
              Tata Consultancy Services (January 2020 - December 2023)
            </h1>
            <h4 className={styles.subheading}>Software Engineer</h4>
            <p className={styles.experienceDescription}>
            <p className={styles.experienceDescription}>
  Worked as a Software Engineer designing and developing scalable, secure backend
  services using Java and Spring Boot. Built and optimized RESTful APIs, integrated
  Kafka for microservices communication, and improved data performance using
  PostgreSQL, SQL Server, and Elasticsearch. Implemented CI/CD pipelines with
  Jenkins, GitLab, and AWS CodePipeline, and developed authentication and
  authorization mechanisms using RBAC and AWS Cognito to enhance system security
  and reliability.
</p>

            </p>
          </div>
        </div>
        <div className={styles.experienceContainer}>
          <img src={progressLogo} alt="Progress" className={styles.experienceLogo} />
          <div className={styles.experienceContent}>
            <h1 className={styles.experienceHeading}>
              Progress Software (August 2018 - July 2019)
            </h1>
            <h4 className={styles.subheading}>Internship</h4>
            <p className={styles.experienceDescription}>
            Worked as a Intern contributing to the design and development of
  Python-based applications with a focus on automation and intelligent routing
  solutions. Built features to visualize and optimize routing logic, improved
  algorithm efficiency, and collaborated closely with cross-functional teams to
  deliver reliable, performance-driven solutions. Gained strong experience in
  writing clean, maintainable code and translating business requirements into
  technical implementations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
