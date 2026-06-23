import BackgroundOrbs from "@/components/BackgroundOrbs";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <div className="app">
      <BackgroundOrbs />
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
  );
}
