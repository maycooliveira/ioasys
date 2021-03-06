export const Types = {
  USER_FAILURE: '@user/USER_FAILURE',
  USER_REQUEST: '@user/USER_REQUEST',
  USER_SUCCESS: '@user/USER_SUCCESS',
  USER_LOGOUT: '@user/USER_LOGOUT',
};

export function userRequest(values) {
  return {
    type: Types.USER_REQUEST,
    loginValue: values,
  };
}

export function getUserSuccess(data) {
  return {
    type: Types.USER_SUCCESS,
    payload: data,
  };
}

export function getUserFailure(error) {
  return {
    type: Types.USER_FAILURE,
    payload: error,
  };
}

export function userLogout() {
  return {
    type: Types.USER_LOGOUT,
  };
}
