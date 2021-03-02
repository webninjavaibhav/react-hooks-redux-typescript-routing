import { AxiosResponse } from 'axios';
import { searchMovieFailure, searchMovieSuccess, searchMovieRequest } from './movieActions';
import axios from 'axios';

/**
 * service for current user.
 */
export const searchMovie = (searchInput: string) => {
  return (dispatch) => {
    dispatch(searchMovieRequest());
    axios
      .get(
        `${process.env.REACT_APP_BASEURL}search/movie?api_key=f145bddb97475eb450eee0a4219ef39b&language=en-US&query=${searchInput}&page=1&include_adult=false`
      )
      .then((response: AxiosResponse) => {
        dispatch(searchMovieSuccess(response.data.results));
      })
      .catch((error) => {
        dispatch(searchMovieFailure(error.response.data.error));
      });
  };
};
