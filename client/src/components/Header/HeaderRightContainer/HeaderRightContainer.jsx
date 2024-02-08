import styled from "styled-components";
import DownloadBtn from "../DownloadBtn/DownloadBtn";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavIconBox from "../NavIconBox/NavIconBox";

import { ICON_COMPONENTS } from "../../../menus/iconMenu";

export default function HeaderRightContainer() {
  return (
    <StyledHeaderRightContainer>
      <span className="header-icon-container">
        {Object.keys(ICON_COMPONENTS).map((name, i) => (
          <NavIconBox
            key={i}
            component={ICON_COMPONENTS[name].component}
            link={ICON_COMPONENTS[name].link}
          />
        ))}
      </span>
      <DownloadBtn />
      <HamburgerMenu />
    </StyledHeaderRightContainer>
  );
}
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
