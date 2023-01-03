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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0.5rem;
  max-width: 100%;
  height: 7rem;
  margin-bottom: 1rem;

  background: #506854;
  box-shadow: 20px 20px 99px #2a362c, -20px -20px 99px #769a7c;
`;
