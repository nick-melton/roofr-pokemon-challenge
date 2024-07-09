import React from 'react';
import '../assets/css/HeroStats.css';

function HeroStats({ isLeftAligned, name, attack } : { isLeftAligned: boolean, name: string, attack: any }) {
  const statsClass = `stats ${isLeftAligned ? 'stats-green' : 'stats-blue'}`;

  const statsBlock = <div className="stats-block">
    <h1>{name}</h1>
    <div className={statsClass}>{ attack.name }: { attack.power }</div>
  </div>;

  let triangleClass = 'triangle';
  triangleClass += (isLeftAligned ? '' : ' reversed-img right-aligned-triangle');
  
  const classses = `hero-stats ${isLeftAligned ? '' : 'reverse-block'}`;

  return (
      <div className={classses}>
          {statsBlock}
          <div className={triangleClass}></div>
      </div>
  );
}

export default HeroStats;
