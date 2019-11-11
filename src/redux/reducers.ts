import { connectRouter, RouterState } from 'connected-react-router';
import { combineReducers } from 'redux';

/*
  * Type Application state
*/
export interface ApplicationState {
  router: RouterState;
  gifs: GifState;
}

/*
  * Import reducers and reducer types
*/
import { gifs, GifState } from './gifs/reducers';

/* Combines all reducers to a single reducer function */
const rootReducer = history => combineReducers<ApplicationState>({
  router: connectRouter(history),
  gifs,
});

export default rootReducer;
