import styled from "styled-components";

import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import logo from "/SOMMCODER-logo.svg";
import logoNoSubtitle from "/SOMMCODER-logo-no-subtitle.svg";

import ResumeBtn from "../ResumeBtn/ResumeBtn";

import { useEffect, useState } from "react";

import { ICON_COMPONENTS } from "../../../menus/iconMenu";

export default function HeaderSection({
  navLabelArr,
  mobileMenu,
  toggleMobileMenu,
  headerAnimation,
  toggleHeaderAnimation,
  overlayAnimation,
  toggleOverlayAnimation,
}) {
  const [screenWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup
    };
  }, []);
  return (
    <StyledHeaderSection>
      <StyledHeaderLeftContainer
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }
      >
        <StyledLogo>
          <img src={screenWidth < 480 ? logoNoSubtitle : logo} />
        </StyledLogo>
      </StyledHeaderLeftContainer>
      <StyledHeaderRightContainer>
        <span className="header-icon-container">
          {Object.keys(ICON_COMPONENTS).map((name, i) => (
            <StyledNavIconBox
              key={i}
              target="_blank"
              href={ICON_COMPONENTS[name].link}
            >
              {ICON_COMPONENTS[name].component}
            </StyledNavIconBox>
          ))}
        </span>
        <ResumeBtn />

        <HamburgerMenu
          navLabelArr={navLabelArr}
          mobileMenu={mobileMenu}
          toggleMobileMenu={toggleMobileMenu}
          headerAnimation={headerAnimation}
          toggleHeaderAnimation={toggleHeaderAnimation}
          overlayAnimation={overlayAnimation}
          toggleOverlayAnimation={toggleOverlayAnimation}
        />
      </StyledHeaderRightContainer>
    </StyledHeaderSection>
  );
}
const StyledHeaderSection = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  overflow-y: hidden;
  height: 6rem;
  min-width: 32rem;
  max-width: 100%; // which is App
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-image: linear-gradient(to top right, #324935, #59755d);
  transition: 0.3s ease-in-out;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
`;

const StyledHeaderLeftContainer = styled.span`
  display: flex;
  align-items: center;
  justify-items: left;
  flex-wrap: nowrap;
  justify-content: left;
  width: 100%;
`;

const StyledHeaderRightContainer = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: right;
  gap: 1.75rem;
  .header-icon-container {
    display: none;
    @media (min-width: 50rem) {
      display: flex;
      gap: 1.75rem;
      /* border: 1px solid lightgrey;
      border-radius: 2rem; */
      padding: 0.5rem 1.75rem;
    }
  }
`;

const StyledLogo = styled.header`
  font-family: "Major Mono Display", sans-serif;
  cursor: default;
  padding-left: 2rem;
  display: grid;
  align-items: left;
  justify-items: left;
  width: 100%;
  img {
    width: 22rem;
    @media (min-width: 30rem) {
      padding-left: 2.5rem;
    }
  }
`;

const StyledNavIconBox = styled.a`
  display: none;

  @media (min-width: 600px) {
    display: grid;
    height: 4rem;
    width: fit-content;
    justify-items: center;
    align-items: center;

    /* &:hover {
      cursor: pointer;
      filter: brightness(75%);
    } */
  }
`;
