import { useEffect } from "react";
import styled from "styled-components";

export default function FooterRightContainer({ refStateObj, navLabelArr }) {
  // Need to get the locations on the page.

  function handleLinkClick(ev) {
    console.log("footer click");
    window.scrollTo({
      top: refStateObj[ev.target.dataset.section].current.offsetTop - 200 || 0, // needs to be minus cause this offsetTop is the pixel distance FROM the top
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <StyledFooterRightContainer>
      <header>Navigation</header>
      <ul>
        {navLabelArr.map((label, i) => (
          <li data-section={label} onClick={handleLinkClick} key={i}>
            {label}
          </li>
        ))}
      </ul>
    </StyledFooterRightContainer>
  );
}

const StyledFooterRightContainer = styled.span`
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 4;
  grid-column: span 2;
  display: grid;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  row-gap: 1rem;

  @media (min-width: 60rem) {
    justify-content: left;
    align-content: left;
    align-items: left;
    justify-items: left;
    grid-column: span 1;
  }

  header {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-decoration: underline;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: left;
    justify-items: left;
    gap: 2.5rem;
  }

  li {
    list-style: none;
  }

  div {
  }
`;
