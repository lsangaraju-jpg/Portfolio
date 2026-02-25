import { useEffect, useRef, useState } from "react";
import styles from "./experiencehome.module.css";
import ProgressLogo from "../../assets/progress.png";
import cmulogo from "../../assets/cmu.png";
import TataLogo from "../../assets/tcs.png";

export default function Experiencehome() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.mainContainer} ${
        isVisible ? styles.show : styles.hidden
      }`}
    >
      <h1>Worked At</h1>

      <div className={styles.gridContainer}>


        {/* Central Michigan University */}
        <div className={styles.componentContainer}>
          <img src={cmulogo} alt="Central Michigan University" className={styles.image} />

          <h2>
            <a
              href="https://www.cmich.edu"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Central Michigan University
            </a>
          </h2>

          <h4>
            Worked as a Graduate Teaching Assistant for BIS 698 – Principles of
            Programming Languages.
          </h4>
        </div>

        {/* Tata Consultancy Services */}
        <div className={styles.componentContainer}>
          <img src={TataLogo} alt="Tata Consultancy Services" className={styles.image} />

          <h2>
            <a
              href="https://www.tcs.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Tata Consultancy Services
            </a>
          </h2>

          <h4>
            Software Engineer at TCS, designed and developed scalable APIs using
            Java Spring Boot, integrating Kafka for efficient microservices
            communication and optimizing database performance.
          </h4>
        </div>
        {/* Progress Software */}
        <div className={styles.componentContainer}>
          <img src={ProgressLogo} alt="Progress Software" className={styles.image} />

          <h2>
            <a
              href="https://www.progress.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Progress Software
            </a>
          </h2>

          <h4>
            An innovative Python-based AI application focused on
            automated route planning for PCB design.
          </h4>
        </div>
      </div>
    </div>
  );
}
