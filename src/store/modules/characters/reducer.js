import produce from 'immer';

const INITIAL_STATE = {
  items: [],
};

export default function characters(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@character/STORE_SUCCESS': {
        draft.items = [];
        draft.items = action.payload.characters;
        break;
      }

      case '@auth/SIGN_OUT': {
        draft.items = [];
        break;
      }

      case '@character/STORE_FAILURE': {
        break;
      }
      default:
    }
  });
}
