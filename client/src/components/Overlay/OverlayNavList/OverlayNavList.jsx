import styled from 'styled-components';
import { ICON_COMPONENTS } from '../../../menus/iconMenu';
import { useState, useEffect, useRef } from 'react';

export default function OverlayNavList({
  refStateObj,
  mobileMenu,
  toggleMobileMenu,
  navLabelArr,
  headerAnimation,
  toggleHeaderAnimation,
  overlayAnimation,
  toggleOverlayAnimation,
}) {
  const [isAnimating, setIsAnimating] = useState(false);

  const lineRef = useRef();

  // Nav Click Change:
  function handleLinkClick(ev) {
    ev.preventDefault();
    const section = ev.target.dataset.section;
    window.scrollTo({
      top: refStateObj[section].current.offsetTop - 200 || 0,
      left: 0,
      behavior: 'smooth',
    });
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 250);
    adjustPrevActiveLink(currActiveLink); // record prev
    adjustCurrActiveLink(section); // record the new currentPosition
  }

  function handleLineAnimationEnd(ev) {
    console.log('ev:', ev);
    console.log('ev.animationName:', ev.animationName);

    // do nothing:
    if (ev.animationName === 'line-shrink') return;
    // this will trigger on EACH and EVERY animation end. Every nav movement and the enter and exit animations
    // add class to line. it can not be moved based on the position variable:
    // did it enter or exit?
    // if (headerAnimation && mobileMenu === "open") {
    //   // if true, turn off and add class
    //   console.log("header animation now FALSE, line entered class applied");
    if (ev.animationName === 'line-entering') {
      // reset the HeaderAnimation state
      toggleHeaderAnimation(false);
    }
    if (ev.animationName === 'line-exiting') {
      // trigger the OverlayAnimation state
      toggleOverlayAnimation(true);
    }
    //   lineRef.current.classList.add("line-entered");
    // }
  }

  const iconArr = Object.keys(ICON_COMPONENTS);
  const iconCount = iconArr.length;
  const navCount = navLabelArr.length;

  const [currActiveLink, adjustCurrActiveLink] = useState('main');
  const [prevActiveLink, adjustPrevActiveLink] = useState(null);

  const newposition = navLabelArr.findIndex(el => el === currActiveLink);
  const prevPosition = navLabelArr.findIndex(el => el === prevActiveLink);
  console.log('active:', newposition);
  console.log('newposition:', newposition === 0 ? 0 : newposition * 5, 'rem');

  // menu state changes, adjust to main
  useEffect(() => {
    if (mobileMenu === 'open') {
      adjustPrevActiveLink(currActiveLink);
      adjustCurrActiveLink('main');
    }
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
              enteranimation={mobileMenu === 'open' ? true : false}
              exitanimation={
                mobileMenu === 'closed' && !headerAnimation ? true : false
              }
              onAnimationEnd={handleLineAnimationEnd}
              className={`${isAnimating ? 'animate' : ''} 
              `}
              // want these values to be strings so they're always positive and animatable
              lineposition={newposition === 0 ? '0' : `${newposition * 5}`}
              distance={
                (newposition <= prevPosition
                  ? newposition / prevPosition
                  : prevPosition / newposition) + 0.6
              }
            ></StyledReferenceLine>
          </span>
        </span>
        {navLabelArr.map((label, i) => (
          <StyledOverlayLinkItem
            data-section={label}
            data-sequence={i} // should be fine mathematically to keep this as a 0 index
            data-indexfromcurrent={
              i - navLabelArr.findIndex(el => el === currActiveLink)
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
  background-color: black;
  width: 0.3rem;
  left: 25%;
  height: 3rem;
  transition: top 500ms ease-in-out;
  border-radius: 0.5rem;

  ${({ enteranimation }) =>
    enteranimation &&
    `
      @keyframes line-entering {
      0% {
        
        height: 2rem;
        top: -4rem;
      }
      50% {
       top: -2.5rem;
      }
      100% {
       
        height: 3rem;
        top: 0rem;
      }
    }
    animation: line-entering 550ms ease-out forwards;
`}

  ${({ exitanimation }) =>
    exitanimation &&
    `
      @keyframes line-exiting {
      0% {
        height: 3rem;  
      }
      100% {
        height: 1.5rem;
        top: -5rem;
      }
    }
    animation: line-exiting 550ms ease-out forwards;
`}
 
    ${({ lineposition, distance }) =>
    lineposition &&
    `
      background-color: red;
    top: ${lineposition}rem;

    @keyframes line-shrink {
    0% {
      height: ${distance}rem;
    }
    100% {
      height: 2rem;
    }
  }
  `};

  &.animate {
    animation: line-shrink 1500ms ease-in;
  }
`;

const StyledOverlayLinkItem = styled.li`
  justify-self: center;
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;  */
  font-weight: 1000;
  font-size: 2.5rem;
`;
