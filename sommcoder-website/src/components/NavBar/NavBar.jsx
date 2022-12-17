import styled from "styled-components";

export default function NavBar() {
  return (
    <StyledNavBar>
      <LeftNavItemContainer />
      <RightNavItemContainer />
    </StyledNavBar>
  );
}
const StyledNavBar = styled.nav`
  /* display: flex; */
  position: sticky;
  border-bottom: 1px solid black;
  width: 100%;
  height: 5rem;
`;
