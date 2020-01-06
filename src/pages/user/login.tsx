import * as React from 'react';
import { View, Wrapper } from './styles'
import RouterTransition from '@/ui/router-transform-user'
import LoginModule from '@/modules/user/login.module';
import { LoginDto } from '../../interfaces/login.dto';
import { Dispatch } from 'redux';
import { userLogin } from './store/actionCreators'
import { connect } from 'react-redux';

const PageLogin = (props: any) => {

  const { isLogin } = props;
  const { actionLogin } = props;

  /**
   * 在登录组件中触发提交事件并且将数据传回
   * @param data { username: string, password: string }
   */
  function handleSubmit(data: LoginDto) {
    actionLogin(data)
  }

  React.useEffect(() => {
    // 登录成功重定向到首页
    if (isLogin) {
      props.history.push(`/`)
    }
    // eslint-disable-next-line
  }, [isLogin])

  return (
    <Wrapper>
      <RouterTransition>
        <View>
          <LoginModule playHandleSubmit={handleSubmit} />
        </View>
      </RouterTransition>
    </Wrapper>
  );
};

const mapStateToProps = (state: any) => ({
  isLogin: state.getIn(['users', 'isLogin'])
})

const mapDispatchToProps = (dispatch: Dispatch<any>): any => {
  return {
    actionLogin: (loginMessage: LoginDto) => dispatch(userLogin(loginMessage))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);