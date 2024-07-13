import Header from "./sections/Header";
import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <div id="home"><Home /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}

export default App;
1