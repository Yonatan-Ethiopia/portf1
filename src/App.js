import React from "react";
import './styles.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkSection from "./components/WorkSection";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      {/* Top navigation bar */}
      <Navbar />

      {/* Intro / Hero section */}
      <Hero />

      {/* Work section - thumbnails, posters, videos */}
      <WorkSection />

      {/* Contact info */}
      <Contact />
    </div>
  );
}

export default App;

