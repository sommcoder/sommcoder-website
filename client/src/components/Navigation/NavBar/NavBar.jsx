import styled from "styled-components";
import NavLeftContainer from "../NavLeftContainer/NavLeftContainer";
import NavRightContainer from "../NavRightContainer/NavRightContainer";
// import { useState, useEffect } from "react";

export default function NavBar() {
  // const [isScrolling, setIsScrolling] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolling(window.scrollY > 0);
  //   };
  //   window.requestAnimationFrame(handleScroll);
  // }, []);

  return (
    <StyledNavBar>
      <NavLeftContainer />
      <NavRightContainer />
    </StyledNavBar>
  );
}
const StyledNavBar = styled.nav`
  position: sticky;
  top: 0;
  /* visibility: ${(props) => (props.isScrolling ? "visible" : "hidden")}; */
  z-index: 4;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem 3rem 0.5rem 3rem;
  height: 6rem;
  background-image: linear-gradient(to top right, #324935, #59755d);
  /* background-color: #324935; */
  transition: 0.3s ease-in-out;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);

  // as the user scrolls we want to create a separation between nav bar and main elements
`;
