import * as React from 'react';
import RegisterComponent from '@/modules/user/register.component';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { userRegister } from './store/actionCreators';
import { RegisterDto } from '@/interfaces/register.dto';
import RouterTransition from '@/ui/router-transform-user'
import { View } from './styles'

const PageRegister = (props: any, result: any) => {
  const { actionRegister } = props;
  function handleSubmit(data: RegisterDto) {
    actionRegister(data)
  }

  return (
    <RouterTransition {...props}>
      <View>
        <RegisterComponent playHandleSubmit={handleSubmit} />
      </View>
    </RouterTransition>
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