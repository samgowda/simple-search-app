import { call, put, takeLatest } from 'redux-saga/effects';

// Actions
import {
  addToFavorites,
  FETCH_GIFS,
  FETCH_GIFS_FAIL,
  fetchGifsSuccess,
  removeFromFavorites,
  RESET_GIFS_SEARCH,
  TOGGLE_TO_FAVORITES,
} from './actions';

// Transformers
import { transformGifs } from './transformers';

// Services
import { getGifs } from '../../services/gifs.service';

export function* fetchGifs(action) {
  try {
    const { searchQuery, searchOffset } = action.payload;
    if (searchOffset === 0) {
      yield put({ type: RESET_GIFS_SEARCH });
    }
    const response = yield call(getGifs, searchOffset, searchQuery);
    const transformedData = transformGifs(response.data.data);
    const pagination = response.data.pagination;
    yield put(fetchGifsSuccess(transformedData, pagination.offset, pagination.count, pagination.total_count));
  } catch (error) {
    // Error Handling
    yield put({ type: FETCH_GIFS_FAIL });
    console.error('error in fetchSection saga', error);
  }
}

export function* toggleFavorites(action) {
  const { isFavorite, gifId } = action.payload;
  try {
    if (isFavorite) {
      yield put(removeFromFavorites(gifId));
    } else {
      yield put(addToFavorites(gifId));
    }
  } catch (error) {
    console.error('error in toggleFavorites saga', error);
  }
}

export default function* rootSaga() {
  yield takeLatest(FETCH_GIFS, fetchGifs);
  yield takeLatest(TOGGLE_TO_FAVORITES, toggleFavorites);
}
