import * as React from 'react'
import { View, LogoWrapper, NavWrapper } from './styled'
import { NavLink } from 'react-router-dom';

export default () => {
  return (
    <View>
      <LogoWrapper>
        <div className="logo">Gao</div>
      </LogoWrapper>
      <NavWrapper>

        <ul>
          <li><NavLink to={`/`}>Index</NavLink></li>
        </ul>
        <aside>

        </aside>

      </NavWrapper>
    </View>
  );
}