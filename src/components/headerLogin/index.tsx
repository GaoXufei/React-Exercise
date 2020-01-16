import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'antd';

const { Button } = Dropdown;
const { Item } = Menu;

/**
 * 登录状态组件
 * @param param0 用户信息
 */
export const HeaderLoginComponent = ({ userInfo, handleLogout }: any) => {
  return (
    <div>
      <Button overlay={<HeaderMenu handleLogout={handleLogout} />} icon={<Icon type="smile" theme="twoTone" />}>
        <NavLink to={`user`}>{userInfo.username}</NavLink>
      </Button>
    </div>
  )
}

const HeaderMenu = ({ handleLogout }: any) => {
  return (
    <Menu>
      <Item key={`1`} onClick={handleLogout}>
        <Icon type="logout" />
        退出
      </Item>
    </Menu>
  )
}

/**
 * 未登录状态
 */
export const HeaderUnLoginComponent = () => {
  return (
    <ul>
      <li>
        <NavLink to={`/user/login`} activeClassName={`actived`}>注册</NavLink>
      </li>
    </ul>
  )
}