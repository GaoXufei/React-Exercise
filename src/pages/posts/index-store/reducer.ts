import { CHANGE_POSTS_LIST } from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  postList: [],
});

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_POSTS_LIST:
      return state.set('postList', action.data);
    default:
      return state;
  }
}