import styled from 'styled-components';

export const View = styled.div`
  width: 400px;
  background: rgba(255,255,255,.3);
  padding: 30px 20px 10px 20px;
  position: relative;
  background-attachment: fixed;
  backdrop-filter: blur(20px);
  box-shadow: 10px 10px 10px rgba(0,0,0,0.1);
  border-radius: 5px;

  &::before {
    content: '';
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    z-index: -1;
  }

  .ant-input{
    background: transparent!important;
    border: none;
    border-bottom:1px solid #fff;
    border-radius: 0;
    outline: none;

    &::placeholder{
      color: #f1f1f1;
    }
  }

  .ant-input-affix-wrapper .ant-input:focus {
    border: none;
    border-bottom: 1px solid white !important;
    box-shadow: none;
  }

`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${ require("@/assets/images/login_background.jpg")});
  display: flex;
  align-items: center;
  justify-content: center;
`;