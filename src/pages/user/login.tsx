import * as React from 'react';
import { View } from './styles'
import RouterTransition from '@/ui/router-transform-user'

const PageLogin = () => {
  return (
    <RouterTransition>
      <View>
        Login
      </View>
    </RouterTransition>
  );
};

export default PageLogin;