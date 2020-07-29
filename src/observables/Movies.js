import { movies$ } from '../data/movies';
import { observable, computed, decorate } from 'mobx';
class MovieStore {
    constructor() {
        movies$.then(films => {
            this.films = films;
        })
    }
    
    films = [];

    get allFilms() {
        return this.films;
    };
    
    deleteFilm = (id) => {
        const film = this.films.find((m) => m.id === id);
        const index = this.films.indexOf(film);
        this.films.splice(index, 1);
    }

    editFilm = (id, field, value) => {
        const film = this.films.find((m) => m.id === id);
        film[field] = value;
    }

}

decorate(MovieStore, {
    films: observable,
    allFilms: computed,
});

export default new MovieStore();