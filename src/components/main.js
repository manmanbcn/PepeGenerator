import React from 'react';
import '../Main.css';
import { CharacterPart } from './CharacterPart.js';
import { CharacterCanvas } from './CharacterCanvas.js';
import { CharacterGenerator } from './CharacterRandomGenerator.js';
import {HairButton} from './HairButton.js';
import {HandsButton} from './HandsButton.js';
import {BgButton} from './BgButton.js';
import {LipsButton} from './LipsButton.js';
import {EyesButton} from './EyesButton.js';
import {ShirtButton} from './ShirtButton.js';
import {ShirtColorButton} from './ShirtColorButton.js';

const Main = ({ Reminder, Generator, Donate }) => {
  return (
    <main className= "main-inner">
      <Reminder />
      <Generator 
      CharacterPart = {CharacterPart}
      CharacterCanvas = {CharacterCanvas}
      CharacterGenerator = {CharacterGenerator}
      HairButton = {HairButton}
      HandsButton = {HandsButton}
      BgButton = {BgButton} 
      LipsButton = {LipsButton}
      EyesButton = {EyesButton}
      ShirtButton = {ShirtButton}
      ShirtColorButton = {ShirtColorButton}/>
      <Donate />
    </main>)
};

export {Main};