
import "./App.css";

// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Skills from "../pages/Skills";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Education from "../pages/Education";
import Projects from "../pages/Projects";
import Login from "../components/Auth/Login"
import Signup from "../components/Auth/Signup"
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../components/Auth/Dashboard";


function App() {
  return (
    <div className="w-screen min-h-screen bg-[#081b29] font-inter text-richblack-5">
     
      {/* <Router> */}
      <Navbar />
      
      <div className="flex-1 w-11/12 max-w-maxContent mx-auto">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/education" element={<Education/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/dashboard"
            element= {
              <ProtectedRoute>
                <Dashboard/>
              </ProtectedRoute>
            }
          />
        </Routes>
        {/* <Footer/> */}
      </div>
      {/* </Router> */}
    </div>
  );
}

export default App;