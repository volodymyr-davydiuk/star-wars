'use client'

import {FC, useEffect, useState} from 'react';
import {fetchData} from '@/store/dataStore';
import HeroesList from '@/containers/home-page/heroes-list';

type DataProps = {
  results: Array<{
    id: number,
    created: string,
    edited: string,
    name: string,
    url: string,
    birth_year: string,
    eye_color: string,
    films: Array<[number, number]>,
    gender: string,
    hair_color: string,
    height: string,
    homeworld: string,
    mass: string,
    skin_color: string,
    spesies: Array<[number, number]>,
    starship: Array<[number, number]>,
    vehicles: Array<[number, number]>,
  }>;
}

type HomePageProps = {
}

const Home: FC<HomePageProps> = () => {
  const [heroes, setHeroes] = useState<DataProps>({results: []});

  useEffect(() => {
    fetchData().then(response => {
      setHeroes(response);
    })
  }, []);


  return (
    <main className={"flex justify-center"}>
      <div className="container">
        <HeroesList heroes={heroes.results}/>
      </div>
    </main>
  );
}

export default Home;
