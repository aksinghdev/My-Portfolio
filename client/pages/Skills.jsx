
export default function Skills(){

  return(

    <div className="bg-[#081b29] text-white min-h-screen px-20 py-20">

      <h1 className="text-center text-4xl font-bold mb-16">
        My <span className="text-cyan-400">Skills</span>
      </h1>


      <div className="grid grid-cols-2 gap-20">


        <div>

          <h2 className="text-2xl mb-6">Technical Skills</h2>

          <SkillBar skill="HTML" percent="90%" />
          <SkillBar skill="CSS" percent="80%" />
          <SkillBar skill="JavaScript" percent="85%" />
          <SkillBar skill="React" percent="75%" />
          <SkillBar skill="C & C++" percent="70%" />
          <SkillBar skill="Java" percent="72%" />

        </div>


        <div>

          <h2 className="text-2xl mb-6">Professional Skills</h2>

          <div className="grid grid-cols-2 gap-10">

            <CircleSkill label="Creativity" percent="90%" />
            <CircleSkill label="Communication" percent="65%" />
            <CircleSkill label="Problem Solving" percent="75%" />
            <CircleSkill label="Teamwork" percent="85%" />

          </div>

        </div>

      </div>

    </div>

  );
}



function SkillBar({skill,percent}){

  return(

    <div className="mb-6">

      <div className="flex justify-between mb-1">

        <span>{skill}</span>
        <span>{percent}</span>

      </div>

      <div className="w-full bg-gray-700 h-2 rounded">

        <div
          className="bg-cyan-400 h-2 rounded"
          style={{width:percent}}
        ></div>

      </div>

    </div>

  );
}



function CircleSkill({label,percent}){

  return(

    <div className="flex flex-col items-center">

      <div className="w-24 h-24 rounded-full border-4 border-cyan-400 flex items-center justify-center text-xl">

        {percent}

      </div>

      <p className="mt-2">{label}</p>

    </div>

  );

}