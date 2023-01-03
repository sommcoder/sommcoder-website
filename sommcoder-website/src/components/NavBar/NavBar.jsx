import styled from "styled-components";
import LeftNavItemContainer from "../LeftNavItemContainer/LeftNavItemContainer";
import RightNavItemContainer from "../RightNavItemContainer/RightNavItemContainer";

export default function NavBar() {
  return (
    <StyledNavBar>
      <LeftNavItemContainer />
      <RightNavItemContainer />
    </StyledNavBar>
  );
}
const StyledNavBar = styled.nav`
  position: sticky;
  display: flex;
  border-bottom: 1px solid white;
  padding: 0.5rem;
  max-width: 100%;
  height: 7rem;
`;
