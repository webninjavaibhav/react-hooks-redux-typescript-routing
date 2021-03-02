import { IAction } from '../IAction';
import {
  ADD_MOVIE_AS_UNWATCH,
  ADD_MOVIE_AS_WATCH,
  REMOVE_MOVIE_FROM_WATCH,
  SEARCH_MOVIE_FAILURE,
  SEARCH_MOVIE_REQUEST,
  SEARCH_MOVIE_SUCCESS,
  SEARCH_MY_MOVIE,
} from './movieTypes';
import { IMovie } from './IMovie';

export interface IMovieState {
  loading: boolean;
  movieList: IMovie[];
  searchList: IMovie[];
  error: string;
  searchTerm: string;
}

const initialState: IMovieState = {
  loading: false,
  searchList: [],
  movieList: [],
  error: '',
  searchTerm: '',
};

/**
 * reducer for current user.
 * @param state
 * @param action
 */
const currentUserReducer = (state = initialState, action: IAction): IMovieState => {
  switch (action.type) {
    case SEARCH_MOVIE_REQUEST:
      return {
        ...state,
        loading: true,
        searchList: initialState.searchList,
        error: '',
        searchTerm: '',
      };
    case SEARCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        searchList: action.payload,
        error: '',
        searchTerm: '',
      };
    case SEARCH_MOVIE_FAILURE:
      return {
        ...state,
        loading: false,
        searchList: initialState.searchList,
        error: action.payload,
        searchTerm: '',
      };
    case ADD_MOVIE_AS_UNWATCH:
      const movie = state.searchList.find((movie) => movie.id === action.payload);
      let newMovieList = [...state.movieList];
      if (movie) {
        newMovieList = [...state.movieList, { ...movie, isWatch: false }];
      }
      return {
        ...state,
        movieList: newMovieList,
      };
    case ADD_MOVIE_AS_WATCH:
      const index = state.movieList.findIndex((movie) => movie.id === action.payload);
      let movieList = [...state.movieList];
      if (index > -1) {
        movieList[index].isWatch = true;
      }
      return {
        ...state,
        movieList,
      };
    case REMOVE_MOVIE_FROM_WATCH:
      const removIndex = state.movieList.findIndex((movie) => movie.id === action.payload);
      let removeList = [...state.movieList];
      if (removIndex > -1) {
        removeList[removIndex].isWatch = false;
      }
      return {
        ...state,
        movieList: removeList,
      };
    case SEARCH_MY_MOVIE:
      return {
        ...state,
        searchTerm: action.payload,
      };
    default:
      return state;
  }
};

export default currentUserReducer;
