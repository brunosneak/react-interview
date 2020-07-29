import React from 'react';
import MovieStore from '../observables/Movies';
import { observer } from 'mobx-react';
import { MovieCard } from './MovieCard';
import { Filters } from '../Filters';
import Style from '../scss/MoviesList.module.scss';

export const MoviesList = observer(
    () => {
        return (
            <>
                <Filters />
                <div className={ Style.cards }>
                    {MovieStore.allFilms.map((e, index) => <MovieCard key={index} {...e} />)}
                </div>
            </>
        )
    }
);