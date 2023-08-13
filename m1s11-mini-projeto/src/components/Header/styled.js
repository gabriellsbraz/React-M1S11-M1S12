import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #6b5d4d;

  .logo{
    display: flex;
    align-items: center;
    gap: 10px;
    color: #fbeed3;
    
    &:hover {
      color: #429398;
    }
  }

`

export const NavStyled = styled.nav`
  width: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    font-size: 18px;
    color: #fbeed3;
    
    &:hover {
      color: #429398;
      text-decoration: underline;
    }
  }
`
