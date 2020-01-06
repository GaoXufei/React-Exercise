import { CHANGE_USER_REGISTER, CHANGE_USER_LOGIN } from './constants';
import { fromJS } from 'immutable';

const isLogin = Boolean(window.localStorage.getItem('token'));

const defaultState = fromJS({
  userInfo: {},
  isLogin,
})

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_USER_REGISTER:
      return state.set('userInfo', action.data);
    case CHANGE_USER_LOGIN:
      return state.set('isLogin', action.isLogin);
    default:
      return state;
  }
}