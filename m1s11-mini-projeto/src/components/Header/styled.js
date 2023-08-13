import styled from 'styled-components';

export const HeaderStyled = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #1A1A1A;
  color: #fbeed3;

  .logo{
    color: #fbeed3;
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    transition: all 0.5s;
    text-decoration: none;

    &:hover {
      color: #8257e5;
      transform: scale(1.03);
    }

    h2 {
      font-size: 18px;
      font-style: italic;
      margin-left: 15px;
      letter-spacing: 5px;
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
    font-size: 14px;
    color: #fbeed3;
    transition: all 0.5s;

    
    &:hover {
      color: #8257e5;
      transform: scale(1.04);
    }
  }
`
