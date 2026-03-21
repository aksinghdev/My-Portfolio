import React from "react";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "./About";
import Projects from "./Projects";
import HomeContact from "../components/HomeContact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* <Navbar /> */}
      <Hero />
      <About/>
      <Projects/>
      <HomeContact/>
      <Footer/>

    </div>
    
  );
}