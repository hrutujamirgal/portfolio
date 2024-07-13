/* eslint-disable react/no-unescaped-entities */
import { useEffect } from 'react';
import git from "../assets/github.svg";
import email from "../assets/email.svg";
import linkedin from "../assets/linkedin.svg";
import kaggle from "../assets/kaggle.svg";
import TypingText from "./TypingText";
import { useInView } from 'react-intersection-observer';

const contact = [
  {
    name: "LinkedIn",
    img: linkedin,
    link: "https://www.linkedin.com/in/hrutuja-mirgal-2a098122b/",
  },
  {
    name: "GitHub",
    img: git,
    link: "https://github.com/hrutujamirgal",
  },
  {
    name: "Email",
    img: email,
    link: "mailto:hrutuja.mirgal21@vit.edu?subject=Subject%20Here&body=Body%20content%20here"
  },
  {
    name: "Kaggle",
    img: kaggle,
    link: "https://kaggle.com/mirgalhrutuja",
  },
];

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 1, 
  });

  useEffect(() => {
    if (inView) {
      console.log("Contact section is now visible");
    }
  }, [inView]);

  return (
    <div className="bg-slate-950 h-[80vh]">
      <div ref={ref}>
        <TypingText text="COONNECT WITH ME AT" />
      </div>

      <div className="flex justify-between pt-10 md:pt-20 pb-5 md:pb-10 px-20 md:px-32">
        {contact.map((item, index) => (
          <a href={item.link} key={index} className="px-5">
            <img src={item.img} alt={item.name} />
          </a>
        ))}
      </div>

      <div>
        <p className="text-center font-thin text-md md:text-lg pb-10 text-white">CREATED BY HRUTUJA MIRGAL</p>
      </div>
      <div>
        <p className="text-center font-sans text-md md:text-lg pb-10 text-white"><i>" An enthusiastic individual seeking opportunities to apply theoretical knowledge to real-world projects, with a strong desire to gain practical experience."</i></p>
      </div>
    </div>
  );
};

export default Contact;
