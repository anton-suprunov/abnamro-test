import { ShowDetails } from '../types/shows';

const SHOWS_LIMIT = 20

export const shows = {
  shows: [] as ShowDetails[],
  genres: [] as string[], 
  
  init(payload: ShowDetails[]) {
    this.shows = payload;
    this.extractGenresList()
  },

  extractGenresList() {
    this.shows.forEach((show: ShowDetails) => {
      show.genres.forEach((genre: string) => {
        if (this.genres.indexOf(genre) === -1) {
          this.genres.push(genre)
        }
      })
    })
    this.genres.sort((a: string, b: string) => {
      return a.localeCompare(b);
    })
  },

  getShowsByGenre(genre: string) {
    const shows = this.shows.filter((show: ShowDetails) => {
      return show?.genres.indexOf(genre) !== -1;
    }).slice(0, SHOWS_LIMIT);

    return shows.sort((a: ShowDetails, b:ShowDetails) => {
      if (a.rating?.average > b.rating?.average) return -1;
      if (a.rating?.average < b.rating?.average) return 1;
      return 0;
    })
  },

  getShowById(showId: string): ShowDetails|null {
    const id = +showId;
    if (this.shows.length === 0) return null;
    const res = this.shows.find((show: ShowDetails) => {
      return show.id === id;
    })
    if (res) return res;
    return null;
  }
}