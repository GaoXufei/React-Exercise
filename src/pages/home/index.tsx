import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { View } from './styled'

/**
 * component
 */
import ComponentHeader from '@/components/header';


const PageHome = (props: any) => {
  const { route } = props;
  return (
    <View>
      <ComponentHeader />
      <main>
        {renderRoutes(route.routes)}
      </main>
    </View>
  )
}

export default PageHome;