import '../EyesButton.css';
import {eyesData} from '../eyes.js';
import {createHandlerNext, createHandlerPrev} from './HandlerGenerator.js';
import React, { useState } from 'react';


const EyesButton = ({ onClickEyes }) => {
  const [currentIndexEyes, setCurrentIndexEyes] = useState(0);

    return (
      <div className="eyes-wrapper">
          <div className="eyes-link-text">
              <span className="eyes-link-text-button">Eyes</span>
              <img className="eyes-link-img" src="src/assets/eyes.png" alt="Eyes" />
              <div className = "handler-button-prev-eyes">
                <a onClick={createHandlerPrev(eyesData, currentIndexEyes, setCurrentIndexEyes, onClickEyes, 'Eyes')}  className = "handler-button-link-prev-eyes" href=''>
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 330.002 330.002" fill="#b6b6b7" width="25"><path d="M233.25,306.001L127.5,165.005L233.25,24.001c4.971-6.628,3.627-16.03-3-21c-6.627-4.971-16.03-3.626-21,3
                    L96.75,156.005c-4,5.333-4,12.667,0,18l112.5,149.996c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001
                    C236.878,322.03,238.221,312.628,233.25,306.001z"/></svg>
                </a>
              </div>
              <div className = "handler-button-next-eyes">
                <a onClick={createHandlerNext(eyesData, currentIndexEyes, setCurrentIndexEyes, onClickEyes, 'Eyes')} className = "handler-button-link-next-eyes" href=''>
                  <svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 330 330" fill="#b6b6b7" width="25"><path d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
                    c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
                    C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
                    C255,161.018,253.42,157.202,250.606,154.389z"/></svg>
                </a>
              </div>
          </div>
        </div>)
}

export { EyesButton };