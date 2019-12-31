import * as React from "react";
import { renderRoutes } from 'react-router-config';
import { LayoutWrapper } from "../../layouts/default";

const PageUser = (props: any) => {

  return (
    <LayoutWrapper vertical={true}>
      {renderRoutes(props.route.routes)}
    </LayoutWrapper>
  );
};

export default PageUser;
