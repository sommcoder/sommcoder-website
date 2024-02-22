import styled from "styled-components";
import { ICON_COMPONENTS } from "../../../menus/iconMenu";
import { useState, useEffect, useRef } from "react";

export default function OverlayNavList({
  refStateObj,
  mobileMenu,
  toggleMobileMenu,
  navLabelArr,
  menuAnimation,
  toggleMenuAnimation,
}) {
  // TODO: when mobileMenu goes false, we need to ensure that the currActive link

  const [isAnimating, setIsAnimating] = useState(false);
  const lineRef = useRef();
  function handleLinkClick(ev) {
    ev.preventDefault();
    const section = ev.target.dataset.section;

    window.scrollTo({
      top: refStateObj[section].current.offsetTop - 200 || 0, // needs to be minus cause this offsetTop is the pixel distance FROM the top
      left: 0,
      behavior: "smooth",
    });

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 250);

    adjustCurrActiveLink(section); // record the new currentPosition
  }

  // tracks the active state, the reference line will need to know where to go. The distance will be fixed. This won't change with the screen width.
  const iconArr = Object.keys(ICON_COMPONENTS);
  const iconCount = iconArr.length;
  const navCount = navLabelArr.length;

  // interval: 6rem. just multiply
  const [currActiveLink, adjustCurrActiveLink] = useState("main");

  const position = navLabelArr.findIndex((el) => el === currActiveLink);
  console.log("active:", position);
  console.log("position:", position === 0 ? 0 : position * 5, "rem");

  useEffect(() => {
    // if mobileMenu state changes, revert back to main
    adjustCurrActiveLink("main");

    // have line element make its entrance from top
    // TODO: should maybe distinguish between enter and exit with a conditional statement here
    lineRef.current.classList.add("line-enter");
  }, [mobileMenu]);

  return (
    <StyledOverlayNavList
      iconCount={iconCount}
      navCount={navCount}
      currActiveLink={currActiveLink}
    >
      <ul className="overlay-nav-menu">
        <span className="ref-line-track-wrapper">
          <span className="ref-line-track">
            <StyledReferenceLine
              ref={lineRef}
              className={isAnimating ? "animate" : ""}
              // want these values to be strings so they're always positive
              position={position === 0 ? "0" : `${position * 5}`}
            ></StyledReferenceLine>
          </span>
        </span>
        {navLabelArr.map((label, i) => (
          <StyledOverlayLinkItem
            data-section={label}
            data-sequence={i} // should be fine mathematically to keep this as a 0 index
            data-indexfromcurrent={
              i - navLabelArr.findIndex((el) => el === currActiveLink)
            }
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
    // track houses the reference line
    // track allows the reference to have a consistent baseline
    position: relative;
    height: 3rem;
    width: 1rem;
    display: block;
    /* border: 1px solid black; */
  }
`;

const StyledReferenceLine = styled.span`
  position: absolute;
  /* transform: rotate(180deg); */
  background-color: black;
  width: 0.3rem;
  left: 25%;
  height: 3rem;
  ${({ position }) =>
    position &&
    `
  top: ${position}rem;
  @keyframes line-shrink {
    0% {
      height: 3rem;
    }
    50% {
      height: .25rem;
    }
    100% {
      height: 1rem;
    }
  }
  `};

  &.animate {
    animation: line-shrink 800ms ease-in-out;
  }
  transition: top 500ms ease-in-out;
  border-radius: 0.5rem;
`;

const StyledOverlayLinkItem = styled.li`
  justify-self: center;
  font-weight: 800;
  font-size: 2.2rem;
`;

/* transform: translateY(-11.5rem); // 0
  transform: translateY(-6.5rem); // 1
  transform: translateY(-1.5rem); // 2
  transform: translateY(4.5rem); // 3
  transform: translateY(9.5rem); // 4 */

/*
   
    @keyframes line-movement {
      0% {
        height: 1.5rem;         
      }
      50% {
        height: 1.5rem;
      }
      100% {
        height: 3rem;
        top: ${position}rem;
      }
  }

    animation: line-movement 500ms forwards;
   
  */
