import React from 'react';

const Sprites = ({ sprites }) => {
  const spritesList = Object.keys(sprites).filter(key => sprites[key]);

  if (spritesList.length > 0) {
    const spritesToRender = spritesList.map((sprite, index) => (
      <div key={index} className="sprite__item">
        <div className="sprite__background__cover" style={{backgroundImage: `url(${sprites[sprite]})`}} />
        <img className="sprite__picture" alt={`sprint-${index}`} src={sprites[sprite]} />
      </div>
    ));

    return (
      <div className="sprites__wrapper">
        <h3 className="sprites__title">Sprites</h3>
        <div className="sprites__list">
          {spritesToRender}
        </div>
      </div>
    );
  }
};

export default Sprites;
