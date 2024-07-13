import { useState, useEffect } from "react";
import git from "../assets/github-svgrepo-com.svg";
import emp from "../assets/empmanagement.jpg";
import pharma from "../assets/pharma.jpg";
import interview from "../assets/interview.jpg";
import insight from "../assets/graph.jpg";
import { useInView } from 'react-intersection-observer';

const project = [
  {
    title: "Employee Working Hour Management system",
    date: "Jul 2023 - Nov 2023",
    description:
      "The Employee Working Hour Monitoring App is a web application designed for institutions or organizations with employees working from home. It ensure adherence to work hour policies while providing tools for managers and administrators to monitor attendance, assign tasks, and manage leaves. The app utilizes role-based access control to regulate user privileges.",
    github: "https://github.com/hrutujamirgal/employee-working-hour-management",
    image: emp,
  },
  {
    title: "Pharmaceutical-SupplyChain management",
    date: "Jul 2023 - Nov 2023",
    description:
      "A system for secure and transparent supply chain management for pharmaceutical companies, ensuring authenticity, traceability, and regulatory compliance while enhancing overall security and efficiency using Blockchain. Group project- My Contribution - Frontend In React",
    github:
      "https://github.com/hrutujamirgal/Pharmaceutical-Supply-chain-management-using-Ethereum-Blockchain",
    image: pharma,
  },
  {
    title: "Interview Prep Web Application",
    date: "Jan 2024 - Apr 2024",
    description:
      "A web application built using React and Django, is used for the online interview preparation by the fresher candidates. This helps the candidates, by providing the document, which consist of the the question asked, the answer given by the candidate(used Automatic Speech Recognition),the actual answer, and the similarity between them ( lexical similarity using pacy and contextual similarity using BERT model). Group project - My Contribution - Full tck project in React Nad Django ",
    github: "",
    image: interview,
  },
  {
    title: "ML Employee Salary",
    date: "Apr 2024 - May 2024",
    description:
      "Developed a web application using the MERN stack to analyze and visualize ML Engineer salaries data from Kaggle. The app integrates MongoDB for seamless data management and utilizes the Ant Design UI library to create a sortable table displaying yearly job counts and average salaries. Implemented a line graph to show job number trends from 2020 to 2024. Enhanced user interaction by allowing table row clicks to reveal detailed job title counts for each year, providing deeper data insights.",
    github: "https://github.com/hrutujamirgal/ML_Employee_Salary",
    image: insight,
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the component is visible
  });

  useEffect(() => {
    if (inView) {
      const project = document.getElementById("pro")
      project.classList.add("slide-left")
      console.log("Projects section is now visible");
    }
  }, [inView]);

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div ref={ref} className="project-container bg-slate-950 text-white py-10 relative min-h-screen">
      <div className="my-10">
        <p className="text-3xl md:text-6xl font-serif px-10" id="pro">PROJECTS</p>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="photo w-4/4 md:w-2/3 h-[60vh] border border-slate-200 mx-5 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${project[currentIndex].image})` }}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center z-10">
              <p className="font-mono text-md md:text-lg pt-20 px-2 slide-item">
                {project[currentIndex].description}
              </p>
            </div>
          </div>
        </div>
        
        <div className="w-4/4 md:w-1/3 mx-5">
          {project.map((item, index) => (
            <div
              key={index}
              className={`w-full rounded-md border border-white transition-opacity duration-700 my-5 cursor-pointer ${
                currentIndex === index ? "bg-slate-700" : "bg-slate-800"
              }`}
              onClick={() => handleSelect(index)}
            >
              <div className="flex w-full border border-white py-2 px-4 justify-between">
                <p
                  className={`font-mono text-md md:text-xl ${
                    currentIndex === index ? "text-white" : "text-slate-500"
                  }`}
                >
                  {item.title}
                </p>
                {item.github && (
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={git} alt="GitHub Link" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
