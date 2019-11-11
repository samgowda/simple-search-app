import {
  ADD_TO_FAVORITES,
  FETCH_GIFS,
  FETCH_GIFS_FAIL,
  FETCH_GIFS_SUCCESS,
  REMOVE_FROM_FAVORITES,
  RESET_GIFS_SEARCH,
  TOGGLE_TO_FAVORITES,
} from './actions';

export interface Gif {
  id: string;
  isFavorite: boolean;
}

export interface GifState {
  gifSearch: Gif[];
  favorites: string[];
  searchCount: number;
  searchTotalCount: number;
  searchOffset: number;
  loading: boolean;
  error: boolean;
}

const initState: GifState = {
  gifSearch: [],
  favorites: [],
  searchCount: 0,
  searchTotalCount: 0,
  searchOffset: 0,
  loading: false,
  error: false,
};

export const gifs = (state = initState, action): GifState => {
  switch (action.type) {
    case FETCH_GIFS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_GIFS_SUCCESS:
      return {
        ...state,
        gifSearch: state.gifSearch.concat(action.payload.gifSearch),
        searchOffset: action.payload.searchOffset,
        searchCount: action.payload.searchCount,
        searchTotalCount: action.payload.searchTotalCount,
        loading: false,
      };

    case FETCH_GIFS_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case RESET_GIFS_SEARCH:
      return {
        ...state,
        gifSearch: [],
        searchOffset: 0,
        searchCount: 0,
        searchTotalCount: 0,
        loading: false,
        error: false,
      };

    case TOGGLE_TO_FAVORITES:
      const favoriteGifId: string = action.payload.gifId;
      return {
        ...state,
        gifSearch: state.gifSearch.map(gif => gif.id === favoriteGifId ? { ...gif, isFavorite: !gif.isFavorite } : gif),
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.concat([action.payload]),
      };

    case REMOVE_FROM_FAVORITES:
      const index = state.favorites.indexOf(action.payload);
      return {
        ...state,
        favorites: [
          ...state.favorites.slice(0, index),
          ...state.favorites.slice(index + 1),
        ],
      };

    default:
      return state;
  }
};
