import styled from "styled-components";
import { ICON_COMPONENTS } from "../../../menus/iconMenu";

export default function OverlayNavList() {
  return (
    <StyledOverlayNavList>
      <ul className="overlay-footer-menu">
        {Object.keys(ICON_COMPONENTS).map((title, i) => (
          <li key={i}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={ICON_COMPONENTS[title].link}
            >
              {title}
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

  ul {
    justify-items: center;
    display: grid;
    row-gap: 2rem;
    width: auto;
  }
  li {
    font-size: 2rem;
    color: black;
    list-style: none;
    margin-top: 0.5rem;

    &:hover {
      cursor: pointer;
    }

    a {
      color: black;
    }
  }
`;
