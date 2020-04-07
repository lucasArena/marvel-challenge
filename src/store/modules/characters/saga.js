import { all, takeLatest, put } from 'redux-saga/effects';
import produce from 'immer';

import { storeFailure, storeSuccess } from './actions';

function* storeRequest({ payload }) {
  try {
    const { character, characters } = payload;

    const newCharacters = produce(characters, (draft) => {
      if (characters.length === 2) {
        draft.shift();
      }

      draft.push(character);
    });
    yield put(storeSuccess(newCharacters));
  } catch (err) {
    yield put(storeFailure());
  }
}

export default all([takeLatest('@character/STORE_REQUEST', storeRequest)]);
