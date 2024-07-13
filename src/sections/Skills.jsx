import cube from "../assets/cube-svgrepo-com.svg";

const skills = {
  "Front-End": ["HTML/CSS", "JavaScript", "React"],
  "Back-End": ["NodeJs", "ExpressJs"],
  "Full-Stack": ["PHP", "Django"],
  "Databases": ["MongoDB", "MySQL"],
  "CSS Frameworks": ["TailwindCSS"],
  "Version Control": ["Git/GitHub"],
};

const Skills = () => {
  return (
    <div className="px-4 md:px-10 py-20 min-h-screen flex flex-col top-0 bg-gray-950">
      <div className="w-full">
        <p className="text-3xl md:text-6xl font-serif font-bold text-center py-10 text-white">
          SKILLS
        </p>
      </div>

      <div className="w-full px-2 md:px-5 flex flex-col">
        <div className="w-full flex flex-wrap justify-center">
          {Object.entries(skills).map(([category, skillList]) => (
            <div
              key={category}
              className="group skill-item border-2 flex flex-col items-center border-slate-200 w-full md:w-1/2 lg:w-1/3 px-4 py-2 mt-2 mx-2 hover:mx-4 hover:bg-slate-800 rounded-md hover:border-slate-900 relative"
            >
              <img src={cube} alt="cube" className="w-8 md:w-10 mb-2" />
              <p className="font-serif text-sm md:text-xl font-bold text-white text-center mb-2">
                {category}
              </p>
              <div className="absolute left-full top-0 bg-transparent w-48 md:w-auto mt-2 ml-2 rounded-md p-2 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                {skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="font-mono text-xs md:text-sm text-white text-center px-2 py-1"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
