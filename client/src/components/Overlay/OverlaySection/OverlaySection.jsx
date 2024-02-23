import styled from "styled-components";
import OverlayNavList from "../OverlayNavList/OverlayNavList";
import { useRef } from "react";
import { useEffect } from "react";

export default function OverlaySection({
  refStateObj,
  mobileMenu,
  toggleMobileMenu,
  navLabelArr,
  headerAnimation,
  toggleHeaderAnimation,
  overlayAnimation,
  toggleOverlayAnimation,
}) {
  const overlayRef = useRef();

  useEffect(() => {
    overlayRef.current.focus();
    const handleClickOutside = (ev) => {
      if (overlayRef.current && !overlayRef.current.contains(ev.target)) {
        // if NOT hamburger menu and it's children
        if (
          ev.target.dataset.component !== "mobile-menu" &&
          mobileMenu === "open"
        )
          toggleMobileMenu("closed");
      }
    };
    // TODO: mousedown may work differently across mobile browsers. may need to use touch events instead
    document.addEventListener("mousedown", handleClickOutside);

    // unsubscribe/cleanup:
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  return (
    <StyledOverlaySection mobileMenu={mobileMenu} ref={overlayRef}>
      <OverlayNavList
        refStateObj={refStateObj}
        mobileMenu={mobileMenu}
        toggleMobileMenu={toggleMobileMenu}
        navLabelArr={navLabelArr}
        headerAnimation={headerAnimation}
        toggleHeaderAnimation={toggleHeaderAnimation}
        overlayAnimation={overlayAnimation}
        toggleOverlayAnimation={toggleOverlayAnimation}
      />
    </StyledOverlaySection>
  );
}

const StyledOverlaySection = styled.nav`
  z-index: 8;
  position: fixed;
  background-color: rgba(212, 198, 228, 0.95);
  height: 100%;
  width: 20rem;
  right: ${({ mobileMenu }) =>
    mobileMenu === "init" || mobileMenu === "closed" ? "-20rem" : "0rem"};
  transition: all 500ms ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  padding-top: 8rem;

  // overlay section needs to close automatically if the screen width is too large
  @media (min-width: 50rem) {
    display: none;
    gap: 1.75rem;
  }
`;
