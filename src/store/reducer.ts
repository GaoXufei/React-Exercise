import { combineReducers } from 'redux-immutable';
import { reducer as PostListReducer } from '@/pages/posts/index-store'

export default combineReducers({
  PostListReducer,
})