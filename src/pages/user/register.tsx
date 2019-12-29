import * as React from 'react';
import { LayoutWrapper } from '@/layouts/default';
import RegisterComponent from '@/modules/user/register.component';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { userRegister } from './store/actionCreators';
import { RegisterDto } from '@/interfaces/register.dto';

const PageRegister = (props: any) => {
  const { userInfo } = props;
  const { actionRegister } = props;
  function handleSubmit(data: RegisterDto) {
    actionRegister(data)
  }

  return (
    <LayoutWrapper>
      <RegisterComponent playHandleSubmit={handleSubmit} />
    </LayoutWrapper>
  );
}

const mapStateToProps = (state: any) => ({
  userInfo: state.getIn(['users', 'userInfo'])
})

const mapDispatchToProps = (dispatch: Dispatch<any>): any => {
  return {
    actionRegister: (data: RegisterDto) => dispatch(userRegister(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRegister)