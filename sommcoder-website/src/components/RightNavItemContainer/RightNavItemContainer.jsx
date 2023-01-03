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
  justify-content: right;
  /* align-items: end; */
  width: 100%;
  margin: auto;
`;
