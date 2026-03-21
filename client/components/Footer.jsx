import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#081b29] text-gray-300 border-t border-gray-700 mt-20">

      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Name Section */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-white">
              Abhishek Kumar Singh
            </h2>
            <p className="text-sm mt-2 text-gray-400">
              Full Stack Developer | React Enthusiast
            </p>
          </div>

          {/* Navigation */}
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-cyan-400 transition">Home</a>
            <a href="/about" className="hover:text-cyan-400 transition">About</a>
            <a href="/projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="/contact" className="hover:text-cyan-400 transition">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 text-xl">

            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/"
              target="_blank"
              className="hover:text-cyan-400 hover:scale-110 transition"
            >
              <SiLeetcode />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-5 flex justify-between items-center text-sm">

          <p>
            © {new Date().getFullYear()} Abhishek Kumar Singh. All rights reserved.
          </p>

          {/* Scroll To Top */}
          <button
            onClick={scrollTop}
            className="bg-cyan-500 hover:bg-cyan-400 text-black p-2 rounded-md transition"
          >
            <FaArrowUp />
          </button>

        </div>

      </div>

    </footer>
  );
}