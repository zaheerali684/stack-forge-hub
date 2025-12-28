import Navbar from "../common/Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Process from "./Process";
import About from "./About";
import Projects from "./Projects";
import OurTeam from "./OurTeam";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import Footer from "../common/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <Projects />
      <OurTeam />
      <Testimonials />
      <ContactForm />
      <Footer />
    </>
  );
}
