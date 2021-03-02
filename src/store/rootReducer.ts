/**
 * It is root for store reducer
 */
import { combineReducers } from 'redux';
import { IRootReducerState } from './IRootReducer';
import movieReducer from './Movie/movieReducer';

const rootReducer = combineReducers<IRootReducerState>({
  movieReducer,
});

export default rootReducer;
