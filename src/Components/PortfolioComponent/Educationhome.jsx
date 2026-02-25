import styles from "./educationhome.module.css";
import JNTUA from "../../assets/jntua.png";
import cmulogo from "../../assets/cmulogo.png";

export default function Educationhome() {
  return (
    <div className={styles.mainContainer}>
      <h1>Studied At</h1>

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
            Earned my Master’s in Information Systems with a CGPA of
            3.70 from CMU.
          </h4>
        </div>

        {/* JNTUA */}
        <div className={styles.componentContainer}>
          <img src={JNTUA} alt="JNTUA" className={styles.image} />

          <h2>
            <a
              href="https://www.jntua.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Sri Venkateswara College of Engineering
            </a>
          </h2>

          <h3>
            Affiliated to Jawaharlal Nehru Technological University, Anantapur
          </h3>

          <h4>
            Completed my Bachelor's in Electronics and Communication Engineering
            with a CGPA of 8.10
          </h4>
        </div>
      </div>
    </div>
  );
}
