import { useEffect } from 'react';
import web from '../assets/web.jpg';
import { useInView } from 'react-intersection-observer';

const info = {
  name: "Hrutuja Mirgal",
  post: "Web Developer",
};

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, 
  });

  useEffect(() => {
    if (inView) {
      // const name = document.getElementById("name")
      // name.classList.add("slide-item")
      // const post = document.getElementById("post")
      // post.classList.add("slide-left")
      console.log("Home section is now visible");
    }
  }, [inView]);

  return (
    <div className="w-full h-screen md:h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${web})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div ref={ref} className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <p className="name font-mono text-4xl md:text-8xl font-bold slide-item">{info.name}</p>
          <p className="post font-mono text-lg md:text-4xl pt-5 md:pt-10 slide-left">{info.post}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
