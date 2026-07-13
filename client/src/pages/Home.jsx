import { Sun } from "lucide-react";
import IconButton from "../components/ui/IconButton";
import Hero from "../components/sections/Hero/Hero";
import Experience from "../components/sections/Experience/Experience";
import Projects from "../components/sections/Projects/Projects";
import Skills from "../components/sections/Skills/Skills";
import Contact from "../components/sections/Contact/Contact";
import Footer from "../components/sections/Footer/Footer";
function Home() {
  return (

    <div>

    <Hero />
    <Experience />
    <Projects />
    <Skills />
    <Contact />
    <Footer />

    </div>
  );
  
}

export default Home;