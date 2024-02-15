import styled from "styled-components";

export default function HamburgerMenu({ toggleMobileMenu, mobileMenu }) {
  function handleMenuClick() {
    console.log("menu click");
    toggleMobileMenu((prevState) => !prevState);
  }

  return (
    <StyledHamburgerMenu onClick={handleMenuClick} toggleMobileMenu>
      <span></span>
      <span></span>
      <span></span>
    </StyledHamburgerMenu>
  );
}
const StyledHamburgerMenu = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3rem;
  margin-right: 2rem;
  height: 2.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;

  &:hover {
    filter: brightness(85%);
  }

  ${({ toggleMobileMenu }) =>
    toggleMobileMenu
      ? `
  position: absolute;
  `
      : ``};

  span {
    height: 0.3rem;
    background-color: white;
    border-radius: 0.5rem;
    width: 3rem;
  }

  // 800px
  @media (min-width: 50rem) {
    // hamburger menu disappears at Tablet+
    // and the Download Button and Sidebar Appear
    display: none;
  }
`;
