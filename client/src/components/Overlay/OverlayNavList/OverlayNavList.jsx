import styled from "styled-components";
import { ICON_COMPONENTS } from "../../../menus/iconMenu";

export default function OverlayNavList() {
  return (
    <StyledOverlayNavList>
      <ul className="overlay-footer-menu">
        {Object.keys(ICON_COMPONENTS).map((title, i) => (
          <li key={i}>{ICON_COMPONENTS[title].component}</li>
        ))}
      </ul>
    </StyledOverlayNavList>
  );
}
const StyledOverlayNavList = styled.div`
  li {
    font-size: 2rem;
    color: black;
    list-style: none;
    margin-top: 0.5rem;

    &:hover {
      cursor: pointer;
    }
  }
`;
