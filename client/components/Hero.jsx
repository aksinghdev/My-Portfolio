

// export default function Hero(){

//   return(

//     <div className="flex items-center justify-between min-h-screen bg-[#081b29] text-white px-20">

//       <div className="max-w-xl">

//         <h3 className="text-2xl">Hello, It's Me</h3>

//         <h1 className="text-5xl font-bold mt-2">
//           Abhishek Kumar Singh
//         </h1>

//         <h2 className="text-3xl mt-2 text-cyan-400">
//           MERN Stack Developer
//         </h2>

//         <p className="mt-4 text-gray-300">
//           Passionate developer focused on building modern
//           scalable web applications using MERN stack.
//         </p>

//         <button className="mt-6 bg-cyan-500 px-6 py-2 rounded-full shadow-lg hover:shadow-cyan-500">
//           More About Me
//         </button>

//       </div>


//       <div className="relative">

//         <img
//           src=""
//           className="w-[350px] rounded-full border-4 border-cyan-400 shadow-[0_0_40px_cyan]"
//         />

//       </div>

//     </div>
//   );

// }


import React, { useState, useEffect } from "react";


import pic from "../src/assets/image.jpg";

const roles = ["MERN Stack Developer", "Frontend Developer", "React Enthusiast","Full Stack Developer","JS Developer","Backend Developer"];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index === roles.length) return;

    if (subIndex < roles[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + roles[index][subIndex]);
        setSubIndex(subIndex + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setSubIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [subIndex, index]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col md:flex-row items-center justify-between min-h-screen px-10 overflow-hidden text-white"
    >
      {/* Dynamic Background Circles */}
      <div className="absolute w-full h-full -z-10 top-0 left-0 flex justify-center items-center">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-cyan-500/20 animate-ping blur-3xl"></div>
        <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-400/30 animate-pulse blur-2xl"></div>
        <div className="absolute w-[200px] h-[200px] rounded-full bg-cyan-300/40 animate-pulse blur-xl"></div>
      </div>

      {/* Hero Text */}
      <div className="max-w-xl space-y-4 z-10">
        <h3 className="text-2xl">Hello, It's Me</h3>
        <h1 className="text-5xl font-bold mt-2">Abhishek Kumar Singh</h1>
        <h2 className="text-3xl mt-2 text-cyan-400">
          {text}
          <span className={`${blink ? "opacity-100" : "opacity-0"} inline-block`}>|</span>
        </h2>
        <p className="mt-4 text-gray-300">
          Passionate developer focused on building modern scalable web applications using MERN stack. I love building interactive UI & smooth UX.
        </p>
        <button className="mt-6 bg-cyan-500 px-6 py-2 rounded-full shadow-lg hover:shadow-cyan-500 transition-all">
          More About Me
        </button>
      </div>

      {/* Profile Image */}
      <div className="relative mt-10 md:mt-0 z-10">
        <img
          src={pic}
          alt="Profile"
          className="w-[350px] h-[350px] rounded-full border-4 border-cyan-400 shadow-[0_0_40px_cyan] object-cover"
        />
      </div>
    </section>
  );
}