import React from "react";
import styles from "./App.module.css";
import "@fontsource/poppins"; // Defaults to weight 400
import  About  from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import PortfolioVideo from "./components/Portfoliovideo/portfoliovideo";  // Correct import!

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <PortfolioVideo /> {/* Your video component */}
      <Contact />
    </div>
  );
}

export default App;
