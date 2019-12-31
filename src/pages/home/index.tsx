import * as React from 'react';
import { renderRoutes, matchRoutes } from 'react-router-config';
import { View, Main } from './styled'

/**
 * component
 */
import ComponentHeader from '@/components/header';
import ComponentFooter from '@/components/footer'

const PageHome = (props: any) => {
  const { location } = props;
  const { route } = props;
  // 比配react-router-config里的路由配置
  const [_matchRoutes]: any = matchRoutes(route.routes, location.pathname)
  const hideHeader = !_matchRoutes.route.hideHeader;
  const hideFooter = !_matchRoutes.route.hideFooter;

  return (
    <View>
      {hideHeader && <ComponentHeader />}
      <Main>
        {renderRoutes(route.routes)}
      </Main>
      {hideFooter && <ComponentFooter />}
    </View>
  )
}

export default PageHome;