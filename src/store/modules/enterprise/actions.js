export const Types = {
  UPDATE_LIST: '@enterprise/UPDATE_LIST',
  ENTERPRISE_LIST_FAILURE: '@enterprise/POKEMON_LIST_FAILURE',
  ENTERPRISE_LIST_REQUEST: '@enterprise/POKEMON_LIST_REQUEST',
  ENTERPRISE_LIST_SUCCESS: '@enterprise/POKEMON_LIST_SUCCESS',
};

export function enterpriseListRequest() {
  return {
    type: Types.ENTERPRISE_LIST_REQUEST,
  };
}

export function enterpriseListSuccess(data) {
  return {
    type: Types.ENTERPRISE_LIST_SUCCESS,
    payload: data,
  };
}
export function updateList(data) {
  return {
    type: Types.UPDATE_LIST,
    search: data,
  };
}

export function enterpriseListFailure(error) {
  return {
    type: Types.ENTERPRISE_LIST_FAILURE,
    payload: error,
  };
}
