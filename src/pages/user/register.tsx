import * as React from 'react';
import RegisterModule from '@/modules/user/register.module';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { userRegister } from './store/actionCreators';
import { RegisterDto } from '@/interfaces/register.dto';
import RouterTransition from '@/ui/router-transform-user'
import { View, Wrapper } from './styles'

const PageRegister = (props: any, result: any) => {
  const { actionRegister } = props;
  function handleSubmit(data: RegisterDto) {
    actionRegister(data)
  }

  return (
    <Wrapper>
      <RouterTransition {...props}>
        <View>
          <RegisterModule playHandleSubmit={handleSubmit} />
        </View>
      </RouterTransition>
    </Wrapper>
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