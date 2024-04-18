import React from 'react';
import SkillCard from './SkillCard.jsx';

const CardGroup = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="cardgroup">
        {items.map(item => <SkillCard key={item} skill={item} />)}
      </div>
    </div>
  );
}

export default CardGroup;