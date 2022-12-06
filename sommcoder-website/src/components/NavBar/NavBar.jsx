import styled from "styled-components";

export default function NavBar() {
  return (
    <StyledNavBar>
      <LeftNavItemContainer />
      <RightNavItemContainer />
    </StyledNavBar>
  );
}
const StyledNavBar = styled.nav``;
