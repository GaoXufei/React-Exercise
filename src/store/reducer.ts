import { combineReducers } from 'redux-immutable';
import { reducer as PostListReducer } from '@/pages/posts/store'

export default combineReducers({
  posts: PostListReducer,
})