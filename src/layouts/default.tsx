import styled from 'styled-components';

export const LayoutWrapper: any = styled.div`
  width: 1200px;
  min-height: 100%;
  margin: auto;
  overflow: ${ (props: any) => props.overflow || 'auto'};
`;