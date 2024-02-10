﻿import styled from "styled-components";
import HeaderLeftContainer from "../HeaderLeftContainer/HeaderLeftContainer";
import HeaderRightContainer from "../HeaderRightContainer/HeaderRightContainer";

export default function HeaderSection() {
  return (
    <StyledHeaderSection>
      <HeaderLeftContainer />
      <HeaderRightContainer />
    </StyledHeaderSection>
  );
}
const StyledHeaderSection = styled.header`
  position: sticky;
  top: 0;
  /* overflow: hidden; */
  z-index: 4;
  height: 6rem;
  min-width: 32rem;
  max-width: 100%; // which is App
  /* visibility: ${(props) => (props.isScrolling ? "visible" : "hidden")}; */
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: linear-gradient(to top right, #324935, #59755d);
  transition: 0.3s ease-in-out;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
`;