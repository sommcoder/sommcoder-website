import styled from "styled-components";
import FooterLeftContainer from "../FooterLeftContainer/FooterLeftContainer";
import FooterRightContainer from "../FooterRightContainer/FooterRightContainer";

export default function Footer() {
  return (
    <StyledFooter>
      <FooterLeftContainer />
      <FooterRightContainer />
    </StyledFooter>
  );
}
const StyledFooter = styled.footer`
  z-index: 2;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 6rem;
  background-image: linear-gradient(to bottom right, #324935, #59755d);
  // the second parameter is negative to go above Footer component
  box-shadow: 0 -1px 1px rgba(0, 0, 0, 0.08), 0 -2px 2px rgba(0, 0, 0, 0.12),
    0 -4px 4px rgba(0, 0, 0, 0.16), 0 -8px 8px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-in-out;
`;
