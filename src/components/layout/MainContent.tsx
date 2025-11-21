import About from "../sections/About";
import Contact from "../sections/Contact";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Section from "./Section";

const MainContent = () => {
  return (
    <main className="min-h-screen">
      <Section id="hero" className="text-center md:flex-row lg:text-left">
        <Hero />
      </Section>
      <Section id="about" className="max-w-3xl">
        <About />
      </Section>
      <Section id="projects" className="max-w-5xl">
        <Projects />
      </Section>
      <Section id="contact" className="max-w-2xl">
        <Contact />
      </Section>
    </main>
  );
};

export default MainContent;
