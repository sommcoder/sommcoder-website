import styled from "styled-components";
import { ICON_COMPONENTS } from "../../../menus/iconMenu";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { useEffect } from "react";

export default function OverlayNavList({
  refStateObj,
  mobileMenu,
  navLabelArr,
}) {
  const lineRef = useRef(null);

  const iconArr = Object.keys(ICON_COMPONENTS);
  const iconCount = iconArr.length;
  const navCount = navLabelArr.length;

  // the position state of the active link in rem:
  const [currActivePosition, adjustCurrActivePosition] = useState("0");

  // Nav Click Change:
  function handleLinkClick(ev) {
    ev.preventDefault();
    const section = ev.target.dataset.section;
    window.scrollTo({
      top: refStateObj[section].current.offsetTop - 200 || 0,
      left: 0,
      behavior: "smooth",
    });

    adjustCurrActivePosition(() => {
      let index = navLabelArr.findIndex((el) => el === section);
      return index === 0 ? "0" : `${index * 5}`;
    });
  }

  console.log("currActivePosition:", currActivePosition);

  return (
    <StyledOverlayNavList iconCount={iconCount} navCount={navCount}>
      <ul className="overlay-nav-menu">
        <span className="ref-line-track-wrapper">
          <span className="ref-line-track">
            <CSSTransition
              in={mobileMenu === "open"}
              nodeRef={lineRef}
              classNames="line"
              timeout={400} // Match this with your longest animation duration
              onEntering={() => console.log("Entering!")}
              onEntered={() => console.log("Entered!")}
              onExiting={() => console.log("Exiting!")}
              onExited={() => console.log("Exited!")}
              mountOnEnter
              unmountOnExit
            >
              <StyledReferenceLine
                ref={lineRef}
                lineposition={currActivePosition}
              ></StyledReferenceLine>
            </CSSTransition>
          </span>
        </span>
        {navLabelArr.map((label, i) => (
          <StyledOverlayLinkItem
            data-section={label}
            onClick={handleLinkClick}
            key={i}
          >
            {label}
          </StyledOverlayLinkItem>
        ))}
      </ul>
      <ul className="overlay-icon-menu">
        {iconArr.map((title, i) => (
          <li key={i}>
            <a
              className="icon-link"
              target="_blank"
              rel="noopener noreferrer"
              href={ICON_COMPONENTS[title].link}
            >
              {ICON_COMPONENTS[title].component}
            </a>
          </li>
        ))}
      </ul>
    </StyledOverlayNavList>
  );
}
const StyledOverlayNavList = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-rows: auto 27.5rem;
  row-gap: 2rem;

  .overlay-nav-menu {
    align-items: center;
    position: relative;
    justify-items: center;
    display: grid;
    row-gap: 0.5rem;
    width: 100%;
    padding-bottom: 2rem; // hack fix
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.5);
    ${({ navCount }) =>
      navCount &&
      `grid-template-rows: repeat(${navCount}, 4.5rem);
    `}
  }

  .overlay-icon-menu {
    align-items: center;
    justify-items: center;
    display: grid;
    row-gap: 0.5rem;
    width: 100%;
    ${({ iconCount }) =>
      iconCount &&
      `grid-template-rows: repeat(${iconCount}, 1fr);
    `}
  }
  li {
    display: grid;
    justify-content: center;
    align-content: center;
    font-size: 2rem;
    color: black;
    list-style: none;

    &:hover {
      cursor: pointer;
    }
  }
  .icon-link {
    display: grid;
    align-items: center;
    height: 4rem;
    width: 100%;
    min-height: 5rem;
    color: black;
    &:hover {
      cursor: pointer;
    }
  }

  .ref-line-track-wrapper {
    position: absolute;
    display: grid;
    height: 23rem;
    align-items: baseline;
    right: 3%;
    padding-bottom: 2rem; // hack fix. Matches the nav menu
  }

  .ref-line-track {
    position: relative;
    height: 3rem;
    width: 1rem;
    display: block;
  }
`;

const StyledReferenceLine = styled.span`
  position: absolute;
  background-color: black;
  width: 0.3rem;
  left: 25%;
  height: 3rem;
  border-radius: 0.5rem;

  &.line-enter {
    @keyframes line-entering {
      0% {
        height: 1.5rem;
        top: -5rem;
      }
      100% {
        height: 3rem;
        top: ${({ lineposition }) => `${lineposition}rem`};
      }
    }
    animation: line-entering 150ms ease-out;
  }

  &.line-exit {
    @keyframes line-exiting {
      0% {
        height: 3rem;
      }
      100% {
        height: 1.5rem;
        top: -5rem;
      }
    }
    animation: line-exiting 150ms ease-out;
  }

  // controls position transition:
  top: ${({ lineposition }) => `${lineposition}rem`};
  transition: top 400ms ease-in-out;
  animation: none;
`;

const StyledOverlayLinkItem = styled.li`
  justify-self: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 1000;
  font-size: 2.5rem;
`;
