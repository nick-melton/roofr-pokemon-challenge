import React from 'react';
import '../assets/css/Hero.css';
import HeroStats from './HeroStats';

function Hero({ isLeftAligned = true, hero } : { isLeftAligned: boolean, hero: any }) {
  let imgClass = 'hero-img';
  imgClass += (isLeftAligned ? "" : " reversed-img");
  const img = <img src={hero.sprite} className={imgClass}/>;
  const statsBlock = <HeroStats isLeftAligned={isLeftAligned} name={hero.name} attack={hero.attack} />;
  const classses = `hero ${isLeftAligned ? '' : 'reverse-block'}`;

  return (
    <div>
      <div className={classses}>
          {statsBlock}
          {img}
      </div>
    </div>
  );
}

export default Hero;
