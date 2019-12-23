import styled from 'styled-components';

export const View = styled.header`
  display: flex;
  align-items: center;
  padding:0 50px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
  margin-top: -76px;
`;

export const LogoWrapper = styled.div`
  font-size: 52px;
  font-weight: 700;
  text-transform: uppercase;
  font-family: -webkit-pictograph;
`;

export const NavWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & nav ul{
    display: flex;
    align-items: center;
    padding-left: 20px;

    & li{

      & a{
        display: block;
        padding: 30px 20px;
        color: #000;

        &.actived {
          background: #000;
          color: #fff;
          box-shadow: 10px 10px 10px rgba(0,0,0,.5);
          transition: all .5s;
        }
      }
    }
  }

  & aside ul{
    display: flex;
    align-items: center;

    & li{
      & a{
        display: block;
        padding: 20px;
      }
    }
  }
`;