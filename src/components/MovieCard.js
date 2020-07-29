import React from 'react';
import MovieStore from '../observables/Movies';
import { DataBar } from './DataBar';
import Style from '../scss/MovieCard.module.scss';

export const MovieCard = props => {
    return (
        <section className={ Style.card }>
            <h3 className={ Style.category }>{props.category} </h3>
            <h2 className={ Style.title }>{props.title}</h2>
            <section className={ Style.likeAndDislike}>
                <img className={ Style.pouceHaut } 
                     src={require("../assets/thumbs-up.svg")} 
                     alt="pouce levé" 
                     onClick={() => MovieStore.editFilm(props.id, 'likes', props.likes + 1)}
                />
                <p>{props.likes}</p>
                <img className={ Style.pouceBas } 
                     src={require("../assets/thumbs-down.svg")} 
                     alt="pouce baissé"
                     onClick={() => MovieStore.editFilm(props.id, 'dislikes', props.dislikes + 1)}
                />
                <p>{props.dislikes}</p>
                <div className={ Style.wrapperTrash }>
                    <img className={ Style.trash } 
                        src={require("../assets/trash.svg")} 
                        alt="poubelle"
                        onClick={() => MovieStore.deleteFilm(props.id)}
                    />
                </div>
                <DataBar {...props} />
            </section>
        </section>
    )
};