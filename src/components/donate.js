import React from 'react';
import '../Donate.css';

const Donate = () => {
  return (
    <section id="donate" className="donate-wrapper">
    <div className="donate-title">
      <img src="/src/assets/Donat_us.png" alt="Donate Us" />
    </div>
    <div className="donate-text">
      <span>
        With this donation you will help the project to develop (increase the number of pictures for the generator). All money from the donation will go to pay for the services of the artist and beer to the creator of the project.
      </span>
    </div>
    <div className="donate-link">
      <a className="donate-link-text">
        <span className="donate-link-text-button">Donate</span>
        <img className="donate-link-img" src="/src/assets/lslink_Donate2.png" alt="Donate Me" />
      </a>
    </div>
  </section>)
};

export { Donate };
