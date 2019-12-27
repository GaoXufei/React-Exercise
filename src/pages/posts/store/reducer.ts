import { CHANGE_POSTS_LIST, CHANGE_POSTS_DETAILS } from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  postList: [],
  postDetails: {},
});

export default (state = defaultState, action: any) => {
  switch (action.type) {
    case CHANGE_POSTS_LIST:
      return state.set('postList', action.data);
    case CHANGE_POSTS_DETAILS:
      return state.set('postDetails', action.data);
    default:
      return state;
  }
}