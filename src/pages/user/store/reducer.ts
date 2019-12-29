import { CHANGE_USER_REGISTER } from './constants';
import { fromJS } from 'immutable';


const defaultState = fromJS({
  userInfo: {},
})

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_USER_REGISTER:
      return state.set('userInfo', action.data);
    default:
      return state;
  }
}