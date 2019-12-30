import styled from 'styled-components';

export const LayoutWrapper: any = styled.div`
  width: 1200px;
  margin: auto;
  overflow: ${ (props: any) => props.overflow || 'auto'};
`;