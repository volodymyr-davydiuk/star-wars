import React, { FC } from 'react';
import ListItem from '@/containers/home-page/heroes-list/listItem';

interface HeroesListProps {
  heroes?: Array<{
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
  }>
}

const HeroesList: FC<HeroesListProps> = ({ heroes }) => {

  return (
    <div className="heroes-list">
      {heroes?.map((hero, index) => {
          return (
            <>
              <ListItem hero={hero} index={index}/>
            </>
          )
        }
      )}
    </div>
  );
};

export default HeroesList;