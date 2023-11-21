import React from 'react';
import '../CharacterPart.css';

const CharacterPart = React.forwardRef(({eyes, lips, hands, decal, hair, shirt, bg}, ref) => {
    return (
    <section className={`person ${bg}`} ref={ref}>
        <div className= "profileWrapper">
                <div className="eyesWrapper">
                    <img className="eyes" src={eyes} alt="eyes"/>
                </div>
                <div className="lipsWrapper">
                    <img className="lips" src={lips} alt="lips" />
                </div>
                <div className='bodyWrapper'>
                    <img className="shirt" src={shirt} alt="body" />
                </div>
                <div className='handsWrapper'>
                    <img className="hands" src={hands} alt="hands" />
                </div>
                <div className='decalWrapper'>
                    <img className="decal" src={decal} alt="decal" />
                </div>
                <div className='hairWrapper'>
                    <img className="hairs" src={hair} alt="hair" />
                </div>
                <div className='backpackWrapper'>
                    <img className="backpacks" src="src/assets/backpack-off.png" alt="" />
                </div>
                <div className="headWrapper">
                    <img className="head" src="src/assets/Head_fixed.png" alt="head"/>
                </div>
        </div>
    </section>
    )
})

export { CharacterPart };