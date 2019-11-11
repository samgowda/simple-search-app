import { all } from 'redux-saga/effects';
import gifsSagas from './gifs/sagas';

export default function* rootSaga(getState: any) {
  yield all([
    gifsSagas(),
  ]);
}
