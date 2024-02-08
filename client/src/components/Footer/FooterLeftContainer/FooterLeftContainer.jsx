import styled from "styled-components";

import { ICON_COMPONENTS } from "../../../menus/iconMenu";

export default function FooterLeftContainer() {
  return (
    <StyledFooterLeftContainer>
      <header>Contact</header>
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
    </StyledFooterLeftContainer>
  );
}

const StyledFooterLeftContainer = styled.span`
  height: 100%;
  width: 100%;
  margin-bottom: 1rem;
  z-index: 4;

  grid-column: span 2;
  @media (min-width: 70rem) {
    grid-column: span 1;
  }

  header {
    font-weight: 600;
    margin-bottom: 1rem;
    text-decoration: underline;
  }

  ul {
    display: flex;
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
