// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import Header from "./components/Header";
// import About from "./components/About";
// import Education from "./components/Education";
// import Experience from "./components/Experience";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Certifications from "./components/Certifications";
// import Achievements from "./components/Achievements";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <About />
//       <Education />
//       <Experience />
//       <Projects />
//       <Skills />
//       <Certifications />
//       <Achievements />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';

const lightTheme = {
  body: '#f9fafb',
  text: '#111827',
  card: '#ffffff',
  accent: '#2563eb',
};

const darkTheme = {
  body: '#111827',
  text: '#f9fafb',
  card: '#1f2937',
  accent: '#60a5fa',
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  a {
    color: ${(props) => props.theme.accent};
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p, li {
    color: ${(props) => props.theme.text};
  }

  ul {
    padding-left: 1.5rem;
  }
`;


const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 2rem;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const Role = styled.p`
  font-size: 1.1rem;
  margin-top: 0.5rem;
`;

const IconRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const Section = styled(motion.section)`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  border-bottom: 2px solid ${(props) => props.theme.accent};
  padding-bottom: 0.4rem;
  margin-bottom: 1.2rem;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.card};
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 5px 10px rgba(0,0,0,0.05);
  margin-bottom: 1rem;
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.9rem;
  color: gray;
  margin-top: 3rem;
  border-top: 1px solid #ccc;
  padding-top: 1.5rem;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ToggleButton onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <FaSun /> : <FaMoon />}
      </ToggleButton>

      <Container>
        <Header>
          <Name>Fowzia Nilofer</Name>
          <Role></Role>
          <IconRow>
            <a href="mailto:fowzia.nilofer@gmail.com"><FaEnvelope /></a>
            <a href="https://linkedin.com/in/fowzia-nilofer-abusali" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/fowzia-nilofer" target="_blank" rel="noreferrer"><FaGithub /></a>
          </IconRow>
        </Header>

        {/* <Section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle>Objective</SectionTitle>
          <p>To utilize my software development skills and creativity to build scalable and meaningful web-based solutions.</p>
        </Section> */}

        <Section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle>Education</SectionTitle>
          <Card>
            <strong>VIT Chennai (2023 – 2027)</strong><br />
            B.Tech in Computer Science and Engineering — CGPA: 9.00
          </Card>
          <Card>
            <strong>Sishya OMR School (2022 – 2023)</strong><br />
            Grade 12 (ISC) — 94.75%
          </Card>
          <Card>
            <strong>Sishya OMR School (2020 – 2021)</strong><br />
            Grade 10 (ICSE) — 94.80%
          </Card>
        </Section>

        <Section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle>Experience</SectionTitle>
          <Card>
            <strong>Associate Director of Content – Rotaract Club, VIT Chennai (2024–2025)</strong><br />
            Led social media content for “Weekly Buzz” and improved engagement.
          </Card>
          <Card>
            <strong>Program Representative – VIT Chennai (2023–2024)</strong><br />
            Coordinated student-faculty communication, resolving grievances and improving feedback cycles.
          </Card>
        </Section>

        <Section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle>Projects</SectionTitle>
          <Card>
            <h3>Chronic Kidney Disease Prediction (ML)</h3>
            <p>Built a complete ML pipeline and Flask web app to predict CKD risk using medical data.</p>
          </Card>
          <Card>
            <h3>BookMyTicket (Full-Stack Web)</h3>
            <p>A React + Node.js + MongoDB app with seat selection, deployed via GitHub Pages & Render. <a href="https://fowzia-nilofer.github.io/bookmyticket-frontend/" target="_blank" rel="noreferrer">View Project</a></p>
          </Card>
        </Section>

        <Section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle>Skills</SectionTitle>
          <Card>
            <p><strong>Languages:</strong> Python, Java, C, C++, JavaScript, HTML, CSS, R</p>
            <p><strong>Tools:</strong> React, Node, Express, MongoDB, SQL, Tableau, Flask, ML</p>
          </Card>
        </Section>

        {/* <Section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle>Certifications</SectionTitle>
          <Card>
            <ul>
              <li>Google Data Analytics</li>
              <li>SmartBridge ML (Google)</li>
              <li>IBM SkillsBuild AI & Cloud</li>
              <li>Google Cloud Skill Badges</li>
            </ul>
          </Card>
        </Section> */}

        <Section initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <SectionTitle>Achievements</SectionTitle>
          <Card>
            <ul>
              <li>Rank 1 Certificate - VIT Chennai (2023–2024)</li>
              <li>Student Council – Sishya OMR School</li>
            </ul>
          </Card>
        </Section>

        

        <Footer>
          © 2025 Fowzia Nilofer — Portfolio powered by React, Styled Components, Framer Motion
        </Footer>
      </Container>
    </ThemeProvider>
  );
}

export default App;
