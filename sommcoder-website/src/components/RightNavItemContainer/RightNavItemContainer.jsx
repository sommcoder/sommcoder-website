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
  width: 50%;
  border: 1px dotted black;
`;
