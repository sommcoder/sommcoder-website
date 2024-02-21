import styled, { keyframes } from "styled-components";

// TODO: need to add an aria-label for all anchor tags and li
export default function HamburgerMenu({
  toggleMobileMenu,
  mobileMenu,
  menuAnimation,
  toggleMenuAnimation,
}) {
  function handleMenuClick() {
    console.log("menu click");
    toggleMobileMenu((prevState) => !prevState);
  }

  function handleAnimationEnd() {
    // Going to then reenable pointer-events on the hamburgerMenu
  }

  return (
    <StyledHamburgerMenu
      data-component="mobile-menu"
      onClick={handleMenuClick}
      mobileMenu={mobileMenu}
    >
      <span data-component="mobile-menu" className="top-line"></span>
      <span data-component="mobile-menu" className="middle-line-container">
        <span
          data-component="mobile-menu"
          className="middle-line"
          onAnimationEnd={handleAnimationEnd}
        ></span>
      </span>
      <span data-component="mobile-menu" className="bottom-line"></span>
    </StyledHamburgerMenu>
  );
}

const StyledHamburgerMenu = styled.span`
  display: flex;
  z-index: 10;
  position: absolute;
  top: 30%;
  right: 0;
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

  ${({ mobileMenu }) =>
    mobileMenu &&
    `
      .top-line {
        transform: rotate(45deg) translateY(0.65rem) translateX(0.5rem);
      }
        .middle-line {
    @keyframes middle-line-animation {
      0% {
        width: 1.5rem;
        height: 0.3rem;
        transform: translate(1rem, 0rem);
      }
      25% {
        width: 0.75rem;
        height: 0.3rem;
        transform: translate(3.7rem, 0rem);
      }
      50% {
        width: 0.3rem;
        height: 1.5rem;
        transform: translate(3.7rem, 0rem);
        background-color: white;
      }
      75% {
        width: 0.3rem;
        height: 2rem;
        display: block;
      }
      100% {
        width: 0.3rem;
        height: 2.5rem;
        transform: translate(3.7rem, 3.5rem);
        background-color: black;
        transition: background-color 1ms linear 500ms;
        display: none;
      }
    }
    animation: middle-line-animation 1000ms forwards;
  }
      .bottom-line {
        transform: rotate(-45deg) translateY(-0.65rem) translateX(0.5rem);
      }
    `}

  span {
    height: 0.3rem;
    background-color: white;
    border-radius: 0.5rem;
    width: 3rem;
    transition: all 200ms linear;
  }
  .middle-line {
    position: absolute;
  }
  .middle-line-container {
    background-color: transparent;
  }

  // 800px
  @media (min-width: 50rem) {
    // hamburger menu disappears at Tablet+
    // and the Download Button and Sidebar Appear
    display: none;
  }
`;

/*
 

 
*/
