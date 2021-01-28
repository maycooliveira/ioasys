import produce from 'immer';
import { Types } from './actions';

const initialState = {
  user: {},
  loading: false,
};

export default function reducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.USER_REQUEST:
        draft.data = action.loginValue;
        draft.loading = true;
        break;

      case Types.USER_FAILURE:
        draft.loading = false;
        draft.error = action.payload;
        break;

      case Types.USER_SUCCESS: {
        draft.user = payload;
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
