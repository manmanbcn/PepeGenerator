import './App.css';
import React from 'react';
import { Reminder } from './components/reminder.js';
import { Generator } from './components/generator.js';
import { Donate } from './components/donate.js';

const App = ({ Header, Main, Footer}) => {


  return (
    <div className="main-wrapper">
      <Header/>
      <Main Reminder = {Reminder} Generator = {Generator} Donate = {Donate}/> 
      <Footer />
    </div>
  );
}

export default App;
