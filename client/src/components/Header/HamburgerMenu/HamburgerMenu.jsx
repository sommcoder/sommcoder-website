import styled, { keyframes } from "styled-components";

// TODO: need to add an aria-label for all anchor tags and li
export default function HamburgerMenu({
  mobileMenu,
  toggleMobileMenu,
  headerAnimation,
  toggleHeaderAnimation,
  overlayAnimation,
  toggleOverlayAnimation,
}) {
  function handleMenuClick() {
    console.log("hamburger menu click");
    // why do we need both of these???
    toggleOverlayAnimation((prevState) => !prevState);

    // needed an init state so that the animation doesn't trigger onLoad()
    if (mobileMenu === "init") {
      toggleMobileMenu("open");
    } else {
      mobileMenu === "open"
        ? toggleMobileMenu("closed")
        : toggleMobileMenu("open");
    }
  }

  function handleAnimationEnd() {
    console.log("animation end triggered");
    // header animation true = hamburger menu has completed it's animation
    // meaning the reference line should now ENTER the OverlaySection
    if (mobileMenu === "open") {
      // this is trigger AFTER animation complete
      toggleHeaderAnimation(true);
    }
  }

  return (
    <StyledHamburgerMenu
      data-component="mobile-menu"
      mobileMenu={mobileMenu}
      onClick={handleMenuClick}
      onAnimationEnd={handleAnimationEnd}
    >
      <span data-component="mobile-menu" className="top-line"></span>
      <span data-component="mobile-menu" className="middle-line-container">
        <span data-component="mobile-menu" className="middle-line"></span>
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

  // if true start animation, if false, reverse animation
  // ! problem is that this is triggering initially. We could change the state from boolean to some String states like "init", "open", "close"
  ${({ mobileMenu }) => {
    if (mobileMenu === "open") {
      return `
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
       height: 1.5rem;
       display: block;
     }
     100% {
       width: 0.3rem;
       z-index: 5;
       height: 1.5rem;
       transform: translate(3.7rem, 4.5rem);
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
   `;
    } else if (mobileMenu === "closed") {
      return `
       .middle-line {
    @keyframes middle-line-return-animation {
      0% {
        width: 0.3rem;
        height: 2rem;
        transform: translate(3.7rem, 1.5rem);
        background-color: black;
        transition: background-color 1ms linear 500ms;
        display: none;
      }
      25% {
        width: 0.3rem;
        height: 1.5rem;
        display: block;
      }
      50% {
        width: 0.3rem;
        height: 1.5rem;
        transform: translate(3.7rem, 0rem);
        background-color: white;
      }
      75% {
        width: 0.75rem;
        height: 0.3rem;
        transform: translate(3.7rem, 0rem);
      }
      100% {
        width: 3rem;
        height: 0.3rem;
        transform: translate(0rem, 0rem);
      }
    }
    animation: middle-line-return-animation 1000ms forwards;
  }
  `;
    } else {
      ``;
    }
  }}

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
