import { combineReducers } from 'redux-immutable';
import { reducer as PostReducer } from '@/pages/posts/store'
import { reducer as UserReducer } from '@/pages/user/store'

export default combineReducers({
  posts: PostReducer,
  users: UserReducer,
})