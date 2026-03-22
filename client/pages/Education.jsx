
export default function Education() {

  const educationData = [
    {
      year: "2022 - 2025",
      title: "Bachelor of Technology (Computer Science Engineering)",
      institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
      desc: "Completed core computer science subjects including Data Structures, Algorithms, Software Engineering, Operating System, AI, Web Development and Database Management."
    },
    {
      year: "2018 - 2021",
      title: "Diploma (Electronics Engineering)",
      institute: "Government Polytechnic Dehrionsone, Rohtas",
      desc: "Completed core Electronics and Communication subjects including Digital Electronics, Analog Electronics, Power Electronics, Radar & Television Technology, Embeded Systems & Robotics and Satelite Communication."
    },
    {
      year: "2016 - 2018",
      title: "Intermediate (Science - PCM)",
      institute: "Jagjiwan College, Ara",
      desc: "Completed higher secondary education with Physics, Chemistry and Mathematics."
    },
    {
      year: "2015 - 2016",
      title: "High School",
      institute: "S.S.D. High School Amauna, Rohtas",
      desc: "Completed secondary education with focus on science and mathematics."
    }
  ];

  return (
    <div className="min-h-screen bg-[#081b29] text-white md:px-20 md:py-16">

      <h1 className="text-4xl font-bold text-center mb-16">
        My <span className="text-cyan-400">Education</span>
      </h1>

      <div className="relative border-l-4 border-cyan-400 ml-6">

        {educationData.map((item, index) => (

          <div key={index} className=" mb-8 ml-5 md:mb-12 md:ml-8">

            <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-3 mt-1"></div>

            <p className="text-cyan-400 font-semibold">
              {item.year}
            </p>

            <h2 className="text-2xl font-bold mt-1">
              {item.title}
            </h2>

            <h3 className="text-gray-200 font-mono">
              {item.institute}
            </h3>

            <p className=" text-richblack-300 mt-2">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}