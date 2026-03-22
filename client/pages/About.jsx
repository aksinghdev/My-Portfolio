import CountUp from "react-countup";

export default function About() {
  return (
    <section className="min-h-screen bg-[#0a1f2f] w-full text-white px-10 lg:px-20 py-16">

      <h2 className="text-4xl font-bold mb-10">About Me</h2>

      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className=" md:space-y-6 text-gray-300 leading-relaxed ">

          <p className=" my-3">
            Hello! I'm <span className="text-cyan-400 font-semibold">Abhishek Kumar Singh</span>, 
            a passionate <span className="text-cyan-400">Full Stack Developer</span> with 
            a strong background in both <span className="text-cyan-400">Electronics</span> 
            and <span className="text-cyan-400">Computer Science</span>.
          </p>

          <p className=" my-3">
            I completed my <span className="text-cyan-400">Diploma in Electronics & Communication Engineering (2021)</span> 
            and recently graduated with a <span className="text-cyan-400">B.Tech in Computer Science (2025)</span>.
            My journey from electronics to software development has given me a 
            unique understanding of both hardware and software technologies.
          </p>

          <p className=" my-3">
            I specialize in the <span className="text-cyan-400">MERN Stack</span> and 
            enjoy building scalable and modern web applications using 
            React, Node.js, Express and MongoDB.
          </p>

          <p className=" my-3">
            During my learning journey, I have solved 
            <span className="text-cyan-400 font-semibold"> 500+ coding problems</span> 
            to improve my problem-solving skills and algorithmic thinking.
          </p>

          <p className=" my-3">
            During my diploma, I also worked on electronics projects such as:
          </p>

          <ul className="list-disc ml-6 space-y-1">
            <li>Automatic Electronic Voltage Stabilizer</li>
            <li>Mobile Controlled Car using Arduino UNO</li>
          </ul>

          <p className=" my-3">
            Currently, I am focused on improving my full stack development 
            skills, OOPs concepts and practice DSA problems to improve my problem solving skills. And also preparing for professional software engineering roles.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-4 pt-4">

            <div>✔ React.js</div>
            <div>✔ Node.js</div>

            <div>✔ Express.js</div>
            <div>✔ MongoDB</div>

            <div>✔ Tailwind CSS</div>
            <div>✔ Git & GitHub</div>

            <div>✔ C & C++</div>
            <div>✔ JAVA</div>

          </div>

        </div>

        {/* RIGHT SIDE STATS */}
        <div className=" w-full grid grid-cols-2 gap-6">

          <StatCard number={2} suffix="+" text="Projects Completed" />

          <StatCard number={10} suffix="+" text="Technologies Learned" />

          <StatCard number={100} suffix="+" text="Coding Problems" />

          <StatCard number={2025} text="B.Tech ( CSE )" />

          <StatCard number={2021} text="Diploma ( ECE ) " />

          <StatCard text="MERN Stack" />

        </div>

      </div>
    </section>
  );
}


function StatCard({ number, suffix = "", text }) {
  return (
    <div className="bg-[#0c2a3a] p-4 md:p-8 rounded-xl shadow-lg text-center 
    hover:scale-105 transition duration-300">

      <h3 className="text-2xl md:text-4xl font-bold text-cyan-400 text-center">

        {number ? (
          <CountUp end={number} duration={3} suffix={suffix} />
        ) : (
          "" 
        )}

      </h3>

      <p className="text-gray-300 mt-2 text-center">{text}</p>

    </div>
  );
}