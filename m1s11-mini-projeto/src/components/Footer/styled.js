import styled from 'styled-components';

export const FooterStyled = styled.footer`
  color: #fbeed3;
  background: #6b5d4d;
  width: 100%;
  height: 50px;
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

  h3{
    font-size: 12px;
  }

  a {
    text-decoration: none;
    transition: all 0.05;
    color: #fbeed3;

    &:hover {
      color: #429398;
    }
  }

`