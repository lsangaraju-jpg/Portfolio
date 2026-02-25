import React from "react";
import styles from "./about.module.css";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";

export default function About() {
  return (
    <div className={styles.mainContainer}>
      {/* About Me Section */}
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutHeading}>About Me</h1>

        <p className={styles.aboutDescription}>
          I am Lokesh Varma Sangaraju, a results-driven Software Engineer with 5+
          years of experience in designing, building, and scaling secure,
          high-performance web applications. I specialize in delivering end-to-end solutions from intuitive,
          responsive frontends to resilient, cloud-ready backend architectures.
        </p>

        <p className={styles.aboutDescription}>
          
        </p>

        <p className={styles.aboutDescription}>
          My technical expertise spans React.js, Node.js, Spring Boot, and modern
          cloud platforms including AWS, Azure, and GCP, enabling me to build
          systems that are both scalable and business-aligned.
        </p>

        <p className={styles.aboutDescription}>
          In my professional experience at Tata Consultancy Services, I played a
          key role in improving system reliability and performance through the
          development of secure, production-grade APIs and backend services. I contributed to the design and optimization of CI/CD pipelines,
          reducing deployment time and operational risk, while implementing
          advanced authentication and authorization mechanisms to ensure data
          security and compliance with industry standards.
        </p>

        <p className={styles.aboutDescription}>
          
        </p>

        <p className={styles.aboutDescription}>
        I earned my Master’s degree in Information Systems from Central Michigan University, 
        where I also served as a Teaching Assistant. In this role, I led courses in programming languages 
        and game development, facilitated workshops and lectures, and guided students through structured
        peer reviews and collaborative projects. I focused on creating an engaging learning environment 
        hat strengthened students’ problem-solving abilities and practical coding skills, empowering them 
        with the tools and confidence needed to succeed.
        </p>

        <p className={styles.aboutDescription}>
        My career goal is to continue developing innovative, user-centric applications while expanding my 
        expertise in cloud technologies and software architecture. I am open to new opportunities where I 
        can leverage my technical skills, passion for problem-solving, and collaborative spirit to make a 
        meaningful impact. If you're looking for a dedicated and solution-oriented developer, let’s connect!
        </p>
      </div>

      <div className={styles.contactContainer}>
  <div className={styles.contactBox}>
    <h3>Contact Me</h3>

    <p>
      Email:{" "}
      <a href="mailto:Lsangaraju@gmail.com">
      Lsangaraju@gmail.com
      </a>
    </p>

    <p>
      Phone:{" "}
      <a href="tel:+19895068941">
             +1 (989) 506-8941
      </a>
    </p>
  </div>


        <div className={styles.contactBox}>
          <a
            href="https://www.linkedin.com/in/lokesh-varma-sangaraju-603954161/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className={styles.iconFull}
            />
          </a>
        </div>

        <div className={styles.contactBox}>
          <a
            href="https://github.com/lsangaraju-jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={githubLogo}
              alt="GitHub"
              className={styles.iconFull}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
