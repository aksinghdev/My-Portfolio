import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import HomeContact from "./HomeContact";
import Footer from "./Footer";

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