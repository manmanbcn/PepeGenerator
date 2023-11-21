import React, { useState } from 'react';
import '../CharacterSelector.css';

import html2canvas from 'html2canvas'; 

const CharacterCanvas = ( { characterPartRef } ) => {
  const [downloadFormat, setDownloadFormat] = useState('jpg');

  const downloadImage = async () => {
    try {
      const canvas = await html2canvas(characterPartRef.current, {
        scale: 2, 
        backgroundColor: downloadFormat === 'jpg' ? null : 'transparent', 
      });

      const link = document.createElement('a');
      link.download = `character.${downloadFormat}`;
      link.href = downloadFormat === 'jpg' ? canvas.toDataURL('image/jpeg') : canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Ошибка при сохранении изображения', error);
    }
  };

  return (
        <div onClick={downloadImage} className="save-wrapper">
        <div className="save-link-text">
          <span className="save-link-text-button">Save</span>
          <img className="save-link-img" src="src/assets/save.png" alt="Save" />
        </div>
      </div>
  );
};

export {CharacterCanvas};
