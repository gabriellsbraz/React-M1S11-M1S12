import { styled } from "styled-components";

export const Card = styled.div`
  padding: 10px;
  margin: 10px;
  border-radius: 7px;
  background-color: #8257e5;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
`;