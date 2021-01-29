import produce from 'immer';
import { Types } from './actions';

// Reducer
const initialState = {
  enterprises: [],
  loading: true,
};

export default function reducer(state = initialState, action) {
  const { payload } = action;
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.UPDATE_LIST:
        draft.loading = true;
        draft.data = action.search;
        break;
      case Types.ENTERPRISE_LIST_REQUEST:
        draft.loading = true;
        break;

      case Types.ENTERPRISE_LIST_FAILURE:
        draft.loading = false;
        break;

      case Types.ENTERPRISE_LIST_SUCCESS: {
        draft.enterprises = payload;
        draft.loading = false;
        break;
      }

      default:
        return state;
    }
  });
}
