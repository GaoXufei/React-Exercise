import { CHANGE_USER_REGISTER, CHANGE_USER_LOGIN, CHANGE_USER_TOKEN } from './constants';
import { fromJS } from 'immutable';

const isLogin = Boolean(window.localStorage.getItem('token'));

const defaultState = fromJS({
  userInfo: {},
  isLogin,
  _userInfo: {}
})

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_USER_REGISTER:
      return state.set('userInfo', action.data);
    case CHANGE_USER_LOGIN:
      return state.set('isLogin', action.isLogin);
    case CHANGE_USER_TOKEN:
      return state.set('_userInfo', action.data)
    default:
      return state;
  }
}