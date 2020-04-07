import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  hash: '',
  pubKey: '',
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        const { hash, pubKey } = action.payload;
        draft.signed = true;
        draft.loading = false;
        draft.hash = hash;
        draft.pubKey = pubKey;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.signed = false;
        draft.loading = false;
        draft.hash = '';
        draft.pubKey = '';
        break;
      }

      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
