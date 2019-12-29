import * as apis from './api-manager';
import axios from './axios';
import { RegisterDto } from '@/interfaces/register.dto';
// 文章列表
const posts = (params?: any) => axios.get(apis.API_POSTS, { params: { ...params } });
// 文章详情
const postDetails = (id: number) => axios.get(`${apis.API_POSTS}/${id}`)


// 用户注册
const userRegister = (data: RegisterDto) => axios.post(`${apis.API_USER}`, { ...data })

export default {
  posts,
  postDetails,
  userRegister
};