import React from 'react';
import '../Reminder.css';

const Reminder = () => {

  return (
    <section className="reminder-wrapper">
      <div className= "reminder">
        <div>
          <h2 className="reminder-text">generate your <br /> own Pepe</h2>
        </div>
        <div className="reminder-arrrow">
          <svg width="46" height="51" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M45 1L24.9482 24.3386C24.3149 25.0756 23.1805 25.095 22.5224 24.3801L1 1" stroke="#5BA946" strokeLinecap="round"/>
          <path d="M45 26.2769L24.9482 49.6154C24.3149 50.3525 23.1805 50.3719 22.5224 49.657L1 26.2769" stroke="#5BA946" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
  </section>)
};

export { Reminder };
