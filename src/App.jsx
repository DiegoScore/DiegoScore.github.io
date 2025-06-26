import { BrowserRouter } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works } from "./components";
import ParticlesBg from "./components/particlesBg";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Social from "./components/Social";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'></div>
        <Navbar />
        <div className='relative z-10'>
          <Hero />
          <Experience />
          <Projects />
          <Tech />
          <Social />
          <Footer />
        </div>
        <div className="relative z-0">
          <ParticlesBg />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;