import axios from './instance';
import { MoviePage } from './types/Movie';
import { MovieDetail } from './types/MovieDetail';
const api = {
  movieList: (page: number) =>
    axios.get<MoviePage>(`movie/popular?page=${page}`),
  movieDetail: (id: number) =>
    axios.get<MovieDetail>(`movie/${id}?language=en-U`),
  search: (page: number, q: string, year: string) => {
    console.log(
      `search/movie?include_adult=false&language=en-US&page=${page}&query=${q}${year && '&year=' + year}`,
    );
    return axios.get<MoviePage>(
      `search/movie?include_adult=false&language=en-US&page=${page}&query=${q}${year && '&primary_release_year=' + year}`,
    );
  },
};
export { api };
