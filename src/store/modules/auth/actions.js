export function signInRequest({ pubKey, privKey }) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { pubKey, privKey },
  };
}

export function signInSucess(pubKey, hash) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { pubKey, hash },
  };
}

export function singOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
