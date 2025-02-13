import About from "@/components/About";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Skills } from "@/components/Skills";

export default function Home() {
  console.log(
    "SANITY_REVALIDATE_SECRET:",
    process.env.SANITY_REVALIDATE_SECRET ? "Exists" : "Missing"
  );

  return (
    <>
      <Header />
      {/*  */}
      <About />
      {/* <Skills /> */}
      <Projects />
      <Certifications />
      {/*  */}
      <Footer />
    </>
  );
}
