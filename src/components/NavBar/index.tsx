import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';
import Dark from '../Switch'
import { FaSun, FaMoon } from 'react-icons/fa';
import { ThemeProvider } from 'styled-components';

export default function Navbar() {
  const [scrollPos, setScrollPos] = useState(0);
  const [selectedItem, setSelectedItem] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClass = scrollPos > 1 ? 'navbar navbar-fixed' : 'navbar';

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

  return (

    <header>
			<nav className={navbarClass} ref={navRef}>

        <a href="#skills" className={selectedItem === '#skills' ? 'selected' : ''} onClick={handleClick}>Skills</a>
        <a href="#projetos" className={selectedItem === '#projetos' ? 'selected' : ''}onClick={handleClick}>Projetos</a>
        <a href="#servicos" className={selectedItem === '#servicos' ? 'selected' : ''}onClick={handleClick}>Serviços</a>
        <a href="#sobre" className={selectedItem === '#sobre' ? 'selected' : ''}onClick={handleClick}>Sobre</a>
        <a href="#contato" className={selectedItem === '#contato' ? 'selected' : ''}onClick={handleClick}>Contato</a>

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
  )
}



