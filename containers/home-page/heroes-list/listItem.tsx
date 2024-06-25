import React, {useState} from 'react';
import HeroGraph from '@/components/helpers/heroGraph';

const ListItem = ({ hero, index }) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        key={`hero-${index}`}
        className={"hero-list-item"}
        onClick={() => setOpen(!isOpen)}
      >
        {hero.name}
      </div>
      {isOpen && (
        <div className="hero-information">
          <HeroGraph/>
        </div>
      )}
    </div>
  );
};

export default ListItem;