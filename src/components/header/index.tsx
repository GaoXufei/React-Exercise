import * as React from 'react'
import { View, LogoWrapper, NavWrapper } from './styled'
import { NavLink } from 'react-router-dom';
import ModuleUserInfo from '@/modules/user/loginHeaderInfo.module'

export default () => {
  return (
    <View>
      <LogoWrapper>
        <div className="logo">Gaoxufei</div>
      </LogoWrapper>
      <NavWrapper>
        <nav>
          <ul>
            <li><NavLink to={`/posts`} activeClassName={`actived`}>首页</NavLink></li>
          </ul>
        </nav>

        <ModuleUserInfo />

      </NavWrapper>
    </View>
  );
}