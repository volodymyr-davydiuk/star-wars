import React, {FC, useState} from 'react';
import HeroGraph from '@/components/helpers/heroGraph';

interface ListItemProps {
  key?: number,
  index?: number,
  hero?: {
    id: number;
    created: string;
    edited: string;
    name: string;
    url: string;
    birth_year: string;
    eye_color: string;
    films: Array<[number, number]>;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    skin_color: string;
    spesies: Array<[number, number]>;
    starship: Array<[number, number]>;
    vehicles: Array<[number, number]>
  }
}

const ListItem: FC<ListItemProps> = ({hero, index}) => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <div key={`hero-${index}`}>
      <div
        className={"hero-list-item"}
        onClick={() => setOpen(!isOpen)}
      >
        {hero?.name}
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