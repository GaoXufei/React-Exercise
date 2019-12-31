import styled, { css } from 'styled-components';

const vertivalMixin = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const LayoutWrapper: any = styled.div`
  width: 1200px;
  min-height: 100%;
  margin: auto;
  overflow: ${ (props: any) => props.overflow || 'visible'};
  ${ (props: any) => props.vertical ? vertivalMixin : null};
`;