import styled from "styled-components";

import { ICON_COMPONENTS } from "../../menus/iconMenu";

export default function FooterSection({ refStateObj, navLabelArr }) {
  function handleLinkClick(ev) {
    console.log("footer click");
    window.scrollTo({
      top: refStateObj[ev.target.dataset.section].current.offsetTop - 200 || 0, // needs to be minus cause this offsetTop is the pixel distance FROM the top
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <StyledFooterSection>
      <StyledFooterImage />
      <StyledFooterHeader>SOMMCODER</StyledFooterHeader>
      <span>
        <header>Connect</header>
        <ul>
          <li>
            <a href={"mailto:brian.davies589@gmail.com"}>email</a>
          </li>
          {Object.keys(ICON_COMPONENTS).map((icon, i) => (
            <li key={i}>
              <a href={ICON_COMPONENTS[icon.link]} key={i}>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </span>
      <span>
        <header>Navigate</header>
        <ul>
          {navLabelArr.map((label, i) => (
            <li data-section={label} onClick={handleLinkClick} key={i}>
              {label}
            </li>
          ))}
        </ul>
      </span>
    </StyledFooterSection>
  );
}
const StyledFooterSection = styled.footer`
  position: relative;
  z-index: 1;
  min-width: 32rem; // min screen width worrying about
  max-width: 100%;
  display: grid;
  min-height: 6rem;
  background-image: linear-gradient(to bottom right, #324935, #59755d);
  // the second parameter is negative to go above Footer component
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.08),
    0 0.2rem 0.2rem rgba(0, 0, 0, 0.12), 0 0.4rem 0.4rem rgba(0, 0, 0, 0.16),
    0 0.8rem 0.8rem rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
  // mobile: 1 column, three rows
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 1fr 1fr;
  row-gap: 3rem;
  padding: 3rem 3rem 3rem 4rem;
  // desktop: 2 column, 2 rows

  header {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-decoration: underline;
  }

  span {
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
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: left;
    justify-items: left;
    gap: 2.5rem;
  }

  @media (min-width: 60rem) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  li {
    list-style: none;
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledFooterHeader = styled.div`
  margin-top: 2rem;
  grid-column: span 2;
  font-family: "Major Mono Display", sans-serif;
  font-size: 2.5rem;
  justify-self: center;
  align-self: center;
  @media (min-width: 60rem) {
    justify-self: left;
  }
`;

const StyledFooterImage = styled.div`
  background-image: url("/Wine Splatter.svg");
  position: absolute;
  z-index: 2;
  right: 0;
  top: 0;
`;
