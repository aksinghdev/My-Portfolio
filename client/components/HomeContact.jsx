import { Link } from "react-router-dom";
// import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiLeetcode } from "react-icons/si";

export default function HomeContact() {

  return (
    <section className="bg-[#0a1f2f] text-white py-24 px-10 text-center">

      {/* Heading */}
      <h2 className="text-4xl font-bold mb-6">
        Contact Me
      </h2>

      <p className="text-gray-400 max-w-xl mx-auto mb-14">
        Interested in working together or have any questions? 
        Feel free to reach out through any platform below.
      </p>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">

        {/* Email */}
        <div className="bg-[#0f2d44] p-6 rounded-xl hover:scale-105 transition">
          {/* <FaEnvelope className="text-3xl text-cyan-400 mx-auto mb-3"/> */}
          <h3 className="font-semibold text-lg">Email</h3>
          <p className="text-gray-400 text-sm mt-1">
            krabhi1452@gmail.com
          </p>
        </div>

        {/* Phone */}
        <div className="bg-[#0f2d44] p-6 rounded-xl hover:scale-105 transition">
          {/* <FaPhone className="text-3xl text-cyan-400 mx-auto mb-3"/> */}
          <h3 className="font-semibold text-lg">Phone</h3>
          <p className="text-gray-400 text-sm mt-1">
            +91 9162638828
          </p>
        </div>

        {/* LinkedIn */}
        <a 
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="bg-[#0f2d44] p-6 rounded-xl hover:scale-105 transition"
        >
          {/* <FaLinkedin className="text-3xl text-cyan-400 mx-auto mb-3"/> */}
          <h3 className="font-semibold text-lg">LinkedIn</h3>
          <p className="text-gray-400 text-sm mt-1">
            View Profile
          </p>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/yourusername"
          target="_blank"
          className="bg-[#0f2d44] p-6 rounded-xl hover:scale-105 transition"
        >
          {/* <FaGithub className="text-3xl text-cyan-400 mx-auto mb-3"/> */}
          <h3 className="font-semibold text-lg">GitHub</h3>
          <p className="text-gray-400 text-sm mt-1">
            See My Projects
          </p>
        </a>

        {/* LeetCode */}
        <a 
          href="https://leetcode.com/yourusername"
          target="_blank"
          className="bg-[#0f2d44] p-6 rounded-xl hover:scale-105 transition"
        >
          {/* <SiLeetcode className="text-3xl text-cyan-400 mx-auto mb-3"/> */}
          <h3 className="font-semibold text-lg">LeetCode</h3>
          <p className="text-gray-400 text-sm mt-1">
            Coding Profile
          </p>
        </a>

      </div>

      {/* Hire Me Button */}
      <div className=" pb-12 mx-auto w-full flex flex-row items-center gap-2">
        <div className=" h-1 bg-richblue-400 w-[100%]"></div>
        <p className=" px-3">OR</p>
        <div className=" h-1 bg-richblue-400 w-[100%]"></div>
      </div>
      <Link to="/contact">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition">
          Hire Me
        </button>
      </Link>

    </section>
  );
}