import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

import Contact from "./Components/Contact";

import Hobbies from "./Components/Hobbies";

export default function App() {
  // const [isLightMode, setLightMode] = useState(light);
  // function handleScreenMode() {
  //   isLightMode.mode === "light" ? setLightMode(dark) : setLightMode(light);
  // }
  return (
    <main className="text-gray-400  bg-gray-900 body-font">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
    </main>
  );
}
