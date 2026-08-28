import React from "react";
import styles from "./project.module.css";
import { FaGithub } from "react-icons/fa";
import foodapp from "../assets/foodapp.png";
import chatbot from "../assets/chatbot.webp";
import OnlineHouse from "../assets/OnlineHouse.webp";


export default function Project() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.mainheading}>Projects</h1>

        {/* Food App - Cookify */}
        <div className={styles.projectContainer}>
          <img src={foodapp} alt="foodapp" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
            Food App - Cookify (January 2024 - May 2024)
            </h1>
            <p className={styles.projectDescription}>
            Cookify is a simple and interactive food recipe discovery web application that helps 
            users search for recipes and view complete cooking details in one place. Users can 
            explore recipes, see ingredients, cooking steps, preparation time, dietary type, and 
            cost per serving without refreshing the page. The application is built as a single-page 
            web app using React, where different features are organized into reusable components 
            for better structure and readability. React Hooks like useState and useEffect are used 
            to manage data, handle user interactions, and fetch recipe information from an external 
            food recipe API. HTML and CSS Modules are used to design a clean and responsive interface, 
            while small animations and GIFs are added to improve the user experience and branding
            </p>
            <a
              href="https://github.com/lsangaraju-jpg/Food_App_Cookify"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} /> View on GitHub
            </a>
          </div>
        </div>

        {/* Leasing House Management System */}
        <div className={styles.projectContainer}>
          <img
            src={OnlineHouse}
            alt="Leasing House Management System"
            className={styles.projectLogo}
          />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
            Leasing House Management System (August 2025 - December 2025)
            </h1>
            <p className={styles.projectDescription}>
            Leasing House Management System project is a Python desktop application built as a 
            capstone project to manage leasing house operations in one place. It allows users to 
            handle customers, employees, services, sales, and reports through an easy-to-use 
            graphical interface. The system uses CustomTkinter for the UI and MySQL to securely 
            store and manage all data. It includes an interactive map to view property and office 
            locations, along with charts and dashboards to track services and monthly activity. 
            Users can sort, search, and view records, and export data as CSV or PDF reports for 
            documentation. The application supports different user roles like admin, owner, employee, 
            and customer for controlled access. Features like date pickers reduce manual errors, and 
            reports update automatically based on database data. Overall, the project shows hands-on 
            experience with Python programming, GUI development, database integration, data 
            visualization, and report generation in a real-world management system.
            </p>
            <a
              href="https://github.com/lsangaraju-jpg/Leasing_House_Management_System_MS_2025"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} /> View on GitHub
            </a>
          </div>
        </div>

                {/* Chatbot */}
                <div className={styles.projectContainer}>
          <img src={chatbot} alt="chatbot" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
            Chatbot (August 2020 - December 2020)
            </h1>
            <p className={styles.projectDescription}>
              Developed an interactive chatbot in Google Colab, leveraging
              advanced Natural Language Processing (NLP) techniques to enhance
              response accuracy and user experience. Built using Python in a
              Jupyter Notebook, the chatbot integrates a custom knowledge base
              (chatbot.txt) to provide contextually relevant answers for data
              science-related queries. Implemented NLTK, spaCy, and Hugging
              Face’s Transformers for tokenization, named entity recognition,
              and semantic understanding, enabling more natural and intelligent
              conversations. This project showcases my expertise in Machine
              Learning, NLP, and AI-driven chatbot development, focusing on
              response optimization and user interaction.
            </p>
            <a
              href="https://github.com/lsangaraju-jpg/Chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
