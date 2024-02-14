import styled from "styled-components";

import logo from "/logo.svg";

export default function Logo() {
  return (
    <StyledLogo>
      <img src={logo} />
    </StyledLogo>
  );
}
const StyledLogo = styled.header`
  font-family: "Major Mono Display", sans-serif;
  cursor: default;
  padding-left: 2rem;
  display: grid;
  align-items: left;
  justify-items: left;
  width: 100%;
  img {
    width: 19rem;
    @media (min-width: 40rem) {
      width: 21rem;
      padding-left: 4.5rem;
    }
    @media (min-width: 61rem) {
      transform: translateY(-0.25rem); // hack fix
      width: 23rem;
    }
  }
`;
