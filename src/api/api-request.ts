import * as apis from './api-manager';
import axios from './axios';

const posts = () => axios.get(apis.API_POSTS);

export default {
  posts,
};