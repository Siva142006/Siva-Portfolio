import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import ResumeCTA from "./components/ResumeCTA";
import ProfileDetails from "./components/ProfileDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal-up");

    if (!revealItems.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-shell">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <ProfileDetails />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
