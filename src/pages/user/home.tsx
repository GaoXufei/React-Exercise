import * as React from 'react';

import { LayoutWrapper } from '../../layouts/default';

const LoginOrRegister = (props: any) => {
  const isLogin = false;
  if (!isLogin) {
    props.history.push('/user/login')
  }

  return (
    <LayoutWrapper>
      UserHome
      {/* { renderRoutes(props.route) } */}
    </LayoutWrapper>
  );
}

export default LoginOrRegister;