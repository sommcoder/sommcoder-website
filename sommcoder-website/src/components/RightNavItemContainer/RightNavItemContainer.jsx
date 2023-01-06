import styled from "styled-components";
import DownloadBtn from "../DownloadBtn/DownloadBtn";

export default function RightNavItemContainer() {
  return (
    <StyledRightNavItemContainer>
      <DownloadBtn />
    </StyledRightNavItemContainer>
  );
}
const StyledRightNavItemContainer = styled.span`
  display: grid;
  justify-items: right;
  width: 100%;
  align-items: right;
`;
