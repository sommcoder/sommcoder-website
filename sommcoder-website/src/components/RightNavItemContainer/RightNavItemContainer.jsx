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
  width: 100%;
  display: flex;
  border: 1px solid white;
`;
