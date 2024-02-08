import styled from "styled-components";
import OverlayNavList from "../OverlayNavList/OverlayNavList";

export default function Overlay() {
  return (
    <StyledOverlay>
      <OverlayNavList />
    </StyledOverlay>
  );
}
const StyledOverlay = styled.nav`
  z-index: 5;
  position: fixed;
  background-color: #d4c6e4;
  opacity: 95%;
  height: 100%;
  width: 45%;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  padding-top: 8rem;
`;
