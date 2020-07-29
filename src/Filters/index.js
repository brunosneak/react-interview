import React from 'react';
import MovieStore from '../observables/Movies';
import Style from '../scss/Filters.module.scss';

export const Filters = props => {
    const categories = [...new Set(MovieStore.allFilms.map((e) => e.category))];
    const Options = () => categories.map((e, i) => <li key={i} value={e}>{e}</li>)
    //return <div >{JSON.stringify(categories)}</div>
    return (
        <header className={ Style.myHeader }>
            <ul className={ Style.myList }>
                <Options />
            </ul>
        </header>
    )
};