import React, { useState, useEffect } from "react";
import styles from "./portfolio.module.css";
import profile from "../assets/profile.jpg";
import Experiencehome from "./PortfolioComponent/Experiencehome";
import Educationhome from "./PortfolioComponent/Educationhome";

export default function Portfolio() {
  const words = ["Software Engineer", "Developer", "Problem Solver"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingTimeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev + currentWord.charAt(prev.length));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (text.length > 0) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex]);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={styles.landingpage}>
      <img src={profile} alt="Profile" className={styles.iconFull} />
      <h1 className={styles.heading}>Hi, I'm Lokesh.</h1>
      <h2 className={styles.subheading}>
        {text}
        <span className={styles.cursor}>|</span>
      </h2>

      <h4 className={styles.body}>
        Software Engineer focused on building reliable, user-friendly web applications.
        I enjoy turning messy requirements into clean products - shipping fast, measuring 
        impact, and iterating. Comfortable across frontend, backend, and cloud deployments.
      </h4>

      <Experiencehome />
      <Educationhome />

      {/* Scroll-to-Top Button */}
      {showButton && (
        <button onClick={scrollToTop} className={styles.scrollTop}>
          ↑
        </button>
      )}
    </div>
  );
}
