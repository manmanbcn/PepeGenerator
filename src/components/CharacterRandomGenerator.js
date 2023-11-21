import React from 'react';
import {eyesData} from '../eyes.js';
import {lipsData} from '../lips.js';
import {handsData} from '../hands.js';
import {decalData} from '../decal.js';
import '../CharacterRandom.css';


const CharacterGenerator = ({ onClickEyes, onClickLips, onClickHands, onClickDecal }) => {

const randomGenerator = (arr) => {
  let random = Math.floor(Math.random() * arr.length);
  return arr[random];
}

const handlerGenerator = () => {
  let randomEyesIndex  = randomGenerator(eyesData);
  let randomLipsIndex  = randomGenerator(lipsData);
  let randomDecalIndex  = randomGenerator(decalData);
  let randomHandsIndex  = randomGenerator(handsData);

  onClickEyes(randomEyesIndex.url);
  onClickLips(randomLipsIndex.url);
  onClickDecal(randomDecalIndex.url);
  onClickHands(randomHandsIndex.url);
}

return (
    <div onClick={handlerGenerator} className="random-wrapper">
      <div className="random-link-text">
          <span className="random-link-text-button">Random Pepe</span>
          <img className="random-link-img" src="src/assets/random.png" alt="Random" />
        </div>
    </div>
);

};

export {CharacterGenerator};
