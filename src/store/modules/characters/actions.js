export function storeRequest(character, characters) {
  return {
    type: '@character/STORE_REQUEST',
    payload: { character, characters },
  };
}

export function storeSuccess(characters) {
  return {
    type: '@character/STORE_SUCCESS',
    payload: { characters },
  };
}

export function storeFailure() {
  return {
    type: '@character/STORE_FAILURE',
  };
}
