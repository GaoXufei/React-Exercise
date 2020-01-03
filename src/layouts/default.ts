import styled, { css } from 'styled-components';

const paddingMixin = css`
  padding: 40px 0;
`;

export const LayoutWrapper: any = styled.div`
  width: 1200px;
  min-height: 100%;
  margin: auto;
  word-break: break-word;
  overflow: ${ (props: any) => props.overflow || 'visible'};
  ${ (props: any) => props.padding ? paddingMixin : null};
  margin: ${ (props: any) => props.centerMargin ? '0 auto' : 'auto'};
`;