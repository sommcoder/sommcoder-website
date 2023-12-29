import styled from "styled-components";
import Header from "../Header/Header";
import { useRef } from "react";

export default function NavLeftContainer() {
  const headerRef = useRef();
  return (
    <StyledNavLeftContainer
      ref={headerRef}
      onClick={() =>
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <Header />
    </StyledNavLeftContainer>
  );
}
const StyledNavLeftContainer = styled.span`
  display: grid;
  margin: auto;
  justify-content: left;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
