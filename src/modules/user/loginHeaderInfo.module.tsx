import * as React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { actionUserToken, actionLogout } from '@/pages/user/store/actionCreators'
import { HeaderLoginComponent, HeaderUnLoginComponent } from '@/components/headerLogin'

const HeaderLoginInfo = (props: any) => {
  // 获取state
  const { userInfo, isLogin } = props;
  // 获取action
  const { reduxActionUserByToken, reduxLogout } = props;

  React.useEffect(() => {
    isLogin && reduxActionUserByToken()
    // eslint-disable-next-line
  }, [isLogin])

  return (
    <aside>
      {
        // 如果有userInfo数据
        userInfo.username
          ?
          <HeaderLoginComponent handleLogout={reduxLogout} userInfo={userInfo} />
          :
          <HeaderUnLoginComponent />
      }
    </aside>
  )
}

const mapStateToProps = (state: any) => ({
  userInfo: state.getIn(['users', '_userInfo']).toJS(),
  isLogin: state.getIn(['users', 'isLogin'])
})

const mapDispatchProps = (dispatch: Dispatch<any>): any => {
  return {
    reduxActionUserByToken: () => dispatch(actionUserToken()),
    reduxLogout: () => dispatch(actionLogout())
  }
}

export default connect(mapStateToProps, mapDispatchProps)(HeaderLoginInfo);