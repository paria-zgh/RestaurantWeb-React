import { useEffect, useRef, useState } from "react";
import "./Css/App.css";
import { Header } from "./Header";
import { Home } from "./Home";
import { About } from "./About";
import { Why } from "./Why";
import { Menu } from "./Menu";
import { Events } from "./Events";
import { Chefs } from "./Chefs";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import food from "./assets/food2.jpg";
const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [theme,setTheme]=useState("light");
  const AppStyle={
    backgroundColor: theme==="light"? "white":'rgb(2, 1, 12)',
    color:theme==="light"? "black":'white',
  }
  const sectionsRef = {
    home: useRef(null),
    about: useRef(null),
    menu: useRef(null),
    chefs: useRef(null),
    event: useRef(null),
    contact: useRef(null),
  };
  useEffect(() => {
    const handleScroll = () => {
      for (const section in sectionsRef) {
        const ref = sectionsRef[section];
        const sectionPosition = ref.current.getBoundingClientRect();
        if (sectionPosition.top <= window.innerHeight-50 ) {
          setActiveSection(section); 
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (section) => {
    const sectionElement = sectionsRef[section]?.current;
    const sectionPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset; // موقعیت نسبی نسبت به صفحه
    const offset = -100; 
    window.scrollTo({
      top: sectionPosition + offset,
      behavior: "smooth"
    });
  };
  return (
    <div className="App" style={AppStyle}>
      <Header theme={theme} setTheme={setTheme} scrollToSection={scrollToSection} activeSection={activeSection} />
    <div >        
      <div  ref={sectionsRef.home} >
        <Home />
      </div>
      <div ref={sectionsRef.about}>
        <About />
      </div>
      <Why />
      <img alt="Pz Food" src={food} width="100%" height="450rem" className="imgFoodCover" />
      <div ref={sectionsRef.menu}>
        <Menu />
      </div>
      <div ref={sectionsRef.event}>
        <Events />
      </div>
      <div ref={sectionsRef.chefs}>
        <Chefs/>
      </div>
      <div ref={sectionsRef.contact}>
        <Contact />
      </div>
      <Footer />
      </div> 
    </div>
  );
};

export default App;
