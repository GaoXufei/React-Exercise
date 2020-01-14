import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { NavLink } from 'react-router-dom';
import { actionUserToken } from '@/pages/user/store/actionCreators'

const HeaderLoginInfo = (props: any) => {
  const { userInfo } = props;
  const { getUserByToken } = props;
  console.log(userInfo)
  React.useEffect(() => {
    if (!userInfo.size && !userInfo) {
      getUserByToken()
    }
    // eslint-disable-next-line
  }, [userInfo])

  return (
    <aside>
      {
        userInfo
          ?
          (<div>{userInfo.username}</div >)
          :
          (
            <ul>
              <li>
                <NavLink to={`/user`} activeClassName={`actived`}>注册</NavLink>
              </li>
            </ul>
          )
      }
    </aside>
  )
}

const mapStateToProps = (state: any) => ({
  userInfo: state.getIn(['users', '_userInfo'])
})

const mapDispatchProps = (dispatch: Dispatch<any>): any => {
  return {
    getUserByToken: () => dispatch(actionUserToken())
  }
}

export default connect(mapStateToProps, mapDispatchProps)(HeaderLoginInfo);