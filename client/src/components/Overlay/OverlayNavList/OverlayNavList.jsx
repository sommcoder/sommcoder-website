import styled from 'styled-components';
import { ICON_COMPONENTS } from '../../../menus/iconMenu';
import { useState } from 'react';

export default function OverlayNavList({
  refStateObj,
  mobileMenu,
  toggleMobileMenu,
  navLabelArr,
  menuAnimation,
  toggleMenuAnimation,
}) {
  function handleLinkClick(ev) {
    ev.preventDefault();
    const section = ev.target.dataset.section;
    console.log('section:', section);
    window.scrollTo({
      top: refStateObj[section].current.offsetTop - 200 || 0, // needs to be minus cause this offsetTop is the pixel distance FROM the top
      left: 0,
      behavior: 'smooth',
    });
    const newNavMenuState = navMenuState;
    const index = ev.target.dataset.sequence;
    // current remains true:
    newNavMenuState[section] = true;
    Object.keys(newNavMenuState).forEach(key => {
      if (key === section) return; // skip current
      newNavMenuState[key] = false;
    });

    setNavMenuState(prevNavMenuState => ({
      ...prevNavMenuState,
      newNavMenuState,
    }));
    adjustCurrRefLineLocation(sequence);
    adjustCurrActiveLink(section); // record the new currentPosition
  }

  // tracks the active state, the reference line will need to know where to go. The distance will be fixed. This won't change with the screen width.
  const iconArr = Object.keys(ICON_COMPONENTS);
  const iconCount = iconArr.length;
  const navCount = navLabelArr.length;
  // each index is 6rem away from the ones next to it
  const navIconInterval = 27.5 / iconCount + 0.5; // in rem
  const initNavMenuStateObj = {};
  // set the state object
  navLabelArr.forEach(nav =>
    nav === 'main'
      ? (initNavMenuStateObj[nav] = true)
      : (initNavMenuStateObj[nav] = false)
  );
  const [currActiveLink, adjustCurrActiveLink] = useState('main');
  const [currRefLineLocation, adjustCurrRefLineLocation] = useState(0);
  const [navMenuState, setNavMenuState] = useState(initNavMenuStateObj);
  console.log('navMenuState:', navMenuState);
  // will need to find the index difference between the CURRENT and the NEWLY CLICKED list item and multiply that by 6rem

  console.log(
    `navMenuState[currActiveLink]
              ? currRefLineLocation -
                navLabelArr.findIndex(el => el === currActiveLink)
              : false:`,
    navMenuState[currActiveLink]
      ? currRefLineLocation - navLabelArr.findIndex(el => el === currActiveLink)
      : false
  );

  return (
    <StyledOverlayNavList
      iconCount={iconCount}
      navCount={navCount}
      navIconInterval={navIconInterval}
      currActiveLink={currActiveLink}
    >
      <ul className="overlay-nav-menu">
        <StyledReferenceLine
          active={
            navMenuState[currActiveLink]
              ? currRefLineLocation -
                navLabelArr.findIndex(el => el === currActiveLink)
              : false
          } // true if active
        ></StyledReferenceLine>
        {navLabelArr.map((label, i) => (
          <StyledOverlayLinkItem
            data-section={label}
            data-sequence={i} // should be fine mathematically to keep this as a 0 index
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
  position: relative; // for the hamburger x
  grid-template-rows: 27.5rem 27.5rem;
  row-gap: 2rem;

  .overlay-nav-menu {
    position: relative;
    align-items: center;
    justify-items: center;
    display: grid;
    row-gap: 0.5rem;
    width: 100%;
    padding-bottom: 2rem; // hack fix
    border-bottom: 0.1rem solid rgba(0, 0, 0, 0.5);
    ${({ navCount }) =>
      navCount &&
      `grid-template-rows: repeat(${navCount}, 1fr);
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
`;

const StyledReferenceLine = styled.span`
  position: absolute;
  height: 3rem;
  background-color: black;
  width: 0.3rem;
  right: 5%;
  top: -7%; // starting point
  border-radius: 0.5rem;
`;

const StyledOverlayLinkItem = styled.li`
  justify-self: center;
  font-weight: 800;
  font-size: 2.2rem;
`;
