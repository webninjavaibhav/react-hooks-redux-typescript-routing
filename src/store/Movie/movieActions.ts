import {
  ADD_MOVIE_AS_UNWATCH,
  ADD_MOVIE_AS_WATCH,
  REMOVE_MOVIE_FROM_WATCH,
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MY_MOVIE,
} from './movieTypes';
import { IAction } from '../IAction';
import { IMovie } from './IMovie';

/**
 * Call on search movie.
 */
export const searchMovieRequest = (): IAction => {
  return {
    type: SEARCH_MOVIE_REQUEST,
  };
};

/**
 * Call on search movie success.
 */
export const searchMovieSuccess = (movieList: IMovie[]): IAction => {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    payload: movieList,
  };
};

/**
 * Call on search movie failure.
 */
export const searchMovieFailure = (error: string): IAction => {
  return {
    type: SEARCH_MOVIE_FAILURE,
    payload: error,
  };
};

/**
 * Add movie as unwatch
 * @param id
 */
export const addMovieAsUnwatch = (id: number): IAction => {
  return {
    type: ADD_MOVIE_AS_UNWATCH,
    payload: id,
  };
};

/**
 * Add movie as watch
 * @param id
 */
export const addMovieAsWatch = (id: number): IAction => {
  return {
    type: ADD_MOVIE_AS_WATCH,
    payload: id,
  };
};

/**
 * Remove movie as unwatch
 * @param id
 */
export const removeMovieFromWatch = (id: number): IAction => {
  return {
    type: REMOVE_MOVIE_FROM_WATCH,
    payload: id,
  };
};

/**
 * Search movie list
 * @param filter
 */
export const searchMyMovie = (searchTerm: string): IAction => {
  return {
    type: SEARCH_MY_MOVIE,
    payload: searchTerm,
  };
};
