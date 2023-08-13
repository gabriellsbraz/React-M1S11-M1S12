import styled from 'styled-components';

export const FooterStyled = styled.footer`
  width: 100%;
  height: 35px;
  border-top: 1px solid grey;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: 0px;
  position: absolute;
  display:flex;
  justify-content:center;
  align-items: center;
  gap: 30px;
  background: #1A1A1A;
  color: #fbeed3;
  transition: all 0.05;

  h3{
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: #dfcdb4;

    &:hover {
      color: #8257e5;
      transform: scale(1.04);
    }
  }

`