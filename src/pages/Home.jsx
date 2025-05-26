import ThemeToggle from "../components/ThemeToggle.jsx";
import StarBackground from "../components/StarBackground.jsx";
import NavBar from "../components/NavBar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import AboutMe from "../components/AboutMe.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export const Home = () => {
    return(
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <ThemeToggle/>

        <StarBackground/>

        <NavBar/>

        <main>
            <HeroSection/>

            <AboutMe/>

            <Skills/>

            <Projects/>

            <Contact/>

        </main>

        <Footer/>
        
    </div>
    );
}