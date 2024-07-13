import web from '../assets/web.jpg';

const info = {
  name: "Hrutuja Mirgal",
  post: "Web Developer",
};

const Home = () => {
  return (
    <div className="w-full h-screen md:h-screen bg-cover bg-center relative" style={{ backgroundImage: `url(${web})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10">
          <p className="font-mono text-4xl md:text-8xl font-bold slide-item">{info.name}</p>
          <p className="font-mono text-lg md:text-4xl pt-5 md:pt-10 slide-left">{info.post}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
