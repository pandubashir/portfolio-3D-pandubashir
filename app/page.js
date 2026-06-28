import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";
import CustomCursor from "@/components/CustomCursor";
import AuroraBackground from "@/components/AuroraBackground";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="app">
        <CustomCursor />
        <AuroraBackground />
        <Navbar />
        <div className="main">
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Footer />
        </div>
        <MusicPlayer />
      </div>
    </SmoothScroll>
  );
}