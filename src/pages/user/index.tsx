import * as React from "react";
import { renderRoutes } from 'react-router-config';
import { LayoutWrapper } from "../../layouts/default";
import { Link } from 'react-router-dom';

const PageUser = (props: any) => {

  return (
    <LayoutWrapper overflow={`hidden`}>
      <div>
        <Link to={{ pathname: `/user/register` }}>注册</Link>
        <Link to={{ pathname: `/user/login` }}>登录</Link>
      </div>
      {renderRoutes(props.route.routes)}
    </LayoutWrapper>
  );
};

export default PageUser;
