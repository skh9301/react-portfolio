import About from "@/component/About";
import Career from "@/component/Career";
import Certificates from "@/component/Certificates";
import Contact from "@/component/Contact";
import Education from "@/component/Education";
import Profile from "@/component/Profile";
import Projects from "@/component/Projects";
import Skills from "@/component/Skills";

export default function Home() {
  return (
    <main>
      <Profile />
      <About />
      <Skills />
      <Career />
      <Projects />
      <Education />
      <Certificates />
      <Contact />
    </main>
  );
}
