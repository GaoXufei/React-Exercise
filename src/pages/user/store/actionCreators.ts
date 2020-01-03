import { CHANGE_USER_REGISTER, CHANGE_USER_LOGIN } from './constants';
import { RegisterDto } from '@/interfaces/register.dto';
import { Dispatch } from 'redux';
import API from '@/api/api-request';
import { AxiosResponse } from 'axios';
import { message as AntdMessage } from 'antd';
import { LoginDto } from '../../../interfaces/login.dto';

const changeUserRegister = (data: any) => ({
  type: CHANGE_USER_REGISTER,
  data
})

const changeUserLogin = (data: any) => ({
  type: CHANGE_USER_LOGIN,
  data
})

export const userRegister = (registerMessage: RegisterDto) => {
  return async (dispatch: Dispatch<any>) => {
    const { data }: AxiosResponse<any> = await API.userRegister(registerMessage)
    if (data.statusCode === 400) {
      return AntdMessage.error(data.message);
    }
    dispatch(changeUserRegister(data))
  }
}

export const userLogin = (loginMessage: LoginDto) => {
  return async (dispatch: Dispatch<any>) => {
    const { data }: AxiosResponse<any> = await API.userLogin(loginMessage);
    dispatch(changeUserLogin(data));
  }
}