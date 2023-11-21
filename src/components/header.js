import React from 'react';
import '../Header.css';

const Header= () => {
  return (
    <header className ="header">
    <nav className="nav-wrapper">
      <ul className="nav-list">
        <li className="nav-item">
          <a href="#generatorPepe" className="link-item"> 
            <img src="src/assets/button_pgenerator.png" alt="PepeGenerator" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#donate" className="link-item">
            <img src="src/assets/button_donate.png" alt="Donate" />
          </a>
        </li>
        <li className="nav-item">
          <a href="#contacts" className="link-item">
            <img src="src/assets/button_contactus.png" alt="Contact Us" />
          </a>
        </li>
      </ul>
    </nav>
    <section className="about-wrapper">
      <div>
        <h1 className="title">PepeGenerator</h1>
      </div>
      <div>
        <h2 className="about-pepe"><p className="first-about">Pepe the Frog, born from Matt Furie's 2005 "Boys Club" comic, has become a versatile internet meme, expressing a spectrum of emotions through various iterations. From the cheerful "Feels Good Man" to the contemplative "Sad Frog," Pepe serves as a digital canvas for users worldwide.</p>
            <p className="second-about">While some variants sparked controversy, the broader online community appreciates Pepe's original lighthearted and relatable essence, making it a symbol of internet culture's dynamic and humorous communication landscape.</p>
        </h2>
      </div>
        <div className="mainpepe-wrapper">
          <img className="mainpepe" src="src/assets/pepe_cover.png" alt="Logo" />    
        </div>
    </section>
  </header>);
};

export {Header};
