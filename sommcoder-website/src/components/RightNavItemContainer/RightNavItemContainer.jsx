import styled from "styled-components";
import DownloadBtn from "../DownloadBtn/DownloadBtn";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function RightNavItemContainer() {
  return (
    <StyledRightNavItemContainer>
      <DownloadBtn />
      <HamburgerMenu />
    </StyledRightNavItemContainer>
  );
}
const StyledRightNavItemContainer = styled.span`
  display: grid;
  justify-items: right; // x axis
  width: 100%;
  align-items: center; // y axis
`;
