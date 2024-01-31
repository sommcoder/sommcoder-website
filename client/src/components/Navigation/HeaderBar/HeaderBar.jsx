import styled from "styled-components";
import HeaderLeftContainer from "../HeaderLeftContainer/HeaderLeftContainer";
import HeaderRightContainer from "../HeaderRightContainer/HeaderRightContainer";
// import { useState, useEffect } from "react";

export default function HeaderBar() {
  // const [isScrolling, setIsScrolling] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolling(window.scrollY > 0);
  //   };
  //   window.requestAnimationFrame(handleScroll);
  // }, []);

  return (
    <StyledHeaderBar>
      <HeaderLeftContainer />
      <HeaderRightContainer />
    </StyledHeaderBar>
  );
}
const StyledHeaderBar = styled.header`
  position: sticky;
  top: 0;
  height: 6rem;
  width: 100%; // which is App
  /* visibility: ${(props) => (props.isScrolling ? "visible" : "hidden")}; */
  z-index: 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: linear-gradient(to top right, #324935, #59755d);
  transition: 0.3s ease-in-out;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);

  // as the user scrolls we want to create a separation between nav bar and main elements
`;
