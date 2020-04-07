import { all, takeLatest, put, call } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import crypto from 'crypto';

import { signFailure, signInSucess } from './actions';

import api from '~/services/api';

function* signInRequest({ payload }) {
  try {
    const { pubKey, privKey } = payload;
    const hash = crypto
      .createHash('md5')
      .update(`1${privKey}${pubKey}`)
      .digest('hex');

    yield call(api.get, `/characters`, {
      params: {
        ts: 1,
        apikey: pubKey,
        hash,
      },
    });

    api.defaults.params.hash = hash;
    api.defaults.params.apikey = pubKey;

    yield put(signInSucess(pubKey, hash));
  } catch (err) {
    console.tron.log(err);
    toast.error('Crendenciais incorretas');
    yield put(signFailure());
  }
}

function setHash({ payload }) {
  if (!payload.auth) return;

  api.defaults.params.hash = payload.auth.hash && payload.auth.hash;
  api.defaults.params.apikey = payload.auth.pubKey && payload.auth.pubKey;
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signInRequest),
  takeLatest('persist/REHYDRATE', setHash),
]);
