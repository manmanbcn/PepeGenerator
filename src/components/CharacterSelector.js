
import '../CharacterSelector.css';
import {eyesData} from '../eyes.js';
import {lipsData} from '../lips.js';
import {handsData} from '../hands.js';
import {decalData} from '../decal.js';
import {hairData} from '../hair.js';
import {shirtData} from '../shirt.js';
import {bgData} from '../bg.js';
import React, { useState } from 'react';


const CharacterSelector = ({onClickEyes, onClickLips, onClickHands, onClickDecal, onClickHair, onClickShirt, onClickBg}) => {
    const [currentIndexEyes, setCurrentIndexEyes] = useState(0);
    const [currentIndexLips, setCurrentIndexLips] = useState(0);
    const [currentIndexHands, setCurrentIndexHands] = useState(0);
    const [currentIndexDecal, setCurrentIndexDecal] = useState(0);
    const [currentIndexHair, setCurrentIndexHair] = useState(0);
    const [currentIndexShirt, setCurrentIndexShirt] = useState(0);
    const [currentIndexBg, setCurrentIndexBg] = useState(0);
    
    const createHandler = (data, currentIndex, setCurrentIndex, onClick, label) => () => {
        let newIndex = currentIndex + 1;
        if (newIndex >= data.length) {
          newIndex = 0;
        }
        setCurrentIndex(newIndex);
        onClick(data[newIndex].url);
      };

      const buttonData = [
        { onClick: onClickEyes, data: eyesData, currentIndex: currentIndexEyes, setCurrentIndex: setCurrentIndexEyes, label: 'Eyes' },
        { onClick: onClickLips, data: lipsData, currentIndex: currentIndexLips, setCurrentIndex: setCurrentIndexLips, label: 'Lips' },
        { onClick: onClickHands, data: handsData, currentIndex: currentIndexHands, setCurrentIndex: setCurrentIndexHands, label: 'Hands' },
        { onClick: onClickDecal, data: decalData, currentIndex: currentIndexDecal, setCurrentIndex: setCurrentIndexDecal, label: 'Shirt' },
        { onClick: onClickHair, data: hairData, currentIndex: currentIndexHair, setCurrentIndex: setCurrentIndexHair, label: 'Hair' },
        { onClick: onClickShirt, data: shirtData, currentIndex: currentIndexShirt, setCurrentIndex: setCurrentIndexShirt, label: 'Tee Color' },
        { onClick: onClickBg, data: bgData, currentIndex: currentIndexBg, setCurrentIndex: setCurrentIndexBg, label: 'Background' },
      ];

    return (
    <section className="selectorWrapper">
        {buttonData.map(({ onClick, data, currentIndex, setCurrentIndex, label }) => (
            <div className='buttonWrapper' key={label}>
            <button
                className="buttonBox ninth"
                onClick={createHandler(data, currentIndex, setCurrentIndex, onClick, label)}
            >
                {label}
            </button>
            </div>
        ))}
    </section>
    )
}

export { CharacterSelector };