/**
 * Register root reducer state here
 */
import { IMovieState } from './Movie/movieReducer';

export interface IRootReducerState {
  /**
   * Current user Reducer state
   */
  movieReducer: IMovieState;
}
