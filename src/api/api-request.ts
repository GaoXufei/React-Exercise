import * as apis from './api-manager';
import axios from './axios';
// import authAxios from './axios_auth' // 需要权限的api
import { RegisterDto } from '@/interfaces/register.dto';
import { LoginDto } from '../interfaces/login.dto';
// 文章列表
const posts = (params?: any) => axios.get(apis.API_POSTS, { params: { ...params } });
// 文章详情
const postDetails = (id: number) => axios.get(`${apis.API_POSTS}/${id}`)


// 用户注册
const userRegister = (data: RegisterDto) => axios.post(`${apis.API_USER}`, { ...data })
const userLogin = (data: LoginDto) => axios.post(`${apis.API_AUTH}/login`, { ...data })

export default {
  posts,
  postDetails,
  userRegister,
  userLogin
};