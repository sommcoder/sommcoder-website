import styled from "styled-components";

export default function Logo() {
  return <StyledLogo>SOMMCODER</StyledLogo>;
}
const StyledLogo = styled.header`
  font-family: "Major Mono Display", sans-serif;
  font-size: 2.5rem;
  cursor: default;
  padding-left: 4.5rem;

  @media (min-width: 61rem) {
    font-size: 3.5rem;
  }
`;
