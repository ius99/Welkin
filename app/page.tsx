import LandingPage from "@/components/landingPage";
import AboutMe from "@/components/aboutme";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <LandingPage />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}
