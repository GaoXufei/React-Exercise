import * as apis from './api-manager';
import axios from './axios';

const posts = (params?: any) => axios.get(apis.API_POSTS, { ...params });
const postDetails = (id: number) => axios.get(`${apis.API_POSTS}/${id}`)

export default {
  posts,
  postDetails
};