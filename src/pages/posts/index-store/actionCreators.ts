import { CHANGE_POSTS_LIST } from './constants';
import { fromJS } from 'immutable';
import API from '@/api/api-request';
import { PostDto } from '../../../interfaces/post.dto';
import { Dispatch } from 'react';

const changePostList = (data: PostDto) => ({
  type: CHANGE_POSTS_LIST,
  data: fromJS(data),
});

/**
 * 获取文章列表
 */
export const getPostList = (params?: any) => {
  return async (dispatch: Dispatch<any>) => {
    const {
      data: { list }
    } = await API.posts(params);
    dispatch(changePostList(list))
  }
};