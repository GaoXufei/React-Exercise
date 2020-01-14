import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { actionUserToken } from '@/pages/user/store/actionCreators'

const HeaderLoginInfo = (props: any) => {
  const { userInfo } = props;
  const { getUserByToken } = props;

  React.useEffect(() => {
    if (!userInfo) {
      getUserByToken()
    }
  }, [])



  return (
    <div></div>
  )
}

const mapStateToProps = (state: any) => ({
  userInfo: state.getIn(['user', '_userInfo'])
})

const mapDispatchProps = (dispatch: Dispatch<any>): any => {
  return {
    getUserByToken: () => dispatch(actionUserToken())
  }
}

export default connect(mapStateToProps, mapDispatchProps)(HeaderLoginInfo);