import styled from "styled-components";
import OverlayNavList from "../OverlayNavList/OverlayNavList";

export default function OverlaySection({ refStateObj }) {
  return (
    <StyledOverlaySection>
      <OverlayNavList />
    </StyledOverlaySection>
  );
}
const StyledOverlaySection = styled.nav`
  z-index: 5;
  position: fixed;
  background-color: rgba(212, 198, 228, 0.9);
  height: 100%;
  width: 45%;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  padding-top: 8rem;
`;
