export default function Skills(){
  return(
    <div className="bg-[#081b29] text-white min-h-screen px-4 sm:px-10 md:px-20 py-10 md:py-20">

      <h1 className="text-center text-2xl md:text-4xl font-bold mb-10 md:mb-16">
        My <span className="text-cyan-400">Skills</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">

        <div>
          <h2 className="text-xl md:text-2xl mb-6">Technical Skills</h2>
          <SkillBar skill="HTML"       percent={90} />
          <SkillBar skill="CSS"        percent={80} />
          <SkillBar skill="JavaScript" percent={85} />
          <SkillBar skill="React"      percent={75} />
          <SkillBar skill="C & C++"    percent={70} />
          <SkillBar skill="Java"       percent={72} />
        </div>

        <div>
          <h2 className="text-xl md:text-2xl mb-6">Professional Skills</h2>
          <div className="grid grid-cols-2 gap-6">
            <CircleSkill label="Creativity"      percent={90} />
            <CircleSkill label="Communication"   percent={65} />
            <CircleSkill label="Problem Solving" percent={75} />
            <CircleSkill label="Teamwork"        percent={85} />
          </div>
        </div>

      </div>
    </div>
  );
}


function SkillBar({skill, percent}){
  return(
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{percent}%</span>
      </div>
      <div className="w-full bg-gray-700 h-2 rounded">
        <div
          className="bg-cyan-400 h-2 rounded"
          style={{width: `${percent}%`}}
        ></div>
      </div>
    </div>
  );
}


// ✅ CHANGED: Poora CircleSkill component badla — ab SVG se actual progress circle banega
function CircleSkill({label, percent}){

  const radius = 45        // circle ki radius
  const stroke = 6         // circle ki thickness
  const circumference = 2 * Math.PI * radius   // puri circle ki length
  const progress = (percent / 100) * circumference  // kitna fill hoga

  return(
    <div className="flex flex-col items-center">

      {/* SVG circle progress */}
      <svg width="110" height="110" viewBox="0 0 110 110">

        {/* Background circle — gray */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="#1e3a4a"
          strokeWidth={stroke}
        />

        {/* Progress circle — cyan */}
        <circle
          cx="55"
          cy="55"
          r={radius}
          fill="none"
          stroke="#22d3ee"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}         // puri length
          strokeDashoffset={circumference - progress}  // kitna dikhana hai
          transform="rotate(-90 55 55)"           // upar se start ho
        />

        {/* Center text — percent */}
        <text
          x="55"
          y="55"
          textAnchor="middle"
          dominantBaseline="central"
          fill="#22d3ee"
          fontSize="16"
          fontWeight="600"
        >
          {percent}%
        </text>

      </svg>

      <p className="mt-2 text-sm sm:text-base">{label}</p>

    </div>
  );
}