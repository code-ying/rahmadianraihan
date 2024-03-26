
import AboutMe from "./components/AboutMe";
import BlogHome from "./components/BlogHome";
import ContactForm from "./components/ContactForm.js/index.jsx";
import HeroSection from "./components/HeroSection";

export default function Home() {
  

  return (
    <div className="">
      <HeroSection />
      <AboutMe />
      <BlogHome />
      <ContactForm />  
    </div>
  );
}
