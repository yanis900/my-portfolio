import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Skills } from "@/components/Skills";
import Experience from "@/components/Experience";
import Blog from "@/components/Blog";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Header />
      {/*  */}
      <About />
      {/* <Skills /> */}
      {/* <Experience /> */}
      <Projects />
      <Certifications />
      {/* <Blog /> */}
      {/*  */}
      <Footer />
    </>
  );
}
