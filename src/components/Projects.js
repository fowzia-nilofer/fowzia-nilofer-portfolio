import React from "react";

function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Chronic Kidney Disease Prediction | Machine Learning</h3>
          <p className="subheading">May 2025 – Jun 2025</p>
          <p>
            Tech stack: Python, scikit-learn, Flask, HTML/CSS/JS
          </p>
          <p>
            Built an end-to-end ML pipeline to predict CKD using clinical data. Performed data preprocessing, model training/tuning, and developed a Flask web app for user input and CKD risk prediction with confidence score.
          </p>
        </li>
        <li>
          <h3>BookMyTicket | Full-Stack Web Development</h3>
          <p className="subheading">Jan 2025 – Apr 2025</p>
          <p>
            Tech stack: React, Node.js, Express, MongoDB, GitHub Pages, Render
          </p>
          <p>
            Built and deployed a full-stack movie ticket booking website with real-time seat selection and RESTful APIs. Deployed the frontend on GitHub Pages and backend on Render with database integration via MongoDB Atlas.
          </p>
          <p>
            <a href="https://fowzia-nilofer.github.io/bookmyticket-frontend/" className="project-link" target="_blank" rel="noreferrer">
              Visit Project
            </a>
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
