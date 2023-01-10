import styled from "styled-components";
import LeftNavItemContainer from "../LeftNavItemContainer/LeftNavItemContainer";
import RightNavItemContainer from "../RightNavItemContainer/RightNavItemContainer";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };
    window.requestAnimationFrame(handleScroll);
  }, []);

  return (
    <StyledNavBar isScrolling={isScrolling}>
      <LeftNavItemContainer />
      <RightNavItemContainer />
    </StyledNavBar>
  );
}
const StyledNavBar = styled.nav`
  position: sticky;
  /* visibility: ${(props) => (props.isScrolling ? "visible" : "hidden")}; */
  top: 0px;
  z-index: 2;
  overflow-x: clip;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem;
  max-width: 100%;
  height: 6rem;

  background: #324935;
  transition: 0.3s ease-in-out;

  // as the user scrolls we want to create a separation between nav bar and main elements
`;
