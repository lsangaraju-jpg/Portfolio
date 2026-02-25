import React from "react";
import styles from "./certificates.module.css";
import googleLogo from "../assets/google.png";
import celonisLogo from "../assets/celonis.png";
import awsLogo from "../assets/aws.jpg";
import azureLogo from "../assets/azure.png";

export default function Certificates() {
  const certifications = [
    
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      issuer: "Microsoft",
      date: "Issued May 2022",
      url: "https://www.credly.com/badges/689da084-e058-4d70-9055-1b59a2c0a03b",
      logo: azureLogo,
      alt: "Microsoft Azure Data Fundamentals",
    },
    
    {
      title: "Prompt Design in Vertex - AI",
      issuer: "Google Cloud",
      date: "View badge on Credly",
      url: "https://www.credly.com/badges/fc826a20-f4c8-416e-9667-3334f71b33db",
      logo: googleLogo,
      alt: "Vertex AI Prompt Design",
    },
    
        {
      title: "Google Cloud Data Analytics Certificate",
      issuer: "Google Cloud",
      date: "View badge on Credly",
      url: "https://www.credly.com/badges/fb78cbad-989c-45c6-93a8-e084c15af91a",
      logo: googleLogo,
      alt: "Google Cloud Certification",
    },
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "Issued Jul 2024 – Expires Jul 2027",
      url: "https://www.credly.com/badges/08e2ebe-a74f-8b2759c5e8ac",
      logo: awsLogo,
      alt: "AWS Certified Developer Associate",
    },

    {
      title: "Get Data into Celonis",
      issuer: "Celonis",
      date: "View badge on Credly",
      url: "https://www.credly.com/badges/2ff12a42-6ed8-45cd-8e68-0aa727788ab2",
      logo: celonisLogo,
      alt: "Celonis Certification",
    },
    {
      title: "Process Mining Rising Star – Business",
      issuer: "Celonis",
      date: "View badge on Credly",
      url: "https://www.credly.com/badges/dfa8eea7-3405-4692-9b6f-ea79e08f8719",
      logo: celonisLogo,
      alt: "Celonis Process Mining Business",
    },
    {
      title: "Process Mining Rising Star – Technical",
      issuer: "Celonis",
      date: "View badge on Credly",
      url: "https://www.credly.com/badges/e34a0e0b-4b02-44b2-b3ce-bdcd2a95f58d",
      logo: celonisLogo,
      alt: "Celonis Process Mining Technical",
    },
    {
      title: "Academic Process Mining Fundamentals",
      issuer: "Celonis",
      date: "View badge on Credly",
      url: "https://www.credly.com/badges/2ce9ebaf-2916-495c-83d5-6370f3d7fa1b",
      logo: celonisLogo,
      alt: "Academic Process Mining",
    },
  ];

  return (
    <div className={styles.certificatesContainer}>
      <h1 className={styles.certificatesHeading}>Certifications</h1>

      <div className={styles.certificatesGrid}>
        {certifications.map((cert) => (
          <div className={styles.certificateCard} key={cert.url}>
            <div className={styles.certificateHeader}>
              License & Certification
            </div>

            <div className={styles.certificateContent}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.logo}
                  alt={cert.alt}
                  className={styles.certLogo}
                />
              </a>

              <div>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certTitleLink}
                >
                  <h2 className={styles.certificateTitle}>{cert.title}</h2>
                </a>

                <p className={styles.certificateIssuer}>{cert.issuer}</p>
                <p className={styles.certificateDate}>{cert.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
