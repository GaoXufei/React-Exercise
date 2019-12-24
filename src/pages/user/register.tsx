import * as React from 'react';
import { LayoutWrapper } from '@/layouts/default';
import RegisterComponent from '@/modules/user/register.component';

export default () => {
  return (
    <LayoutWrapper>
      <RegisterComponent />
    </LayoutWrapper>
  );
}