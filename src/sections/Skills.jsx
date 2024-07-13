import cube from "../assets/cube-svgrepo-com.svg";

const skills = {
  "Front-End": ["HTML/CSS", "JavaScript", "React"],
  "Back-End": ["NodeJs", "ExpressJs"],
  "Full-Stack": ["PHP", "Django"],
  'Databases': ["MongoDB", "MySQL"],
  "CSS Frameworks": ["TailwindCSS"],
  "Version Control": ["Git/GitHub"],
};

const Skills = () => {
  return (
    <div className="px-10 py-20 w-full md:h-[100vh] flex flex-col md:flex-row top-0 bg-gray-900">
      <div className="w-1/3">
        <p className="text-3xl ms:text-4xl md:text-6xl font-serif font-bold text-center md:py-20 mb-5 text-white">
          SKILLS
        </p>
      </div>

      <div className="w-full md:w-2/3 px-5 flex flex-col md:flex-row">
        <div className="w-full px-0  flex flex-wrap flex-col">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="group skill-item border-2 flex border-slate-200 w-2/3 mx-10 mt-2  md:hover:mx-20 hover:bg-slate-600  rounded-md hover:border-slate-900 md:hover:px-5 md:hover:py-0.5 md:hover:text-3xl hover:text-xl hover:text-black relative">
              <img src={cube} alt="cube" className="px-2"/>
              <p className="font-serif text-md font-bold md:text-2xl px-2 py-2 text-white">{category}</p>
              <div className="absolute left-full top-0 hidden md:block bg-transparent mx-10  rounded-md p-2  opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                {skillList.map((skill, index) => (
                  <div key={index} className=" font-mono text-md md:text-lg px-2 py-1 text-white">{skill}</div>
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
