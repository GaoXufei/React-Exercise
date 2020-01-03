import * as React from 'react';
import { View, Wrapper } from './styles'
import RouterTransition from '@/ui/router-transform-user'
import LoginModule from '@/modules/user/login.module';
import { LoginDto } from '../../interfaces/login.dto';

const PageLogin = () => {

  function handleSubmit(data: LoginDto) {
    console.log(data);
  }

  return (
    <Wrapper>
      <RouterTransition>
        <View>
          <LoginModule playHandleSubmit={handleSubmit} />
        </View>
      </RouterTransition>
    </Wrapper>
  );
};

export default PageLogin;