import { CHANGE_USER_REGISTER, CHANGE_USER_LOGIN, CHANGE_USER_TOKEN } from './constants';
import { RegisterDto } from '@/interfaces/register.dto';
import { Dispatch } from 'redux';
import API from '@/api/api-request';
import { AxiosResponse } from 'axios';
import { message as AntdMessage } from 'antd';
import { LoginDto } from '../../../interfaces/login.dto';
import { fromJS } from 'immutable';

const changeUserRegister = (data: any) => ({
  type: CHANGE_USER_REGISTER,
  data
})

const changeUserLogin = (isLogin: boolean) => ({
  type: CHANGE_USER_LOGIN,
  isLogin
})

const changeUserToken = (data: any) => ({
  type: CHANGE_USER_TOKEN,
  data: fromJS(data)
})

/**
 * 注册
 * @param registerMessage 注册信息
 */
export const userRegister = (registerMessage: RegisterDto) => {
  return async (dispatch: Dispatch<any>) => {
    const { data }: AxiosResponse<any> = await API.userRegister(registerMessage);
    // 分支判断statusCode
    switch (data.statusCode) {
      case 400:
        return AntdMessage.error(data.message);
    }

    dispatch(changeUserRegister(data))
  }
}

/**
 * 登录
 * @param loginMessage 登录信息
 */
export const userLogin = (loginMessage: LoginDto) => {
  return async (dispatch: Dispatch<any>) => {
    // 请求接口
    const { data }: AxiosResponse<any> = await API.userLogin(loginMessage);
    // 分支判断statusCode
    switch (data.statusCode) {
      case 400:
        return AntdMessage.error(data.message);
      case 404:
        return AntdMessage.error(data.message);
      case 200:
        AntdMessage.success(data.message);
        dispatch(changeUserLogin(true));
    }
    window.localStorage.setItem(`token`, data.userInfo.token);
  }
}

/**
 * 根据token获取用户数据
 */
export const actionUserToken = () => {
  return async (dispatch: Dispatch<any>) => {
    const { data }: AxiosResponse<any> = await API.userToken();
    // 分支判断statusCode
    switch (data.statusCode) {
      case 401:
        window.localStorage.removeItem(`token`);
        break;
    }
    // dispatch
    dispatch(changeUserToken(data));
  }
}

/**
 * 退出登录
 */
export const actionLogout = () => {
  return async (dispatch: Dispatch<any>) => {
    // 清空localStorage
    window.localStorage.removeItem(`token`)
    // 重置登录状态
    dispatch(changeUserLogin(false))
    // 清空用户信息
    dispatch(changeUserToken({}));
    // 全局提示
    AntdMessage.warning('登出成功')
  }
}