import { combineReducers } from 'redux';
import user from './user/reducer';
import enterprises from './enterprise/reducer';

export default combineReducers({
  user,
  enterprises,
});
