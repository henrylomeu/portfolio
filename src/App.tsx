import './App.css';
import {Box, Container} from './styles';
import Name from './components/Name';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contato from './components/Contato';
import arrow from './components/assets/svg/bx-chevrons-up.svg'
import { NextUIProvider } from "@nextui-org/react"
import Footer from './components/Footer';
import { useScroll } from "framer-motion";
import { useState, useEffect,useRef } from 'react';
import Loader from './components/Loading';
import Servicos from './components/Servicos';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { FaSun, FaMoon } from 'react-icons/fa';
import {FaBars} from 'react-icons/fa';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const { scrollYProgress } = useScroll();

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1200)
  }, [])

  const [selectedItem, setSelectedItem] = useState<string>("");

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = targetId ? document.querySelector(targetId): null;
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setSelectedItem(targetId || '');
    }
  }
  const navRef = useRef<HTMLDivElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  }

  const [navClass, setNavClass] = useState<string>(theme === 'dark' ? 'dark' : 'light');

  return (
    
    <NextUIProvider > 
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Container>
        {loading ? (
        <Loader/>
      ) : (
        <>
          <header>
			<nav ref={navRef} className={navClass}>
        <a href="#skills" onClick={handleClick}>Skills</a>
        <a href="#projetos" onClick={handleClick}>Projetos</a>
        <a href="#servicos" onClick={handleClick}>Serviços</a>
        <a href="#sobre" onClick={handleClick}>Sobre</a>
        <a href="#contato" onClick={handleClick}>Contato</a>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
          <div className='nome'>
          <a href='#nome' onClick={handleClick}>H</a>
        </div>
			</nav>
      <div className="nav" >
       
        <button className="nav-btn" onClick={showNavbar}>
				<FaBars className='bars'/>
			</button>
      <a className='nome2' href='#nome' onClick={handleClick}>H</a>
      </div>
		</header>
          <Box className='box' style={{ scaleX: scrollYProgress }}></Box>
          <br/><br/><br/>
          <div id='nome'>
            <Name/>
 
          </div>
          <br/><br/><br/><br/><br/><br/>
          <div id='skills'>
            <Skills/>
          </div>
          <br/><br/><br/><br/><br/><br/>
          <div id='projetos'>
            <Projects/>
          </div>
          <div id='servicos'>
            <Servicos/>
          </div>
          <div id='sobre'>
            <About/>
          </div>
          <div id='contato'>
            <Contato/>
          </div>
          <button className='topo' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <img src={arrow} />
        <span>Voltar ao topo</span>
      </button> 
          <Footer/>
          </>
          )}
          </Container>
          </ThemeProvider>
    </NextUIProvider>
    
  );
}