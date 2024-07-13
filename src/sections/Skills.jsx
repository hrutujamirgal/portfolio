/* eslint-disable no-unused-vars */
import { useEffect} from "react";
import cube from "../assets/cube-svgrepo-com.svg";
import { useInView } from "react-intersection-observer";

const skills = {
  "Front-End": ["HTML/CSS", "JavaScript", "React"],
  "Back-End": ["NodeJs", "ExpressJs"],
  "Full-Stack": ["PHP", "Django"],
  "Databases": ["MongoDB", "MySQL"],
  "CSS Frameworks": ["TailwindCSS"],
  "Version Control": ["Git/GitHub"],
};

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.5, 
  });

  useEffect(() => {
    if (inView) {
      console.log("Skills section is now visible");
      const sk = document.getElementById("skill")
      sk.classList.add("slide-item")
    }
  }, [inView]);

  return (
    <div ref={ref} className="px-10 py-32 w-full md:h-screen flex flex-col md:flex-row top-0 bg-slate-950">
      <div className="w-full md:w-1/3">
        <p id="skill" className="text-3xl md:text-6xl font-serif font-bold text-center md:py-20 mb-5 text-white ">
          SKILLS
        </p>
      </div>

      <div className="w-full md:w-2/3 px-5 flex flex-col md:flex-row">
        <div className="w-full px-0 flex flex-wrap">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div
              key={category}
              className="group skill-item border-2 flex border-slate-200 w-full sm:w-1/2 md:w-2/3 mx-2 md:mx-5 mt-2 hover:mx-5 md:hover:mx-20 hover:bg-slate-800 rounded-md hover:border-slate-900 md:hover:px-5 md:hover:py-0.5 md:hover:text-3xl hover:text-xl hover:text-black relative"
            >
              <img src={cube} alt="cube" className="px-2" />
              <p className="font-serif text-md md:text-2xl px-2 py-2 text-white">
                {category}
              </p>
              <div className="absolute left-full top-0 hidden sm:block md:block bg-transparent mx-5 rounded-md p-2 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                {skillList.map((skill, index) => (
                  <div
                    key={index}
                    className="font-mono text-sm md:text-lg md:px-2 md:py-1 text-white"
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
