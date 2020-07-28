import React, { useState } from 'react';
import { movies$ } from '../data/movies';
import '../App.scss';
import Style from "./App.module.scss";
import Card from './Card';

function App() {

  const [moviesData, setMoviesData] = useState([]);

  moviesData.forEach(m => {
    console.log(m);
  });

  async function func(){
    await movies$
      .then(m => {
        setMoviesData(m);
      });
    }

  func();

  return (
    <>
    <header className={ Style.myHeader }>
      <ul className={ Style.myList }>
        <li>Comedy</li>
        <li>Animation</li>
        <li>Drame</li>
        <li>Thriller</li>
      </ul>
    </header>
    <section className={ Style.cards }>
      { moviesData.map(( m ) => (
        <Card moviesData={ moviesData } key={ m.id }>
          <p className={ Style.category }>{ m.category }</p>
          <h2>{ m.title }</h2>
          <section className={ Style.likeAndDislike}>
            <img className={ Style.pouceHaut } 
                 src={require("../assets/thumbs-up.svg")} 
                 alt="pouce levé" 
                 onClick={() => setMoviesData(moviesData[0] + 1)}
            />
            <p>{ m.likes }</p>
            <img className={ Style.pouceBas } src={require("../assets/thumbs-down.svg")} alt="pouce baissé"/>
            <p>{ m.dislikes }</p>
          </section>
          <progress className={ Style.stats } max="100" value="70"/>
        </Card>
      ))}
    </section>
    </>
  );
}

export default App;