import styled from "styled-components";

export default function Logo() {
  return <StyledLogo>SOMMCODER</StyledLogo>;
}
const StyledLogo = styled.header`
  justify-content: center;
  font-family: "Major Mono Display", sans-serif;
  font-size: 2.5rem;
  cursor: default;

  @media (min-width: 610px) {
    font-size: 3.5rem;
  }
`;
