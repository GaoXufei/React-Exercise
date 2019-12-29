import { CHANGE_USER_REGISTER } from './constants';
import { RegisterDto } from '@/interfaces/register.dto';
import { Dispatch } from 'redux';
import API from '@/api/api-request';

const changeUserRegister = (data: any) => ({
  type: CHANGE_USER_REGISTER,
  data
})

export const userRegister = (registerMessage: RegisterDto) => {
  return async (dispatch: Dispatch<any>) => {
    const data = await API.userRegister(registerMessage)
    console.log(data);
    // dispatch(changeUserRegister(data))
  }
}